import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../../product.model';

import { assetUrl } from '../../../single-spa/asset-url';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  @HostBinding('class.product-list') true;
  currentProduct: Product = null;

  constructor() {
    const hat = assetUrl('images/hat.jpg');
    const shoes = assetUrl('images/shoes-blue.jpg');
    const shirt = assetUrl('images/shirt.jpg');

    this.productList = [
      new Product(
        'sku # NICEHAT',
        'A Nice Black Hat',
        `${hat}`,
        ['Mens', 'Accessories', 'Hats'],
        10.5
      ),
      new Product(
        'sku # BRUNSHOES',
        'Black Running Shoes',
        `${shoes}`,
        ['Mens', 'shoes', 'Runnning Shoes'],
        24.1
      ),

      new Product(
        'sku # TSHIRT',
        'Casual T Shirt',
        `${shirt}`,
        ['Mens', 'apparal', 'Casual Shirts'],
        20.2
      ),
    ];
  }
  productClicked(selectedP) {
    this.currentProduct = selectedP;
  }

  isSelected(product: Product): Boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
  ngOnInit(): void {}
}
