import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-footer',
  imports: [MatGridListModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  standalone: true
})

export class Footer {
  nom: string = '';
  email: string = '';
  submitted = false;

  onSubmit() {
    this.submitted = true
  }
}
