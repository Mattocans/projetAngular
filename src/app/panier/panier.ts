import {Component, inject} from '@angular/core';
import {Card} from '../card/card';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {CurrencyPipe} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-panier',
  imports: [
    Card,
    MatGridList,
    MatGridTile,
    CurrencyPipe,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    MatIconButton,
    MatIconModule
  ],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
  standalone: true
})
export class Panier {
  private apiService = inject(ApiService);

  produits = this.apiService.produitInCart
  constructor(private router: Router) {
  }

  prixTotal(){
    let count:  number = 0;
    for(let t of this.produits()){
      count = count+(t.prix*t.inCart)
    }
    return count
  }

  plusStock(id: string){
    for(let t of this.produits()){
      if(t.documentId === id && t.inCart < t.stock){
        t.inCart = t.inCart+1
      }
    }
  }

  moinsStock(id: string){
    for(let t of this.produits()){
      if(t.documentId === id && t.inCart > 0){
        t.inCart = t.inCart-1
      }
      if(t.documentId === id && t.inCart === 0){
        this.apiService.removeFromCart(id)
      }
    }
  }

  supp(id: string){
    for(let t of this.produits()) {
      if (t.documentId === id) {
        t.inCart = 0;
        this.apiService.removeFromCart(id)
      }
    }
  }

  buy(){
    /*for(let t of this.produits()){
      t.stock = t.stock-t.inCart;
      t.inCart = 0;
    }
    this.apiService.clearCart()
     */
    this.router.navigate(['/paiement']);
  }

  cartCount() {
    return this.apiService.produitInCart().length
  }

}
