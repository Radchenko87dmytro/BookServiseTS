import axios from 'axios';

const url = 'https://wolnelektury.pl/api';

export const getAllBooks = async () =>
    axios.get(url + `/books`).then((response) => response.data);
