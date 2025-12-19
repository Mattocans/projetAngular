import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {ApiService} from '../api.service';
import {CurrencyPipe} from '@angular/common';
import {Router} from '@angular/router';

interface Livraison {
  value: string;
}
interface Paiement2 {
  value: string;
}

@Component({
  selector: 'app-paiement',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatRadioModule, CurrencyPipe],
  templateUrl: './paiement.html',
  styleUrl: './paiement.css',
  standalone: true
})
export class Paiement {

  constructor(private router: Router) {
  }

  private apiService = inject(ApiService);

  produits = this.apiService.produitInCart

  modeLivraison: Livraison[] = [
    {value: 'Standard (2 à 5 jours)'},
    {value: 'Express (24–48h)'},
    {value: 'Livraison programmée (date / créneau horaire)'},
  ];

  modePaiement: Paiement2[] = [
    {value: 'Visa'},
    {value: 'MasterCard'},
    {value: 'American Express'},
    {value: 'Apple Pay'},
    {value: 'PayPal'},
  ];

  name: string = '';
  email: string = '';
  adress: string = '';
  city: string = '';
  state: string = '';
  zip: string = '';
  country: string = '';
  reduc: string = '';

  onSubmit() {
    const payload = {
        data: {
          customer: {
            name: this.name,
            email: this.email,
            address: this.adress,
            city: this.city,
            state: this.state,
            zip: this.zip,
            country: this.country
          },

          poke_products: {
            connect: this.getIDProduits()
          },

          productsQuantity: {
            data: this.getQuantity()
          },

          total: this.prixTotal()
        }
    };

    this.apiService.addOrder(payload).subscribe({
      next: (res) => {
        console.log('Commande créée', res);
      },
      error: (err) => {
        console.error('Erreur commande', err);
      }
    });

    this.router.navigate(['/validation']);
  }

  prixTotal(){
    let count:  number = 0;
    for(let t of this.produits()){
      count = count+(t.prix*t.inCart)
    }
    if(this.reduc === "POKEGAI"){
      count = count*0.9;
    }
    return count
  }

  getIDProduits(): string[] {
    return this.produits().map(p => p.documentId);
  }
  getQuantity(): { id: string; quantity: number }[] {
    return this.produits().map(p => ({
      id: p.documentId,
      quantity: p.inCart
    }));
  }
}
