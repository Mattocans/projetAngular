import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {Product} from './product/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Product],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testAngular');
}
