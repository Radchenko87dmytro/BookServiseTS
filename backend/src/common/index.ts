import { responseDB } from '../types';

export const databaseResponseParser = (data: responseDB[]) => {
    const result = data.map((i: responseDB) => {
        delete i.__v;
        i.id = i._id;
        delete i._id;
        return i;
    });
    console.log(result);
    return result;
};
