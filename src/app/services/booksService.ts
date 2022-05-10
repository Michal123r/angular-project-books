import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../model/book';
import { BookResponse } from '../model/book-response';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {

  constructor(private httpClient: HttpClient) { }

  

  getBooks(text: string): Observable<BookResponse> {
    
    return this.httpClient.get<any>(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
    .pipe(map(res =>  this.mapResponse(res)))
    
       
  }
  mapResponse(res: any): BookResponse {
    return  {totalItems: res.totalItems,
      booksList: this.mapItem(res.items)
    };
  }
  mapItem(items: any):Book[] {
    var booksArr: Book[] = [];
    items.forEach((book:any )=> {
      booksArr.push( {title:book?.volumeInfo?.title, previewImgUrl:book?.volumeInfo?.imageLinks?.thumbnail})
    });
    return booksArr ;
  }

}
