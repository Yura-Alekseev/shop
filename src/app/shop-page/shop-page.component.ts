import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.less']
})
export class ShopPageComponent implements OnInit {

  constructor(
    public cartService: CartService,
  ) { }

  ngOnInit() {
    this.cartService.getProducts();
  }

}
