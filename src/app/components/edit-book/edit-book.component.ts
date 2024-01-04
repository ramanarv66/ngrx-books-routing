import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book, BooksState } from '../store/books.state';
import { bookSelector } from '../store/book.selector';
import { updateBookAction } from '../store/books.action';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent {
  book: any;
  bookForm = new FormGroup({
    id: new FormControl(0),
    author: new FormControl(''),
    pages: new FormControl(0),
    bookName: new FormControl('')


  })

  constructor(private activatedRoute: ActivatedRoute, private store: Store<{ bReducer: BooksState }>) {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = Number(params.get('id'))
      console.log(params.get('id'));
      this.store.select(bookSelector).subscribe((data) => {
        console.log(data.books)

        this.book = data.books.find((eachBook) => Number(eachBook.id) == id)
        this.createForm();
      })

    })

  }

  createForm() {
    this.bookForm = new FormGroup({
      id: new FormControl(this.book.id),
      author: new FormControl(this.book.author),
      pages: new FormControl(this.book.pages),
      bookName: new FormControl(this.book.bookName)


    })
  }

  update(){
    this.store.dispatch(updateBookAction(this.book))
  }
}
