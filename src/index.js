import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import routes from './routes';

import models, { connectDb } from './models';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('werdna'),
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

// // generalize the redirect for all routes
// app.get('/some-new-route', function (req, res, next) {
//   res.status(301).redirect('/not-found');
// });

// // Error-handling middleware
// app.use((error, req, res, next) => {
//   return res.status(500).json({ error: error.toString() });
// });

// redirect for all routes that are not matched by our APIs
app.get('*', function (req, res, next) {
  const error = new Error(
    `${req.ip} tried to access ${req.originalUrl}`,
  );

  error.statusCode = 301;

  next(error);
});

app.use((error, req, res, next) => {
  if (!error.statusCode) error.statusCode = 500;

  if (error.statusCode === 301) {
    return res.status(301).redirect('/not-found');
  }

  return res
    .status(error.statusCode)
    .json({ error: error.toString() });
});

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);
    createUsersWithMessages();
  }

  app.listen(port, () => console.log(`Listening on ${port}`));
});

const createUsersWithMessages = async () => {
  const user1 = new models.User({
    username: 'werdna',
  });

  const user2 = new models.User({
    username: 'rogerson',
  });

  const message1 = new models.Message({
    text: 'Published the Road to learn React',
    user: user1.id,
  });

  const message2 = new models.Message({
    text: 'Happy to release ...',
    user: user2.id,
  });

  const message3 = new models.Message({
    text: 'Published a complete ...',
    user: user2.id,
  });

  await user1.save();
  await user2.save();

  await message1.save();
  await message2.save();
  await message3.save();
};
