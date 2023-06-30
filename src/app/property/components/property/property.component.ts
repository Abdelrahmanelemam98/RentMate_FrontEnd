import { Component,OnInit } from '@angular/core';
import { PropertyService } from 'src/app/share/home/Services/property.service';
import { Property, PropertyType } from 'src/app/share/home/Models/property';

import { TypeData } from 'src/app/share/home/Models/type-enums';
import { Cities } from 'src/app/share/home/Models/cties';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent implements OnInit {
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

  ngOnInit(): void {
    this.propertyService.getAllProperties().subscribe(properties => {
      this.properties = properties;
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

}
