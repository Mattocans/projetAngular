import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';
import {MatGridListModule} from '@angular/material/grid-list';
import {expect} from 'vitest';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer,MatGridListModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return Footer de fou' ,() => {
    component.content = "Footer de fou"
    fixture.detectChanges()
    expect(component.content).toBe("Footer de fou")
  });

});
