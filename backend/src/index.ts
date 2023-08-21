import { connectDB } from '@middleware/db';
import { setupMiddleware } from '@middleware/middleware';

import express from 'express';
import userRoutes from '@routes/userRoutes';
import loginRoutes from '@routes/loginRoutes';

require('dotenv').config();

const app = express();
const { PORT, MONGO_URI } = process.env;

setupMiddleware(app);

app.use('/api', userRoutes);
app.use('/api', loginRoutes);

connectDB(MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`
        #############################################
            🛡️ Server listening on port: ${PORT} 🛡️
        #############################################    
        `);
  });
});
