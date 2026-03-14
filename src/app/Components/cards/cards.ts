import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  products = [
    { name: 'smart watch', price: 120, image: '/assets/images/smartwatch.jpg' ,pieces:10,instock:true},
    { name: 'classic watch', price: 90, image: '/assets/images/classicwatch.jpg',pieces:5 ,instock:false},
    { name: 'sport watch', price: 150, image: '/assets/images/sport.jpg',pieces:4 ,instock:true},
    { name: 'smart phone', price: 1000, image: '/assets/images/sport1.jpg',pieces:3,instock:true}
  ]

  addToCart(product: any) {
    if (product.pieces > 0) {
      product.pieces--;
      console.log(`${product.name} added to cart! Remaining: ${product.pieces}`);
    }
  }
  
}
