import {Component, NgModule, OnInit} from '@angular/core';
import {UserComponent} from "./Features/user/user.component";
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModel} from "@angular/forms";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,RouterModule,CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AngularFrontend';

  constructor() {
  }

  ngOnInit(): void {
  }




}
