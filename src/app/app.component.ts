import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Employee} from "./Backend/Employees/employee";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {AdminDashboardComponent} from "./Features/admin/Components/admin-dashboard/admin-dashboard.component";
import {UserManagementComponent} from "./Features/admin/Components/user-management/user-management.component";
import {FooterComponent} from "./Shared/Components/footer/footer.component";
import {HeaderComponent} from "./Shared/Components/header/header.component";
import {CartComponent} from "./Shared/Components/cart/cart.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, RouterLink, RouterLinkActive, AdminDashboardComponent, UserManagementComponent, FooterComponent, HeaderComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AngularFrontend';
  public employees: Employee[] | undefined;


  constructor() {
  }

  ngOnInit(): void {
  }




}
