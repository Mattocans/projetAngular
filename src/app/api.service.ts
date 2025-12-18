import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Produit } from './model/produict.interface'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpClient = inject(HttpClient)
  readonly url2 = 'https://strapi-production-2ff5.up.railway.app/api/poke-products?populate=*';
  readonly url = "http://localhost:3000/products/";

  fetchproducts(): Observable<any> {
    return this.httpClient.get<Produit[]>(this.url)
  }
  getProductById(id: string) {
    return this.httpClient.get<Produit>(this.url+id);
  }
}
