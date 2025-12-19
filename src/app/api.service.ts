import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';
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
  readonly url = "http://localhost:3000/";
  private _produits = signal<Pokemon[]>([]);
  produits = this._produits.asReadonly()

  private _pokemon = signal<Pokemon>({}as Pokemon);
  pokemon  = this._pokemon.asReadonly()

  private _produitsInCart = signal<Pokemon[]>([])
  produitInCart = this._produitsInCart.asReadonly();
  addToCart(product: Pokemon) {
    this._produitsInCart.update(cart => [...cart, product]);
  }
  removeFromCart(productId: string) {
    this._produitsInCart.update(cart =>
      cart.filter(p => p.documentId !== productId)
    );
  }
  clearCart() {
    this._produitsInCart.set([]);
  }

  fetchproducts() {
    return this.httpClient
      .get<ProductResponse>(this.url + "products/")
      .pipe(tap((products) => this._produits.set(
        products.data.map((products) => ({
          ...products,
          inCart: 0
        }))
      )))
  }

  getProductById(id: string) {
    return this.httpClient
      .get<OneProductResponse>(this.url + "products/" + id)
      .pipe(
        tap((response) =>
          this._pokemon.set({
            ...response.data,
            inCart: 0
          })
        )
      );
  }

  addOrder(poke: {}) {
    return this.httpClient.post(this.url + "order", poke)
  }
}
