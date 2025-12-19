import { Component, signal } from '@angular/core';
import {ApiService} from '../api.service';
import {inject} from '@angular/core';
import {RouterOutlet} from '@angular/router'
import {Pokemon} from '../model/product.interface'
import {CurrencyPipe, UpperCasePipe} from '@angular/common'
import {MatGridListModule} from '@angular/material/grid-list';
import { Product} from '../product/product'
import {Card} from '../card/card';
import { RouterModule  } from '@angular/router';
import {MatButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle, MatCardTitle
} from '@angular/material/card';



@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterOutlet, MatGridListModule, Product, Card, RouterModule, CurrencyPipe, MatButton, MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle, MatCardTitle],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {
  protected readonly title = signal('testAngular');
  private apiService = inject(ApiService);

  produits = this.apiService.produits

  constructor() {
    this.apiService.fetchproducts().subscribe()
  }


  addToCart(product: Pokemon){
    console.log('Ajout '+product.nom+' au panier')
    console.log(new UpperCasePipe().transform(product.nom));
    if(product.inCart === 0){
      this.apiService.addToCart(product);
    }
    product.inCart = product.inCart + 1;
  }

  buy(product: Pokemon){
    console.log('Achat '+product.nom)
    product.stock = product.stock-1
  }
}
