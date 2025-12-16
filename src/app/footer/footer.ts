import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {Header} from '../header/header';


@Component({
  selector: 'app-footer',
  imports: [MatGridListModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  standalone: true
})

export class Footer {
}
