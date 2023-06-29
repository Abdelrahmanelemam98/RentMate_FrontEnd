import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {
  showAddproperty: boolean = false;
  showProfile: boolean = false; 
  showMyproperty : boolean = false;
  showMywishlist : boolean = false;
  showLogout : boolean = false;

  constructor(private router: Router) { }
  redirectToAddPropertyComponent(){
    this.showAddproperty=true;
    this.showProfile= false;
    this.showMyproperty= false;
    this.showMywishlist= false;
    this.showLogout= false;
    this.router.navigate(['/userdashboard/addproperty']);

  }
 
  redirectToProfileInfoComponent(){
    this.showProfile= true
    this.showAddproperty=false;
    this.showMyproperty= false;
    this.showMywishlist= false;
    this.showLogout= false;
    this.router.navigate(['/userdashboard/profile']);
  }
  redirectToMyPropertyInfoComponent(){
    this.showMyproperty= true;
    this.showProfile= false
    this.showAddproperty=false;
    this.showMywishlist= false;
    this.showLogout= false;
    this.router.navigate(['/userdashboard/myproperty']);
  }
  redirectToMyWishListInfoComponent(){
    this.showMyproperty= false;
    this.showProfile= false
    this.showAddproperty=false;
    this.showMywishlist= true;
    this.showLogout= false;
    this.router.navigate(['/userdashboard/mywishlis']);
  }
  // redirectToMyLogOutInfoComponent(){
  //   this.showMyproperty= false;
  //   this.showProfile= false
  //   this.showAddproperty=false;
  //   this.showMywishlist= false;
  //   this.showLogout= true;
  //   this.router.navigate(['/userdashboard/profile']);
  // }
}
