import { Component, signal, inject } from '@angular/core';
import {Header} from './header/header';
import {Product} from './product/product';
import {Footer} from './footer/footer';
import {prod1, prod2, prod3, prod4, prod5} from './data/dataProduit';
import {Card} from './card/card';
import {Produit} from './model/produict.interface';
import {MatGridListModule} from '@angular/material/grid-list';
import {CurrencyPipe, UpperCasePipe} from '@angular/common'

@Component({
  selector: 'app-root',
  imports: [Header, Product, Footer, Card, MatGridListModule],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testAngular');

  produits : Produit[] = [prod1,prod2,prod3,prod4,prod5]

  addToCart(product: Produit){
    console.log(new UpperCasePipe().transform(product.nom));
  }
  buy(product: Produit){
    console.log('Achat '+product.nom)
    product.stock = product.stock-1
  }

  count: number = 0
}
