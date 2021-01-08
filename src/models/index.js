import mongoose from 'mongoose';

import User from './user';
import Message from './message';

const eraseDatabaseOnSync = true;

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const models = { User, Message };

export { connectDb };

export default models;
