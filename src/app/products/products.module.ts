import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }