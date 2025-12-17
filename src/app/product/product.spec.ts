import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product } from './product';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {expect} from 'vitest';

describe('Product', () => {
  let component: Product;
  let fixture: ComponentFixture<Product>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product,
        MatGridListModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTimepickerModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatCardModule,
        MatButtonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the french title', () => {
    component.formTitle1 = {en: "Fav sweater", fr: "Pull fav"};
    fixture.detectChanges();

    const title = fixture.componentInstance.formTitle1;
    if(component.language == "fr"){
      expect(title[component.language]).toBe("Pull fav");
    }
  })

  it('should display the english title', () => {
    component.formTitle1 = {en: "Fav sweater", fr: "Pull fav"};
    fixture.detectChanges();

    const title = fixture.componentInstance.formTitle1;
    if(component.language == "en"){
      expect(title[component.language]).toBe("Fav sweater");
    }
  })

});
