import { Component } from '@angular/core';
import { BooksService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-books-routing';

  allBooks: any;

  constructor(private bookService: BooksService){

    this.bookService.getAllBooks().subscribe((data)=>{
      this.allBooks = data;
      console.log(this.allBooks)
    })

  }
}
