// 1. Create an interface representing a document in MongoDB.
import { Document } from 'mongoose';
import { Types } from 'mongoose';

export interface Book extends Document {
    name: string;
    createdAt: String;
    updatedAt: String;
}

export interface response {
    data: string;
    message: string;
}

export interface responseDB {
    _id?: string | number; //Types.ObjectId
    id?: string | number;
    name: string;
    __v?: number;
}
