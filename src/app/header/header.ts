import {Component, computed, inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import { MatBadgeModule } from '@angular/material/badge';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule],
  standalone: true
})
export class Header {
  private apiService = inject(ApiService);

  headerTitle: string = "POKEMANIA"

  constructor(private router: Router) {}

  goPanier() {
    this.router.navigate(['/panier']);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  cartCount() {
    return this.apiService.produitInCart().length
  }


}
