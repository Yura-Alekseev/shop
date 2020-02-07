import {Component, Input, OnInit} from '@angular/core';
import {CartService, ProductItem} from '../../../services/cart.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: ProductItem;
  cartItem: ProductItem;
  constructor(
    private cartService: CartService,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  submit() {
    this.productItem.isAdded = true;
    this.cartItem = {
        id: this.productItem.id,
        img: this.productItem.img,
        name: this.productItem.name,
        cost: this.productItem.cost,
        count: this.productItem.count,
        value: (this.productItem.cost * this.productItem.count),
        isAdded: this.productItem.isAdded
      };
    this.cartService.cartItems.push(this.cartItem);
  }
}
