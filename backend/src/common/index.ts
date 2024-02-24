import { Book } from './../types/index';
import { responseDB } from '../types';
import { Request } from 'express';

export const databaseResponseParser = (data: responseDB | responseDB[]) => {
    if (Array.isArray(data)) {
        return data.map((i: responseDB) => {
            delete i.__v;
            i.id = i._id;
            delete i._id;
            return i;
        });
    }
    delete data.__v;
    data.id = data._id;
    delete data._id;
    //console.log('database', data);
    return data;
};

export const deepCopyParser = (data: responseDB | responseDB[]) => {
    return JSON.parse(JSON.stringify(data));
};

// export const sortQueryParser = (
//     data: responseDB | responseDB[],
//     req: Request
// ) => {
//     if ('sort' in req.query) {
//         if (req.query.sort === 'asc') {
//             data = data.sort();
//         }
//         if (req.query.sort === 'desc') {
//             data = data.sort().reverse();
//         }
//     }
//     return data;
// };
