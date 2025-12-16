import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {Product} from './product/product';
import {Footer} from './footer/footer';
import {prod1, prod2, prod3, prod4, prod5} from './data/dataProduit';
import {Card} from './card/card';
import {Produit} from './model/produict.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Product, Footer, Card],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testAngular');

  produits : Produit[] = [prod1,prod2,prod3,prod4,prod5]

  addToCart(product: Produit){
    console.log('Ajout '+product.nom+' au panier')
  }
  buy(product: Produit){
    console.log('Achat '+product.nom)
    product.stock = product.stock-1
  }
}
