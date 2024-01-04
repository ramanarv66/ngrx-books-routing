import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "./components/store/books.state";


@Injectable({
    providedIn: 'root'
})
export class BooksService {
    url = 'http://localhost:3000/books'
    constructor(private http: HttpClient) {

    }

    getAllBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.url);
    }
    updateBooks(book: Book) {
        return this.http.put(this.url + '/' + book.id, book)
    }
}