import axios from 'axios';

const url = 'https://wolnelektury.pl/api';

export const getAllBooks = async () =>
    axios.get(url + `/books`).then((response) => response.data);

export const getBook = async (bookName: string) =>
    axios.get(url + `/books/` + bookName).then((response) => response.data);
