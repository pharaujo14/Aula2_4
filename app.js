import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';

// Conectar ao MongoDB pelo mongoose
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:1111@bootcamp.vjfcx.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log('Erro ao conectar no MongoDB' + error);
  }
})();

const app = express();
app.use(express.json());
app.use(studentRouter);
app.listen(3000, () => console.log('API Iniciada'));
