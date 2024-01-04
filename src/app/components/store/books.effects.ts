import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BooksService } from "../../book.service";
import { getAllBooksAction, getAllBooksActionSuccess, updateBookAction, updateBookActionSuccess } from "./books.action";
import { map, mergeMap } from "rxjs";
import { Book } from "./books.state";


@Injectable({
    providedIn: 'root'

})
export class BooksEffect {

    constructor(private action$: Actions, private service: BooksService) { }

    getBooks$ = createEffect((): any => {

        return this.action$.pipe(
            ofType(getAllBooksAction), mergeMap((action) => {

                return this.service.getAllBooks().pipe(
                    map((data: Book[]) => {
                        return getAllBooksActionSuccess({ allBooks: data })
                    })
                )

            })
        )
    }, {})

    updateBook$ = createEffect((): any => {
        return this.action$.pipe(
            ofType(updateBookAction),
            mergeMap((action) => {
                return this.service.updateBooks(action.updatedBook).pipe(
                    map((data: any) => {
                        console.log(data)
                        return updateBookActionSuccess({ updatedBook: data })

                    })
                )
            })
        )
    }, {})
}