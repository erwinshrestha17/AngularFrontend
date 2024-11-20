import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'contact',
  standalone: true,
    imports: [
        RouterLink,
        RouterOutlet
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  protected readonly RouterOutlet = RouterOutlet;
}
