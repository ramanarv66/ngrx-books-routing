import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book, BooksState } from '../store/books.state';
import { getAllBooksAction } from '../store/books.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent implements OnInit {

  constructor(private store: Store<{ bReducer: BooksState }>, private router: Router) { }
  allBooks: Book[] = [];
  ngOnInit(): void {
    this.store.dispatch(getAllBooksAction());
    this.store.select('bReducer').subscribe(
      (data: BooksState) => {
        this.allBooks = data.books
      }
    )
  }

  edit(id: number) {

    this.router.navigate(['edit/' + id])

  }
}
