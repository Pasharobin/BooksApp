import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/services/app.service';
import { Book } from './../../models/book.model';

@Component({
  selector: 'app-books-admin',
  templateUrl: './books-admin.component.html',
  styleUrls: ['./books-admin.component.scss']
})
export class BooksAdminComponent implements OnInit {

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

  deleteLink(i:number, li:number) {
    this.appService.deleteLink(i, li);
  }

  addLink(i:number) {
    this.appService.addLink(i);
  }

  addBook() {
    this.appService.addBook();
  }

  deleteBook(i:number) {
    this.appService.deleteBook(i);
  }

}
