import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {ShopPageComponent} from './shop-page/shop-page.component';
import {CartPageComponent} from './cart-page/cart-page.component';
import {AuthGuard} from './services/auth.guard';
import {AuthService} from './services/auth.service';
import {RegistrationComponent} from './registration/registration.component';
import {UserPageComponent} from './user-page/user-page.component';

const routes: Routes = [
  { path: '', component: ShopPageComponent, pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'cart', component: CartPageComponent, canActivate: [AuthGuard]},
  { path: 'user', component: UserPageComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard],
})
export class AppRoutingModule { }
