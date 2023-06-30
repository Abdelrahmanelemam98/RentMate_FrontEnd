import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyHomeComponent } from './share/home/components/property-home/property-home.component';
import { AboutMainComponent } from './about-page/components/about-main/about-main.component';
import { LoginComponent } from './login/Components/login/login.component';
import { RegisterComponent } from './register/components/register/register.component';
import { PropertyComponent } from './property/components/property/property.component';
import { ContentComponent } from './package/components/content/content.component';
import { PropertyDetailsComponent } from './property-details/components/property-details/property-details.component';

import { StripeComponent } from './user-dashboard/components/stripe/stripe.component';
import { AddPropertyComponent } from './user-dashboard/components/add-property/add-property.component';
import { UserdashboardComponent } from './user-dashboard/components/userdashboard/userdashboard.component';
import { ImagesComponent } from './user-dashboard/components/images/images.component';
import { ProfileInfoComponent } from './user-dashboard/components/profile-info/profile-info.component';
import { MypropertiesComponent } from './user-dashboard/components/myproperties/myproperties.component';
import { WishlistComponent } from './user-dashboard/components/wishlist/wishlist.component';
import { EditPropertyComponent } from './user-dashboard/components/edit-property/edit-property.component';
import { UserComponent } from './user-dashboard/user.component';
const routes: Routes = [
  { path: '', component: PropertyHomeComponent, pathMatch: 'full' },
  { path: 'home', component: PropertyHomeComponent },
  { path: 'about', component: AboutMainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'details', component: PropertyDetailsComponent },
  { path: 'package', component: ContentComponent },
  // { path: 'stripe', component: StripeComponent },
  { path: 'property', component: PropertyComponent },
  // { path: 'stripe', component: StripeComponent },
  { path: 'userdashboard/addproperty/image', component: ImagesComponent },
  { path: 'userdashboard/editproperty', component: EditPropertyComponent },
  { path: 'userdashboard', component: UserComponent },
  { path: 'userdashboard/addproperty', component: AddPropertyComponent },
      { path: 'userdashboard/profile', component: ProfileInfoComponent },
      { path: 'userdashboard/myproperty', component: MypropertiesComponent },
      { path: 'userdashboard/mywishlis', component: WishlistComponent },
      { path: 'userdashboard/addproperty/stripe', component: StripeComponent },
  // {
  //   path: 'userdashboard',
  //   component: UserComponent,
  //   children: [
  //     { path: 'addproperty', component: AddPropertyComponent },
  //     { path: 'profile', component: ProfileInfoComponent },
  //     { path: 'myproperty', component: MypropertiesComponent },
  //     { path: 'mywishlis', component: WishlistComponent },
  //     { path: 'stripe', component: StripeComponent },
  //   ],
  // },
  // { path: 'profile', component: ProfileInfoComponent },
  // {path:"userdashboard" , loadChildren:()=>import("./user-dashboard/user-dashboard.module")
  //                   .then(module=>module.UserDashboardModule) },

  //  { path: 'userdashboard', loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
