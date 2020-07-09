//Imports
//teste
import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
// Conectar ao MongoDB pelo mongoose
(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@bootcamp.vjfcx.mongodb.net/grades?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log('Erro ao conectar no MongoDB' + error);
  }
})();

app.use(express.json());
app.use(studentRouter);
app.listen(process.env.PORT, () => console.log('API Iniciada'));
