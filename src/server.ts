import express from 'express';
import config from './config';
import { errorHandler } from './middleware/error.middleware';
import router from './routes/referral.route';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', router);

// Error handling
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});