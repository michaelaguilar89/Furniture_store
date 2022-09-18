import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';

//angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 
import {MatCardModule} from '@angular/material/card';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    ProductDetailComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,
    MatButtonModule,MatIconModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
