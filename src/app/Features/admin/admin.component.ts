import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'admin',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  constructor(private router: Router) {}


  onsubmit(loginForm:NgForm) {
    console.log(loginForm.value);
    this.router.navigate(['/dashboard']);
  }



}
