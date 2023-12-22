import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
app.use(cors());
const port = process.env.PORT || 4000;

app.get('/books', (req: Request, res: Response) => {
    //res.send('Express + TypeScript Server!!!!!!!'); //like return
    const mockBooks = [
        { name: 'test-1', id: 1 },
        { name: 'test-2', id: 2 },
        { name: 'test-3', id: 3 },
    ];

    res.status(200).json({ content: mockBooks, message: 'bookList' });
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
