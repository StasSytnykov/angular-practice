import { Component, OnInit } from '@angular/core';

type Book = {
  name: string;
  author: string;
  src: string;
};

@Component({
  selector: 'app-books',
  templateUrl: 'books.component.html',
  styleUrls: ['books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    {
      name: 'Clean Code',
      author: 'Robert C. Martin',
      src: 'https://m.media-amazon.com/images/I/51E2055ZGUL._SY522_.jpg',
    },
    {
      name: 'Clean Code 2',
      author: 'Robert C. Martin 2',
      src: 'https://m.media-amazon.com/images/I/51E2055ZGUL._SY522_.jpg',
    },
  ];

  isShowing = false;
  myText = '';

  constructor() {}

  ngOnInit(): void {}
}
