import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/services/app.service';
import { Book } from './../../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  searchStr: string = '';

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.books = this.appService.getBooks();
  }

  onSelect(i:number) {
    this.appService.selectBook(i);
  }

}
