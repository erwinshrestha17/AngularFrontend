import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Employee} from "../../../../Backend/Employees/employee";
import {EmployeeService} from "../../../../Backend/Employees/employee.service";
import {Router, RouterOutlet} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-attendances',
  standalone: true,
  imports: [
    NgForOf,
    RouterOutlet
  ],
  templateUrl: './attendence.component.html',
  styleUrl: './attendence.component.css'
})
export class AttendenceComponent {
  public employees: Employee[] | undefined;


  constructor(private employeeService : EmployeeService,private router : Router) {}

  goToUserManagement() {
    // Navigate to the User Management page
    this.router.navigate(['/admin/user-management']);
  }

  goToSettings() {
    // Navigate to the Settings page
    this.router.navigate(['/admin/settings']);
  }

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
