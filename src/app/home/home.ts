import { Component, signal } from '@angular/core';
import {ApiService} from '../api.service';
import {inject} from '@angular/core';
import {RouterOutlet} from '@angular/router'
import {Pokemon} from '../model/product.interface'
import {UpperCasePipe} from '@angular/common'
import {MatGridListModule} from '@angular/material/grid-list';
import { Product} from '../product/product'
import {Card} from '../card/card';
import { RouterModule  } from '@angular/router';



@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterOutlet, MatGridListModule,Product, Card, RouterModule ],
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
  }
  buy(product: Pokemon){
    console.log('Achat '+product.nom)
    product.stock = product.stock-1
  }
  count: number = 0
}
