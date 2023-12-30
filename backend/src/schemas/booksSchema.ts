// 2. Create a Schema corresponding to the document interface.
import { Schema, model } from 'mongoose';
import { Book } from '../types';

export const bookSchema = new Schema<Book>({
    name: { type: String, required: true },
    id: { type: Number, required: true },
});

// 3. Create a Model.
export const bookModel = model<Book>('Book', bookSchema);
