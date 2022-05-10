import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {
  @Input() book: Book | null = null;
  @Output() addToCartList = new EventEmitter<Book>();
  constructor() { }

  ngOnInit(): void {
  }
    addToCart(){

    }

}
