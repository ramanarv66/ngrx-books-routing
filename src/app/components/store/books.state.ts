export interface Book {
    id: number;
    bookName: string;
    author: string;
    pages: number;
}

export interface BooksState {
    books: Book[];
}

export const initialState: BooksState = {

    books: [] = []
    // 'books': [{
    //     id: 0,
    //     bookName: '',
    //     author: '',
    //     pages: 0
    // }]
    // books: [] = [{
    //     id: 0,
    //     bookName: '',
    //     author: '',
    //     pages: 0
    // }]

}