import { title } from 'process';

export interface book {
    id: number;
    name: string;
    content: string;
}

export interface WolnelekturyAPIType {
    kind: string;
    full_sort_key: string;
    title: string;
    url: string;
    cover_color: string;
    author: string;
    cover: string;
    epoch: string;
    href: string;
    has_audio: boolean;
    genre: string;
    simple_thumb: string;
    slug: string;
    cover_thumb: string;
    liked: null;
}

export interface BookApiType {
    title: string;
    url: string;
    language: string;
    epochs: Author[];
    genres: Author[];
    kinds: Author[];
    authors: Author[];
    translators: Translator[];
    fragment_data: { html: string; title: string };
    children: any[];
    parent: null;
    preview: boolean;
    epub: string;
    mobi: string;
    pdf: string;
    html: string;
    txt: string;
    fb2: string;
    xml: string;
    media: any[];
    audio_length: string;
    cover_color: string;
    simple_cover: string;
    cover_thumb: string;
    cover: string;
    simple_thumb: string;
    isbn_pdf: string;
    isbn_epub: string;
    isbn_mobi: string;
}

export interface Author {
    url: string;
    href: string;
    name: string;
    slug: string;
}

export interface Translator {
    name: string;
}

export interface StoreType {
    booksReducer: { books: WolnelekturyAPIType[] };
}
