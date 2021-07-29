import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    ProductListComponent,
    ProductComponent,
    AddProductComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/angular' }],
  bootstrap: [AppComponent]
})

export class AppModule { }
