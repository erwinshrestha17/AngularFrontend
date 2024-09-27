import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {CartComponent} from "./Shared/Components/cart/cart.component";
import {HomeComponent} from "./Shared/Components/home/home.component";
import {ContactComponent} from "./Shared/Components/contact/contact.component";
import {ShopComponent} from "./Shared/Components/shop/shop.component";
import {CategoriesComponent} from "./Shared/Components/categories/categories.component";
import {AboutusComponent} from "./Shared/Components/aboutus/aboutus.component";
import {DescriptionComponent} from "./Shared/Components/shop/description/description.component";
import {DetailsComponent} from "./Shared/Components/shop/details/details.component";
import {ReviewsComponent} from "./Shared/Components/shop/reviews/reviews.component";
import {LoginComponent} from "./Shared/Components/login/login.component";
import {SignupComponent} from "./Shared/Components/signup/signup.component";
import {PageNotFoundComponent} from "./Shared/Components/page-not-found/page-not-found.component";

export const routes: Routes = [
  {path:'login',component:LoginComponent,title:"ShopEase| Log In"},
  {path:'signup',component:SignupComponent,title:"ShopEase| Sign Up"},
  {path:'home',component:HomeComponent,title:"ShopEase| Home"},
  {path: 'shop', component: ShopComponent, title: "ShopEase | Shop",
    children: [
      {
        path: 'description',
        component: DescriptionComponent,
        title: "ShopEase | Shop | Description"
      },
      {
        path:'details',
        component:DetailsComponent
      },
      {
        path:'reviews',
        component:ReviewsComponent
      }
    ]
  },
  {path:'categories',component:CategoriesComponent,title:"ShopEase| Categories"},
  {path:'aboutus',component:AboutusComponent,title:"ShopEase| About Us"},
  {path:'contact',component:ContactComponent,title:"ShopEase| Contact"},
  {path:'',redirectTo:'/home',pathMatch:'full',},
  {path:'cart',component:CartComponent},
  {path:"**",component:PageNotFoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
