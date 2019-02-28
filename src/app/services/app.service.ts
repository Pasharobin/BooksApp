import { Injectable } from '@angular/core';

import { Book } from './../models/book.model';

@Injectable()
export class AppService {

  books: Book[] = [
    {name: "The Girl in Room 105", gener: "Literature & Fiction", image: "/images/1.jpg", selected: false, links: ["https://www.amazon.in/gp/product/1542040469", "https://www.amazon.in/gp/product"], description: "Hi, I’m Keshav, and my life is screwed. I hate my job and my girlfriend left me. Ah, the beautiful Zara. Zara is from Kashmir. She is a Muslim. And did I tell you my family is a bit, well, traditional? Anyway, leave that."},
    {name: "Mind is your Business", gener: "Business", image: "/images/2.jpg", selected: false, links: ["https://www.amazon.in/gp/product/B00WWAM34M", "https://www.amazon.in/gp/product/B00"], description: "For most people, the mind seems to be an unruly cacophony, attempting to grasp and shape everything which falls in its purview."},
    {name: "The Perfect Us", gener: "Romance", image: "/images/3.jpg", selected: false, links: ["https://www.amazon.in/gp/product/0143426591", "https://www.amazon.in/gp/product"], description: "Avantika is an investment banker, an ambitious go-getter and the exact opposite of Deb-a corporate professional turned failed writer, turned scripter of saas-bahu serials."},
    {name: "The Theory of Everything", gener: "Biographies & Autobiographies", image: "/images/4.jpg", selected: false, links: ["https://www.amazon.in/gp/product/8179925919", "https://www.amazon.in/gp/product"], description: "Seven lectures by the brilliant theoretical physicist have been compiled into this book to try to explain to the common man, the complex problems of mathematics and the question that has been gripped everyone all for centuries, the theory of existence."}
  ];

  constructor() { }

  getBooks() {
    return this.books;
  }

  addBook() {
    let book = new Book( "", "", "", "", [""], true);
    this.books.push(book);
  }

  deleteBook(i:number) {
    this.books.splice(i, 1);
  }

  selectBook(i:number) {
    this.books[i].selected = !this.books[i].selected;
  }

  deleteLink(i:number, li:number) {
    this.books[i].links.splice(li, 1);
  }

  addLink(i:number) {
    this.books[i].links.push("");
  }

  clearSelected() {
    this.books.forEach(book => book.selected = false);
  }
}
