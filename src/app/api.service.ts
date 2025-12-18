import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Produit } from './model/produict.interface'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpClient = inject(HttpClient)
  readonly url = 'https://strapi-production-2ff5.up.railway.app/api/poke-products?populate=*';

  fetchproducts(): Observable<any> {
    return this.httpClient.get<Produit[]>(this.url)
  }
}
