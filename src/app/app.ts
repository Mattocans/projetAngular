import { Component, signal } from '@angular/core';
import {Header} from './header/header';
import {Product} from './product/product';
import {Footer} from './footer/footer';
import {Card} from './card/card';
import {Pokemon} from './model/product.interface';
import {MatGridListModule} from '@angular/material/grid-list';
import {CurrencyPipe, UpperCasePipe} from '@angular/common'
import {ApiService} from './api.service';
import {inject} from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [Header, Product, Footer, Card, MatGridListModule],
  providers: [ApiService],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testAngular');
  private apiService = inject(ApiService);

  produits = signal<Pokemon[]>([]);

  constructor() {
    this.fetch();
  }


  addToCart(product: Pokemon){
    console.log('Ajout '+product.nom+' au panier')
    console.log(new UpperCasePipe().transform(product.nom));
  }
  buy(product: Pokemon){
    console.log('Achat '+product.nom)
    product.stock = product.stock-1
  }

   fetch() {
   return this.apiService.fetchproducts().subscribe(response => {
      this.produits.set(response.data);
    });
  }
  count: number = 0
}
