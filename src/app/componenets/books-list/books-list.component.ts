import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';
import { BookResponse } from 'src/app/model/book-response';
import { BooksServiceService } from 'src/app/services/booksService';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksListComponent implements OnInit {
  books$: Observable<BookResponse> | undefined ;
  searchText: string = '';
  constructor(private service: BooksServiceService, private crf:ChangeDetectorRef) { }

  ngOnInit(): void {
   // this.books$ = this.service.getBooks() as Observable<BookResponse> ;
  
  }
  search(event: any){
   var text = event.target.value;
   this.books$ = this.service.getBooks(text) as Observable<BookResponse> ;

  }

}
