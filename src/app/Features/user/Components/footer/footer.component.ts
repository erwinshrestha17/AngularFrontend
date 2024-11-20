import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [
        RouterLink,
        RouterOutlet,
    ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear()
  }
}
