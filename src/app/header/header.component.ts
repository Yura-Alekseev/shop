import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';
import {AuthService} from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  totalValue: 0;
  totalCount: 0;
  userName: string;
  constructor(
    private cartService: CartService,
    public auth: AuthService
  ) { }
  ngOnInit() {
    this.getUserName();
  }

  getUserName() {
    return this.userName = localStorage.getItem('userName');
  }

  getTotal() {
    this.totalValue = 0;
    for (const item of this.cartService.cartItems) {
      this.totalValue += item.value;
    }
    return this.totalValue;
  }

  getCount() {
    this.totalCount = 0;
    for (const item of this.cartService.cartItems) {
      this.totalCount += item.count;
    }
    return this.totalCount;
  }

  logout() {
    this.cartService.cartItems = [];
    this.cartService.products.map(
      product => {
        product.isAdded = false;
      }
    );
    this.auth.user = {
      email: '',
      password: ''
    };
    this.auth.logout();
  }
}
