import { createAction, props } from "@ngrx/store";
import { Book } from "./books.state";


export const getAllBooksAction = createAction('getAllBooksAction');
export const getAllBooksActionSuccess = createAction('getAllBooksActionSuccess', props<{ allBooks: Book[] }>());
export const updateBookAction = createAction('updateBookAction', props<{ updatedBook: Book }>());
export const updateBookActionSuccess = createAction('updateBookActionSuccess', props<{ updatedBook: Book }>());