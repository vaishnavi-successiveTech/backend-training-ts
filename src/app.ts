import express, { Request, Response } from 'express';
import { users } from './mockData';

const app = express();
const PORT = 3000;

app.get('/api/users', (req: Request, res: Response) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Express API running at http://localhost:${PORT}/api/users`);
});
