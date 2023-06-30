import { style } from '@angular/animations';
import { AfterViewChecked, Component } from '@angular/core';
import { PropertyService } from '../../Services/property.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Property } from '../../Models/property';
import { TypeData } from '../../Models/type-enums';
import { Cities } from '../../Models/cties';

@Component({
  selector: 'app-property-home',
  templateUrl: './property-home.component.html',
  styleUrls: ['./property-home.component.css'],
})
export class PropertyHomeComponent {
  properties: Property[] = [];
  filteredData: Property[] = [];
  type: string[] = Object.values(TypeData);
  cities: string[] = Object.values(Cities);
  Category: string = '';
  City: string = '';
  NBed: number = 0;
  Nbath: number = 0;
  minArea: number = 0;
  maxArea: number = 0;
  price: number = 0;

  constructor(private propertyService: PropertyService) { }
  governments: string[] = [
    'Cairo', 'Giza', 'Alexandria', 'Dakahlia', 'Red Sea', 'Beheira', 'Fayoum',
    'Gharbiya', 'Ismailia', 'Menofia', 'Minya', 'Qaliubiya', 'New Valley', 'Suez',
    'Aswan', 'Assiut', 'Beni Suef', 'Port Said', 'Damietta', 'Sharkia', 'South Sinai',
    'Kafr Al sheikh', 'Matrouh', 'Luxor', 'Qena', 'North Sinai', 'Sohag'
  ];

  ngOnInit(): void {
    this.propertyService.getAllPropertiesLimit(6).subscribe(properties => {
      this.properties = properties.slice(0,6);
      this.filteredData = properties;
    });
  }

  modelChange(event: any) {
    this.Category = event.target.value;
  }

  modelChange2(event: any) {
    this.City = event.target.value;
  }

  clickEvent(event: any) {
    this.filteredData = this.properties;
    if (this.Category != '') {
      this.filteredData = this.filteredData.filter(data => data.type == this.Category);
    }
    if (this.City != '') {
      this.filteredData = this.filteredData.filter(data => data.city == this.City);
    }
    if (this.NBed != 0) {
      this.filteredData = this.filteredData.filter(data => data.nBed == this.NBed);
    }
    if (this.Nbath != 0) {
      this.filteredData = this.filteredData.filter(data => data.nBath == this.Nbath);
    }
    if (this.minArea != 0) {
      this.filteredData = this.filteredData.filter(data => data.area >= this.minArea);
    }
    if (this.maxArea != 0) {
      this.filteredData = this.filteredData.filter(data => data.area <= this.maxArea);
    }
    if (this.price != 0) {
      this.filteredData = this.filteredData.filter(data => data.price <= this.price);
    }
  }

  addToWishList(item: Property) {
    console.log(item);
  }
  // slide Owl
}
