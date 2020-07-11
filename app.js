//Imports
//teste
import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';

const app = express();

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
    console.log('Conectado ao banco');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB' + error);
  }
})();

app.use(express.json());
app.use(studentRouter);
app.listen(process.env.PORT, () => console.log('API Iniciada'));
