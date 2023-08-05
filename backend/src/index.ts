require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

const app = express();

const { PORT, MONGO_URI } = process.env;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', userRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e) => console.error(e));

app.listen(PORT, () => {
  console.log(`
    #############################################
        🛡️ Server listening on port: ${PORT} 🛡️
    #############################################    
    `);
});
