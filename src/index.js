import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import sum from './sum';
import callMyFunction from './call-my-function';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  console.log(sum(1, 2));

  callMyFunction( () => {
    console.log('Hello world')

  res.send('Hello Project');
})


app.listen(port, () => console.log(`Listening on ${port}`))