import {Component, EventEmitter, Output} from '@angular/core';
import {CurrencyPipe, NgClass} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";



@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [
    NgClass,
    CurrencyPipe,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class CartComponent {


  @Output() closeCart = new EventEmitter<void>();

  onBackdropClick() {
    this.closeCart.emit();
  }

}
