import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/model/cart.model';
import { Product } from 'src/app/products/state/product.model';
import { CartQuery } from '../state/cart.query';
import { CartService } from '../state/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items$: Observable<(CartItem & Product)[]> | undefined;
  total$: Observable<number> | undefined;

  constructor(private cartQuery: CartQuery, 
    private cartService: CartService) {}

  ngOnInit(): void {
    this.items$ = this.cartQuery.selectItems$;
    this.total$ = this.cartQuery.selectTotal$
  }

  remove({ productId }: CartItem) {
    this.cartService.remove(productId);
  }

}
