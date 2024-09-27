import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SettingsComponent} from "./Components/settings/settings.component";
import {UserManagementComponent} from "./Components/user-management/user-management.component";

const routes: Routes = [
  {
    children:[
      { path: 'app-user-management', component: UserManagementComponent },
      { path: 'app-settings', component: SettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
