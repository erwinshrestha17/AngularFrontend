import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {DashboardComponent} from "./Components/dashboard/dashboard.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterLink,
    DashboardComponent,

  ],
  exports: []
})
export class AdminModule { }
