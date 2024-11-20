import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {UserComponent} from "./Features/user/user.component";
import {PageNotFoundComponent} from "./Shared/Components/page-not-found/page-not-found.component";
import {ShopComponent} from "./Features/user/Components/shop/shop.component";

export const routes: Routes = [
  {path: 'admin', loadComponent: () => import('./Features/admin/admin.component').then(m => m.AdminComponent)},
  {path: 'dashboard', loadComponent: () => import('./Features/admin/Components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  {path: 'user', component: UserComponent, title: "ShopEase | User",
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./Features/user/Components/home/home.component').then(m => m.HomeComponent) },
      {
        path: 'shop',
        component: ShopComponent,
        title: "ShopEase | Shop",
        children: [
          { path: '', redirectTo: 'description', pathMatch: 'full' },
          { path: 'description', loadComponent: () => import('./Features/user/Components/shop/description/description.component').then(m => m.DescriptionComponent) },
          { path: 'details', loadComponent: () => import('./Features/user/Components/shop/details/details.component').then(m => m.DetailsComponent) },
          { path: 'reviews', loadComponent: () => import('./Features/user/Components/shop/reviews/reviews.component').then(m => m.ReviewsComponent) },
        ]
      },
      { path: 'categories', loadComponent: () => import('./Features/user/Components/categories/categories.component').then(m => m.CategoriesComponent) },
      { path: 'about', loadComponent: () => import('./Features/user/Components/aboutus/about.component').then(m => m.AboutComponent) },
      { path: 'contact', loadComponent: () => import('./Features/user/Components/contact/contact.component').then(m => m.ContactComponent) },
      { path: 'cart', loadComponent: () => import('./Features/user/Components/cart/cart.component').then(m => m.CartComponent) },
      { path: 'login', loadComponent: () => import('./Features/user/Components/login/login.component').then(m => m.LoginComponent) },
      { path: 'signup', loadComponent: () => import('./Features/user/Components/signup/signup.component').then(m => m.SignupComponent) },
      { path: '**', component: PageNotFoundComponent },  // Catch-all 404 route inside the 'user' scope
    ]
  },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent } // Global 404 for unmatched routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
