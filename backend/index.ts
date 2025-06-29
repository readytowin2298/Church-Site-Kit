import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/devotionals', (_, res) => {
  res.json([{ date: '2025-06-27', text: 'God is our refuge and strength.' }]);
});

// Additional routes in /routes

app.listen(process.env.PORT || 3001, () =>
  console.log(`🚀 Backend running on port ${process.env.PORT || 3001}`)
);
