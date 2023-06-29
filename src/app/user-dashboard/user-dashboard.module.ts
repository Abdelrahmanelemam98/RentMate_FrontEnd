import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import{HttpClientModule} from '@angular/common/http';
import { StripeComponent} from './components/stripe/stripe.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ImagesComponent } from './components/images/images.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MypropertiesComponent } from './components/myproperties/myproperties.component';
import { EditPropertyComponent } from './components/edit-property/edit-property.component';



//  import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  declarations: [
    AddPropertyComponent,
    StripeComponent,
    ImagesComponent,
    UserdashboardComponent,
    ProfileInfoComponent,
    WishlistComponent,
    MypropertiesComponent,
    EditPropertyComponent
  ],
  imports: [
    
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    FormsModule,
    BrowserModule
  ],
  exports:[
    AddPropertyComponent,
    StripeComponent,
    ImagesComponent,
    UserdashboardComponent,
    ProfileInfoComponent,
    RouterModule,
    WishlistComponent,
    MypropertiesComponent,
    EditPropertyComponent
    
  ]
})
export class UserDashboardModule { }
