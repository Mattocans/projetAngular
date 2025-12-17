import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-footer',
  imports: [MatGridListModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  standalone: true
})

export class Footer {
  content: string = "Footer de fou"
}
