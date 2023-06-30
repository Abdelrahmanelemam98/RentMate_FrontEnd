import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyDetailsService } from '../../services/property-details.service';
import { PropertyDetails } from '../../models/property-details';
import { Property } from 'src/app/share/home/Models/property';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent {
  Property: PropertyDetails[] = [];
  img: any[] = [];
  constructor(
    private router: ActivatedRoute,
    private propertyDetailsService: PropertyDetailsService
  ) {}
  ngOnInit() {
    this.router.params.subscribe((data) => {
      this.propertyDetailsService.getByid(data['id']).subscribe((data) => {
        this.Property.push(data);
        console.log(this.Property);
      });
    });
  }
}
