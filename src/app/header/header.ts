import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Router} from '@angular/router';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  standalone: true
})
export class Header {

  headerTitle: string = "Chill.exe"

  constructor(private router: Router) {}

  goPanier() {
    this.router.navigate(['/panier']);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
