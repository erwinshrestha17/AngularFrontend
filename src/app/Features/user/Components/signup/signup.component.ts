import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from "@angular/forms";
import {Users} from "../../../../Core/Services/users/users";
import {UsersService} from "../../../../Core/Services/users/users.service";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']  // Fixed typo from 'styleUrl' to 'styleUrls'
})
export class SignupComponent implements OnInit {
  protected users: Users[] | any;

  constructor(private userService: UsersService, private router: Router) {}  // Inject Router

  ngOnInit(): void {}

  onsubmit(signupForm: NgForm): void {
    if (signupForm.valid) {
      this.userService.save(signupForm.value).subscribe(
        response => {
          this.users = response;
          console.log(response);

          // After successful signup, redirect to home page
          this.router.navigate(['/']).then(r => {
            console.log('Navigation is successful!');
          });
        },
        error => {
          console.error('Signup failed:', error);  // Handle error (optional)
        }
      );
    } else {
      console.log("Form is not valid");
    }
  }
}
