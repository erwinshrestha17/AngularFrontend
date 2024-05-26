import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Employee} from "./Backend/Employees/employee";
import {EmployeeService} from "./Backend/Employees/employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {DashboardComponent} from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, RouterLink, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'AngularFrontend';
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

  // public deleteEmployee(){
  //   this.employeeService.deleteEmployee().subscribe(
  //     (employees)=>{
  //       this.employees=employees;
  //     },(error:HttpErrorResponse)=>{
  //       console.log(error.message)
  //     }
  //   )
  // }



}
