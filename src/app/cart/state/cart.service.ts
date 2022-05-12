import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { createCartItem } from 'src/app/model/cart.model';
import { Product } from 'src/app/products/state/product.model';
import { CartQuery } from './cart.query';
import { CartStore } from './cart.store';

@Injectable({ providedIn: 'root' })

export class CartService {
  
  constructor(private cartStore: CartStore, 
              private cartQuery: CartQuery) {}

  addProductToCart(productId: Product['id']) {
    const findItem = this.cartQuery.getEntity(productId);
    
    if (findItem) {
      return this.cartStore.update(productId as any);
    }

    const item = createCartItem({
      productId
    });

    return this.cartStore.add(item);
  }
  remove(productId: number) {
    
  }

}
