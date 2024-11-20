import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'about',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './about.component.html',
})
export class AboutComponent {

}
