import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { bookModel } from './schemas/booksSchema';
import { router } from './routes';

import { connect } from 'mongoose';
const DB_URL = `mongodb+srv://dima:8326@cluster0.m6o8v9k.mongodb.net/?retryWrites=true&w=majority`;

dotenv.config();

const app: Express = express();
app.use(cors());
const port = process.env.PORT || 4000;

app.post('/', (req: Request, res: Response) => {
    //res.send('Express + TypeScript Server!!!!!!!'); //like return
    const mockBooks = [
        { name: 'test-1', id: 1 },
        { name: 'test-2', id: 2 },
        { name: 'test-3', id: 3 },
    ];
    const book = new bookModel({
        name: 'test-1',
        id: 1,
    });
    res.status(200).json({ book });
});

run().catch((err) => console.log(err));

async function run() {
    // 4. Connect to MongoDB
    try {
        await connect(DB_URL, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
        });

        app.listen(port, () => {
            console.log(
                `[server]: Server is running at http://localhost:${port}`
            );
        });

        const book = new bookModel({
            name: 'test-1',
            id: 1,
        });
        await book.save();

        console.log(book.name);
    } catch (error) {
        console.log(error);
    }
}
