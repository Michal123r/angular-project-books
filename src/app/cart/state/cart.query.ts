import { Injectable } from '@angular/core';
import {  QueryEntity } from '@datorama/akita';
import { combineLatest,  map,  publishReplay, refCount } from 'rxjs';
import { CartItem } from 'src/app/model/cart.model';
import { ProductsQuery } from 'src/app/products/state/products.query';
import { CartStore, CartState } from './cart.store';

@Injectable({
  providedIn: 'root'
})
export class CartQuery extends QueryEntity<CartState, CartItem> {
  constructor(protected override store: CartStore, private productsQuery: ProductsQuery) {
    super(store);
  }
  // We’re using the combineLatest() observable to get both the list of cart items 
  // and the products.
  //  Then we are mapping over them,
  //   merging a cart item with the corresponding product based on the productId.

//We also want to calculate the cart total without executing the mapping function again,
 // so we’re leveraging one of the share() operators from Rx
 
  selectItems$ = combineLatest(
    this.selectAll(), 
    this.productsQuery.selectAll({ asObject: true })
 ).pipe(
    map(joinItems),
    publishReplay(),
    refCount()
 );

 selectTotal$ = this.selectItems$.pipe(
     map(items => items.reduce(([acc, item]: any) => acc + item.total, 0)
 ));
}

// We need to show the list of cart items and the total amount,
//  but we also need some information from the product,
//   like the title and the price. 
//   Therefore we need to join the cartStore with the productsStore

function joinItems([cartItems, products]: any){
 return cartItems.map((cartItem:any )=> {
   const product = products[cartItem.productId];
   return {
     ...cartItem,
     ...product,
     total: cartItem.quantity * product.price
   };
 });
}