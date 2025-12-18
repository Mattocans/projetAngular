import { Component, signal } from '@angular/core';
import {Header} from './header/header';
import {Product} from './product/product';
import {Footer} from './footer/footer';
import {Card} from './card/card';
import {Pokemon} from './model/product.interface';
import {MatGridListModule} from '@angular/material/grid-list';
import {CurrencyPipe, UpperCasePipe} from '@angular/common'
import {ApiService} from './api.service';
import {inject} from '@angular/core';
import {RouterOutlet} from '@angular/router'


@Component({
  selector: 'app-root',
  imports: [Header, Product, Footer, Card, MatGridListModule, RouterOutlet],
  providers: [ApiService],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {

}
