import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../state/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() add = new EventEmitter<Product>();
  @Output() subtract = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

}
