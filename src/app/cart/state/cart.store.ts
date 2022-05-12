import { Injectable } from '@angular/core';
import { EntityState, EntityStore, Store, StoreConfig } from '@datorama/akita';
import { CartItem } from 'src/app/model/cart.model';
import { Product } from 'src/app/products/state/product.model';
export interface CartState extends EntityState<CartItem> {}


export interface CartState {
   key: string;
}

export function createInitialState(): CartState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'cart',
  idKey: 'productId'
})

export class CartStore extends EntityStore<CartState, CartItem> {
  constructor() {
    super({}, { idKey: 'productId' });
  }

  // Using the product id, we check that the product doesn’t exist,
  // and add it; Otherwise, we update the quantity.
  
  updateQuantity(productId: Product['id'], operand = 1) {
    this.update(productId, entity => {
      const newQuantity = entity.quantity + operand;
      return {
        ...entity,
        quantity: newQuantity
      };
    });
  }
}
