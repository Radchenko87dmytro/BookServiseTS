//import { useState } from 'react';

import { databaseResponseParser, deepCopyParser } from './../common/index';
import { LoremIpsum, loremIpsum } from 'lorem-ipsum';

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { bookModel } from '../schemas/booksSchema';
import { Book, response, responseDB } from '../types';
import { Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

// loremIpsum({
//     count: 1,
//   format: "plain",
//   paragraphLowerBound: 3,
//   paragraphUpperBound: 7,
//   random: Math.random,
//   sentenceLowerBound: 5,
//   sentenceUpperBound: 15,
//   suffix: "\n",
//   units: "sentences",
//   //words: ["ad", ...] ,
// })

class BookController {
    async createBook(req: Request, res: Response) {
        try {
            const { title } = req.body;
            const newBook = await bookModel.create({ title });
            return res.status(200).json({
                message: 'Book created successfully',
                data: databaseResponseParser(deepCopyParser(newBook)),
            });
        } catch (e) {
            return res.status(500).json({ message: 'Server Error', data: e });
        }
    }

    async randomCreateBook(req: Request, res: Response) {
        try {
            const { title } = req.body;
            const randomBook = await bookModel.create({
                title: `title-${uuidv4()}`,
                content: `content-${loremIpsum({
                    paragraphLowerBound: 3, // Min. number of sentences per paragraph.
                    paragraphUpperBound: 7,
                })}`,
            });
            return res.status(200).json({
                message: 'Random Book created successfully',
                data: databaseResponseParser(deepCopyParser(randomBook)),
            });
            console.log(randomBook);
        } catch (e) {
            return res.status(500).json({ message: 'Server Error', data: e });
        }
    }

    async getAllBooks(req: Request, res: Response) {
        try {
            let books = await bookModel.find();
            //console.log(req);

            if ('sort' in req.query) {
                const sorted = books.sort();
                if (req.query.sort === 'asc') {
                    books = sorted;
                }
                if (req.query.sort === 'desc') {
                    books = sorted.reverse();
                }
            }

            // console.log(req.query);
            // console.log(Object.keys(req.query));

            if (Object.keys(req.query).includes('page')) {
                // const pagePagination = (
                //     books: responseDB | responseDB[],

                // ) => {
                //     const pageNumber: any =
                //         req.query.page && parseInt(req.query.page as string);
                //     console.log(pageNumber);

                //     const booksPerPage = 3;
                //     const lastBooksIndex = pageNumber * booksPerPage;
                //     const firstBooksIndex = lastBooksIndex - booksPerPage;

                //     books = books.slice(firstBooksIndex, lastBooksIndex);
                //     return books;
                // };

                const pageNumber: any =
                    req.query.page && parseInt(req.query.page as string);

                const booksPerPage = 3;
                const lastBooksIndex = pageNumber * booksPerPage;
                const firstBooksIndex = lastBooksIndex - booksPerPage;
                books = books.slice(firstBooksIndex, lastBooksIndex);
            }

            const query = bookModel.find({
                // name: 'test-6',
                // id: '65a44cb605429d9b905c795a',
            });
            //query.getFilter();
            //query.find({  });
            console.log(query.getFilter());

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
        } catch (e) {
            return res.status(500).json({ message: 'Server Error', data: e });
        }
    }

    async updateBook(req: Request, res: Response) {
        try {
            const bookId = req.params.id;
            const { title } = req.body;

            const book = await bookModel.findByIdAndUpdate(
                bookId,
                { title },
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
