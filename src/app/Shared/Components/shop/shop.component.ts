import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {DescriptionComponent} from "./description/description.component";
import {Action} from "rxjs/internal/scheduler/Action";

@Component({
  selector: 'shop',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    DescriptionComponent,
    RouterLinkActive
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  protected readonly Action = Action;
}
