import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {Produit} from '../model/produict.interface';
import {prod1} from '../data/dataProduit';
import {prod2} from '../data/dataProduit';
import {prod3} from '../data/dataProduit';
import {prod4} from '../data/dataProduit';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'app-product',
  styleUrl: './product.css',
  templateUrl: './product.html',
  providers: [provideNativeDateAdapter()],
  imports:
    [MatGridListModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatTimepickerModule,
      MatRadioModule,
      MatSlideToggleModule,
      MatCardModule,
      MatButtonModule
    ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class Product {
  language: 'fr' | 'en' = 'fr';
  texts = {
    fr: "Texte en français, mdr je ne sais pas quoi écrire !",
    en: "Text in english, lol I don't know what to write !"
  };
  titleDate = {
    fr: "Choisir une heure",
    en: "Pick a time"
  }
  formTitle1 = {
    en: "Favorite sweater",
    fr: "Pull favori"
  }
  formHolder1 = {
    en: "Choose a sweater",
    fr: "Choisir un pull"
  }
  formTitle2 = {
    en: "Leave a comment",
    fr: "Laisser un commentaire"
  }
  formHolder2 = {
    en: "Ex. It makes me feel...",
    fr: "Ex: Il ma fait me sentir..."
  }
  slide = {
    fr: "English",
    en: "Français"
  }

  produit1: Produit = prod1
  produit2: Produit = prod2
  produit3: Produit = prod3
  produit4: Produit = prod4

}
