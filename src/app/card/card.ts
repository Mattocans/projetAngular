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
import {Produit} from '../model/produict.interface';
import {App} from '../app';
import {CurrencyPipe} from '@angular/common';
import {ApiService} from '../api.service';
import {Pokemon} from '../model/product.interface';


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
  constructor() {
    this.apiService.getProductById("")
  }

  addToCard = output<Pokemon>();
  buy = output<Pokemon>();
}
