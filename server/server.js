// make a express server
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import photoRoute from './routers/photoRoute.js';

// dotenv config
dotenv.config();

// express init
const app = express();

// dotenv variables
const port = process.env.PORT || 5050;

// req body init
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/photo', photoRoute);
// make a server
app.listen(port, () => {
  connectDB();
  console.log(`Facebook app listening at http://localhost:${port}`);
});
