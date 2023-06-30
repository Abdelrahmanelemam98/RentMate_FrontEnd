import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { MypropertiesComponent } from './components/myproperties/myproperties.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { StripeComponent } from './components/stripe/stripe.component';
// const routes: Routes = [
//       { path: '', component: UserComponent },
//       { path: 'userdashboard/addproperty', component: AddPropertyComponent },
//       { path: 'userdashboard/profile', component: ProfileInfoComponent },
//       { path: 'userdashboard/myproperty', component: MypropertiesComponent },
//       { path: 'userdashboard/mywishlis', component: WishlistComponent },
//       { path: 'userdashboard/stripe', component: StripeComponent },
   
// ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class UserdashboardRoutingModule { }
