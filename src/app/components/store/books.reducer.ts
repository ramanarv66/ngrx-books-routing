import { createReducer, on } from "@ngrx/store";
import { BooksState, initialState } from "./books.state";
import { getAllBooksActionSuccess } from "./books.action";

export const _booksReducer = createReducer(initialState, on(
    getAllBooksActionSuccess, (state, action) => {
        return {
            ...state,
            books: action.allBooks
        }
    }
))

export function booksReducer(state: BooksState, action: any) {
    return _booksReducer(state, action);
}