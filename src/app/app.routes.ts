import { Routes } from '@angular/router';
import { Home } from './home/home'
import {Panier} from './panier/panier';
import { PokemonView} from './pokemon-view/pokemon-view'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Home
  },
  {
    path: 'products/:id',
    component: PokemonView
  },
  {path: 'panier', component: Panier},

];
