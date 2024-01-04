import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book, BooksState } from "./books.state";

export const bookSelector = createFeatureSelector<BooksState>('bReducer');
export const getBooksSelector = createSelector(bookSelector, (state) => {
    return {
        ...state.books
    }
})