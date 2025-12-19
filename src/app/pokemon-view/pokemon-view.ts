import {Component, inject, input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {CurrencyPipe} from '@angular/common';
import {ApiService} from '../api.service';
import {Pokemon} from '../model/product.interface';
import {ActivatedRoute} from '@angular/router';
import {UpperCasePipe} from '@angular/common'
import {Card} from '../card/card'
import {Product} from '../product/product'
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-pokemon',
  imports: [MatButton,
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    MatCardActions,
    MatCardImage,
    MatCardImage,
    MatCardTitle,
    CurrencyPipe,MatGridListModule, Product, Card  ],
  templateUrl: './pokemon-view.html',
  styleUrl: './pokemon-view.css',
  standalone: true
})

export class PokemonView {
  product = input.required<Pokemon>();
  private apiService = inject(ApiService);
  private activatedRoute = inject(ActivatedRoute)

  pokemon = this.apiService.pokemon

  constructor() {
    this.apiService.getProductById(this.activatedRoute.snapshot.params['id']).subscribe()
  }

  addToCart(product: Pokemon){
    console.log('Ajout '+product.nom+' au panier')
    console.log(new UpperCasePipe().transform(product.nom));
    if(product.inCart == 0){
      this.apiService.addToCart(product);
      console.log(this.apiService.produitInCart.length)
    }
    product.inCart = product.inCart + 1;
  }

  buy(product: Pokemon){
    console.log('Achat '+product.nom)
    product.stock = product.stock-1
  }
}
