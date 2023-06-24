import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyHomeComponent } from './share/home/components/property-home/property-home.component';
import { AboutMainComponent } from './about-page/components/about-main/about-main.component';
import { LoginComponent } from './login/Components/login/login.component';
import { RegisterComponent } from './register/components/register/register.component';
import { PropertyComponent } from './property/components/property/property.component';
import { ContentComponent } from './package/components/content/content.component';

const routes: Routes = [
  { path: '', component: PropertyHomeComponent, pathMatch: 'full' },
  { path: 'home', component: PropertyHomeComponent },
  { path: 'about', component: AboutMainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'package', component: ContentComponent },
  { path: 'property', component: PropertyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
