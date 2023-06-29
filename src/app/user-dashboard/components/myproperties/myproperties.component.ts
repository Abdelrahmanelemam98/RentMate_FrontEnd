import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myproperties',
  templateUrl: './myproperties.component.html',
  styleUrls: ['./myproperties.component.css']
})
export class MypropertiesComponent {
  property: any[] = [];
  wish: any[] = [];
  compare: any[] = [];
  arrayIndex: any[] = [];

  public constructor(private router: Router) {
    this.property = [
      {
        id: '1',
        type: 'villas',
        address: 'brookly',
        buildingName: 'South Sun House',
        description:
          'Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum',
        price: '265000',
        area: '290',
        bedroom: '4',
        bathroom: '3',
        imgSourece:
          '../../../../../assets/image/HomePage/HomePagemain-home-property-460x300.jpg,../../../../../assets/image/HomePage/south-sun-house03-460x300.jpg,../../../../../assets/image/HomePage/south-sun-house02-460x300.jpg',
        imgOwner:
          '../../../../../assets/image/HomePage/agent1-profile-img-new-50x50.jpg',
        ownerName: 'Steve Parker',
      },
      {
        id: '1',
        type: 'villas',
        address: 'brookly',
        buildingName: 'South Sun House',
        description:
          'Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum',
        price: '265000',
        area: '290',
        bedroom: '4',
        bathroom: '3',
        imgSourece:
          '../../../../../assets/image/HomePage/HomePagemain-home-property-460x300.jpg,../../../../../assets/image/HomePage/south-sun-house03-460x300.jpg,../../../../../assets/image/HomePage/south-sun-house02-460x300.jpg',
        imgOwner:
          '../../../../../assets/image/HomePage/agent1-profile-img-new-50x50.jpg',
        ownerName: 'Steve Parker',
      }
      
    ];
  }
  // addToWishList(data: any) {
  //   console.log(data);
  //   if ('wish' in localStorage) {
  //     this.wish = JSON.parse(localStorage.getItem('wish')!);
  //     this.wish.push(data);
  //     localStorage.setItem('wish', JSON.stringify(this.wish));
  //   } else {
  //     this.wish.push(data);
  //     localStorage.setItem('wish', JSON.stringify(this.wish));
  //   }
  // }

  addToCompare(data: any) {
    if ('compare' in sessionStorage) {
      this.compare = JSON.parse(sessionStorage.getItem('compare')!);
      this.compare.push(data);
      sessionStorage.setItem('compare', JSON.stringify(this.compare));
    } else {
      this.compare.push(data);
      sessionStorage.setItem('compare', JSON.stringify(this.compare));
    }
  }
  filterIndex(id: any) {
    if (this.compare.filter((z) => z == id).length == 0) {
      console.log(this.compare);
      return true;
    }
    return false;
  }
  fliter(id: any) {}
  removeDiv(divId: string) {
    const divElement = document.getElementById(divId);
    if (divElement) {
      divElement.remove();
    }
  }
  onButtonClick() {
    this.router.navigate(['/editproperty']);
  }

}
