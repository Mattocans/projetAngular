import { Component, signal } from '@angular/core';
import {Header} from './header/header';
import {Footer} from './footer/footer';
import {Card} from './card/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {ApiService} from './api.service';
import {RouterOutlet} from '@angular/router'


@Component({
  selector: 'app-root',
  imports: [Header, Footer, Card, MatGridListModule, RouterOutlet],
  providers: [ApiService],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {

}
