import {Component, Input, OnInit} from '@angular/core';
import {CartService, ProductItem} from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less']
})
export class CartItemComponent implements OnInit {
  cartItems: ProductItem[] = [];
  @Input() cartItem: ProductItem;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItem.value = this.cartItem.cost * this.cartItem.count;
    this.cartItems = this.cartService.cartItems;
  }

  decCount() {
    this.cartItem.count--;
    if (this.cartItem.count === 0 && this.cartItem.count < 1) {
      this.cartItem.count = 1;
    }
    this.cartItem.value = this.cartItem.cost * this.cartItem.count;
  }

  incCount() {
    this.cartItem.count++;
    this.cartItem.value = this.cartItem.cost * this.cartItem.count;
  }

  removeItem(id: number) {
    this.cartService.cartItems = this.cartService.cartItems.filter(item => item.id !== id);
    this.cartService.products.map(item => {
      if (item.id === id) {
        item.isAdded = false;
      }
    });
    console.log(this.cartService.cartItems);
  }
}
