import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet} from "@angular/router";
import { NgOptimizedImage } from '@angular/common'
import {HeaderComponent} from "./Components/header/header.component";
import {UserComponent} from "./user.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule, RouterOutlet, UserComponent
  ]
})
export class UserModule { }
