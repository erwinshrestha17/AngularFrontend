import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../../../../Shared/Components/header/header.component";

@Component({
  selector: 'adminDashboard',
  standalone: true,
  imports: [NgForOf, RouterOutlet, HeaderComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
