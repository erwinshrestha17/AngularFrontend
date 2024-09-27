import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {AdminDashboardComponent} from "./Components/admin-dashboard/admin-dashboard.component";
import {UserManagementComponent} from "./Components/user-management/user-management.component";
import {SettingsComponent} from "./Components/settings/settings.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UserManagementComponent,
    SettingsComponent,
    AdminDashboardComponent
  ],
})
export class AdminModule { }
