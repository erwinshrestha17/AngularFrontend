import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginComponent} from "../login/login.component";
import {SignupComponent} from "./signup.component";
import {PageNotFoundComponent} from "../../../../Shared/Components/page-not-found/page-not-found.component";

export const SignUpRoutes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full',},
  {path:'login',component:LoginComponent,title:"ShopEase| Log In"},
  {path:'signup',component:SignupComponent,title:"ShopEase| Sign Up",
    children: [
      {path:'',redirectTo:'/home',pathMatch:'full'},
      {path:'login',component:LoginComponent,title:"ShopEase| Log In"},
    ]

  },
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(SignUpRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
