import {Component, EventEmitter, Output} from '@angular/core';
import {CurrencyPipe, NgClass, NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";



@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
    RouterOutlet
  ],
  standalone: true
})
export class CartComponent {

  @Output() closeCart = new EventEmitter<void>();

  onBackdropClick() {
    this.closeCart.emit();
  }

}
