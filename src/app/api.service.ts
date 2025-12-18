import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {Pokemon} from './model/product.interface';

type ProductResponse = {
  data: Pokemon[];
};

type OneProductResponse = {
  data: Pokemon;
};


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpClient = inject(HttpClient)
  readonly url2 = 'https://strapi-production-2ff5.up.railway.app/api/poke-products?populate=*';
  readonly url = "http://localhost:3000/products/";
  private _produits = signal<Pokemon[]>([]);
  produits = this._produits.asReadonly()

  private _pokemon = signal<Pokemon>({}as Pokemon);
  pokemon  = this._pokemon.asReadonly()


  fetchproducts() {
    return this.httpClient
      .get<ProductResponse>(this.url)
      .pipe(tap((products) => this._produits.set(products.data)));
  }

  getProductById(id: string) {
    return this.httpClient
      .get<OneProductResponse>(this.url+id)
      .pipe(tap((pokemon) => this._pokemon.set(pokemon.data)));

  }
}
