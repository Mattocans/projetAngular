import {Component, input, output} from '@angular/core';
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
    MatCardImage
  ],
  templateUrl: './card.html',
  styleUrl: './card.css',
  standalone: true
})
export class Card {
  product = input.required<Produit>();

  addToCard = output<Produit>();
  buy = output<Produit>();
}
