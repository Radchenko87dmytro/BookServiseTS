import axios from 'axios';

const url = 'https://wolnelektury.pl/api';
const localApi = 'http://localhost:3000';

export const getAllBooks = async () =>
    axios.get(url + `/books`).then((response) => response.data);

export const getBook = async (bookName: string) =>
    axios.get(url + `/books/` + bookName).then((response) => response.data);

export const getBooksApi = async () =>
    axios.get(localApi + `/books`).then((response) => response.data);
