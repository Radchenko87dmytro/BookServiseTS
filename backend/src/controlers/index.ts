import { databaseResponseParser, deepCopyParser } from './../common/index';

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { bookModel } from '../schemas/booksSchema';
import { Book, response, responseDB } from '../types';
import { Types } from 'mongoose';

// databaseResponseParser([
//     {
//         _id: '659775ef0e078dff7e51b976',
//         name: 'test-0',
//         id: 1,
//         __v: 0,
//     },
// ]);

class BookController {
    async createBook(req: Request, res: Response) {
        try {
            const { name } = req.body;
            const newBook = await bookModel.create({ name });
            return res.status(200).json({
                message: 'Book created successfully',
                data: databaseResponseParser(deepCopyParser(newBook)),
            });
        } catch (e) {
            return res.status(500).json({ message: 'Server Error', data: e });
        }
    }

    async getAllBooks(req: Request, res: Response) {
        try {
            const books = await bookModel.find();
            return res.status(200).json({
                message: 'Books gets successfully',
                data: databaseResponseParser(deepCopyParser(books)),
            });
        } catch (e) {
            return res.status(500).json({ message: 'Server Error', data: e });
        }
    }

    async getBook(req: Request, res: Response) {
        try {
            const bookId = req.params.id;
            const book = await bookModel.findById(bookId);

            if (!book) {
                return res
                    .status(404)
                    .json({ message: 'Book not found', data: book });
            }
            res.status(200).json({
                message: 'Book found',
                data: databaseResponseParser(deepCopyParser(book)),
            });

            const DeepCopy = JSON.parse(JSON.stringify(book));
            console.log(
                'bookDeepCopy',
                databaseResponseParser(deepCopyParser(book))
            );
        } catch (e) {
            return res.status(500).json({ message: 'Server Error', data: e });
        }
    }

    async updateBook(req: Request, res: Response) {
        try {
            const bookId = req.params.id;
            const { name } = req.body;

            const book = await bookModel.findByIdAndUpdate(
                bookId,
                { name },
                { new: true, runValidators: true }
            );

            if (!book) {
                return res
                    .status(404)
                    .json({ message: 'Book not found', data: book });
            }

            res.status(200).json({
                message: 'Book updated successfully',
                data: databaseResponseParser(deepCopyParser(book)),
            });
        } catch (e) {
            return res.status(500).json({ message: 'Server Error', data: e });
        }
    }

    async deleateBook(req: Request, res: Response) {
        try {
            const bookId = req.params.id;
            const book = await bookModel.findByIdAndDelete(bookId);

            if (!book) {
                return res
                    .status(404)
                    .json({ message: 'Book not found', data: book });
            }

            return res.status(200).json({
                message: 'Book deleted successfully',
                data: databaseResponseParser(JSON.parse(JSON.stringify(book))),
            });
        } catch (e) {
            return res.status(500).json({ message: 'Server Error', data: e });
        }
    }
}

export default new BookController();
