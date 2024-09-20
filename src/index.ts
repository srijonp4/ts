import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  return res.json({
    greetings: 'Hello, World!',
  });
});

app.listen(3000, () => {
  console.log('app is listening on http://localhost:3000');
});
