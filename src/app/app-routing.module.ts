import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SignuppageComponent } from './components/signuppage/signuppage.component';
import { AuthGaurd } from './services/AuthGaurd.service';

const routes: Routes = [
  {path:'',component:MainpageComponent},
  {path:'signup',component:SignuppageComponent},
  {path:'login',component:LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
