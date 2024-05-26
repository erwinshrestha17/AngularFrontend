import { Component } from '@angular/core';
import {EmployeeService} from "../Backend/Employees/employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Employee} from "../Backend/Employees/employee";
import {NgForOf} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {CustomerService} from "../Backend/Customers/customer.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgForOf,
    RouterOutlet,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = 'Dashboard';
  public employees: Employee[] | undefined;



  constructor(private employeeService : EmployeeService) {}
  ngOnInit() {
    this.getEmployees()
  }
  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
      (employees) => {
        this.employees = employees;
      },(error:HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

}
