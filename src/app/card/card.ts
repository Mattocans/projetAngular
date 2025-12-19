import {Component, inject, input, output} from '@angular/core';
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
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-card',
  imports: [
    MatButton,
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
    CurrencyPipe
  ],
  providers: [ApiService],
  templateUrl: './card.html',
  styleUrl: './card.css',
  standalone: true
})


export class Card {
  product = input.required<Pokemon>();
  private apiService = inject(ApiService);
  private activatedRoute = inject(ActivatedRoute)

  pokemon = this.apiService.pokemon

  constructor() {
    this.apiService.getProductById(this.activatedRoute.snapshot.params['id'])
  }

  stock() {
    if(this.product().inCart < this.product().stock){
      return true
    }
    return false
  }

  addToCard = output<Pokemon>();
  buy = output<Pokemon>();
}
