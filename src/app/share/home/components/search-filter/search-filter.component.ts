import { Component } from '@angular/core';
import { Cities } from '../../Models/cties';
import { Property } from '../../Models/property';
import { TypeData } from '../../Models/type-enums';
import { PropertyService } from '../../Services/property.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
})
export class SearchFilterComponent {
  properties: Property[] = [];
  image: any = [];
  cities = Cities;
  type = TypeData;
  Category: string = '';
  City: string = '';
  ngOnInit() {}
  constructor(private myService: PropertyService) {
    this.properties = myService.getAll();
    console.log(this.properties);

    this.image = [
      {
        Img: '../../../../../assets/image/HomePage/home-rev-img-1.jpg',
      },
      {
        Img: '../../../../../assets/image/HomePage/home-rev-img-2.jpg',
      },
      {
        Img: '../../../../../assets/image/HomePage/home-rev-img-3.jpg',
      },
      {
        Img: '../../../../../assets/image/HomePage/home-rev-img-4.jpg',
      },
    ];
  }

  modelChange(event: any) {
    this.Category = event.target.value;
  }

  modelChange2(event: any) {
    this.City = event.target.value;
  }
  clickEvent(event: any) {
    console.log(this.City);
    console.log(this.Category);
  }
}
