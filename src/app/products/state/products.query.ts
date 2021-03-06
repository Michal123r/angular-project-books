import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProductsStore, ProductsState } from './products.store';

@Injectable({ providedIn: 'root' })
export class ProductsQuery extends QueryEntity<ProductsState> {

  constructor(protected override store: ProductsStore) {
    super(store);
  }

  getProducts(value: string) {
    return this.selectAll({
      filterBy: entity => entity.title.toLowerCase().includes(value)
    });
  }

}
