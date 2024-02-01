import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { bookModel } from './schemas/booksSchema';
import { router } from './routes';
import { connect } from 'mongoose';

const DB_URL = `mongodb+srv://dima:8326@cluster0.m6o8v9k.mongodb.net/?retryWrites=true&w=majority`;

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 4000;

app.use('/', router);

run().catch((err) => console.log(err));

async function run() {
    // 4. Connect to MongoDB
    try {
        await connect(DB_URL);

        app.listen(port, () => {
            console.log(
                `[server]: Server is running at http://localhost:${port}`
            );
        });

        const book = new bookModel({
            name: 'test-7',
        });
        await book.save();

        console.log(book.name);
    } catch (error) {
        console.log(error);
    }
}
