import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, switchMap } from 'rxjs';
import { Product } from '../state/product.model';
import { ProductsQuery } from '../state/products.query';
import { ProductsService } from '../state/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> | undefined;
  loading$: Observable<boolean> | undefined;
  search = new FormControl();
  
  constructor(private productsService: ProductsService, 
    private productsQuery: ProductsQuery) {}

  ngOnInit(): void {
    this.productsService.get().subscribe();
    this.loading$ = this.productsQuery.selectLoading();
    
    this.products$ = this.search.valueChanges.pipe(
      startWith(''),
      switchMap(value => this.productsQuery.selectAll({
         filterBy: entity => entity.title.toLowerCase().includes(value)
      }))
    );
  }

}
