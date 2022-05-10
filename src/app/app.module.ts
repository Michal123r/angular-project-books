import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BooksListComponent } from './componenets/books-list/books-list.component';
import { BookComponent } from './componenets/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
   
    BooksListComponent,
        BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
