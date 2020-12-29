import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Project');
});

app.listen(port, () => console.log(`Listening on ${port}`));
