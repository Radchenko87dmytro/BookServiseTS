// 2. Create a Schema corresponding to the document interface.
import { Schema, model } from 'mongoose';
import { Book } from '../types';

export const bookSchema = new Schema<Book>(
    {
        title: { type: String, required: true },
        content: { type: String, require: true },
        createdAt: { type: String, required: false },
        updatedAt: { type: String, required: false },
    },
    { collection: 'books', virtuals: true }
);

bookSchema.pre('save', function (next) {
    const today = new Date().toLocaleString('en-GB');
    if (!this.createdAt) this.createdAt = today;
    this.updatedAt = today;
    next();
});

// 3. Create a Model.
export const bookModel = model<Book>('Book', bookSchema);
