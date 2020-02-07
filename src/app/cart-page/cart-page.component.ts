import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.less']
})
export class CartPageComponent implements OnInit {
  totalValue = 0;
  constructor(public cartService: CartService) { }

  ngOnInit() {}

  getTotal() {
    this.totalValue = 0;
    for (const item of this.cartService.cartItems) {
      this.totalValue += item.value;
    }
    return this.totalValue;
  }

  clearCart() {
    this.cartService.cartItems = [];
    this.cartService.products.map(
      product => {
        product.isAdded = false;
      }
    );
  }
}
