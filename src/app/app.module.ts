import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component'; // 導入ProductsComponent

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ProductsComponent],//加入productscomponent
  bootstrap: [AppComponent],
})
export class AppModule {}




