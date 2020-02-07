import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface ProductItem {
  id: number;
  img: string;
  name: string;
  cost: number;
  count?: number;
  value?: number;
  isAdded?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: ProductItem[] = [];
  products: ProductItem[] = [
    {id: 1, img: './assets/img/product-item-image.png', name: 'Product name1', cost: 121, count: 1, isAdded: false},
    {id: 2, img: './assets/img/product-item-image.png', name: 'Product name2', cost: 122, count: 1, isAdded: false},
    {id: 3, img: './assets/img/product-item-image.png', name: 'Product name3', cost: 123, count: 1, isAdded: false},
    {id: 4, img: './assets/img/product-item-image.png', name: 'Product name4', cost: 124, count: 1, isAdded: false},
    {id: 5, img: './assets/img/product-item-image.png', name: 'Product name5', cost: 125, count: 1, isAdded: false},
    {id: 6, img: './assets/img/product-item-image.png', name: 'Product name6', cost: 121, count: 1, isAdded: false},
    {id: 7, img: './assets/img/product-item-image.png', name: 'Product name7', cost: 122, count: 1, isAdded: false},
    {id: 8, img: './assets/img/product-item-image.png', name: 'Product name8', cost: 123, count: 1, isAdded: false},
    {id: 9, img: './assets/img/product-item-image.png', name: 'Product name9', cost: 124, count: 1, isAdded: false},
    {id: 10, img: './assets/img/product-item-image.png', name: 'Product name10', cost: 125, count: 1, isAdded: false}
  ];
  constructor(private http: HttpClient) { }

  getProducts() {
  }
}
