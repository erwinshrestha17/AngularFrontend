import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {CartComponent} from "../cart/cart.component";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CartComponent,
    RouterOutlet,
    NgIf,
    FormsModule,
    NgOptimizedImage,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  cartVisible: boolean = false;
  // Toggle the cart visibility
  cartClicked(): void {
    this.cartVisible = !this.cartVisible;
  }
  imageUrl= 'src/assets/logo/logo.png'
}
