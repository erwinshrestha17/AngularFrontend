import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./Components/header/header.component";
import {FooterComponent} from "./Components/footer/footer.component";

@Component({
  selector: 'user',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
