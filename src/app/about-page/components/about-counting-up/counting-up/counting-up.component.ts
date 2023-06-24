import { Component } from '@angular/core';

@Component({
  selector: 'app-counting-up',
  templateUrl: './counting-up.component.html',
  styleUrls: ['./counting-up.component.css'],
})
export class CountingUpComponent {
  medianSolid: number = 0;
  propertySolid: number = 0;
  medianLeasedPrice: number = 0;
  propertyLeased: number = 0;
  sales: number = 0;

  median: any = setInterval(() => {
    this.medianSolid++;
    if (this.medianSolid == 980) {
      clearInterval(this.median);
    }
  }, 10);

  propertyCounting: any = setInterval(() => {
    this.propertySolid++;
    if (this.propertySolid == 24) {
      clearInterval(this.propertyCounting);
    }
  }, 10);

  medianLeasedPriceCount: any = setInterval(() => {
    this.medianLeasedPrice++;
    if (this.medianLeasedPrice == 680) {
      clearInterval(this.medianLeasedPriceCount);
    }
  }, 10);

  propertyLeasedCount: any = setInterval(() => {
    this.propertyLeased++;
    if (this.propertyLeased == 95) {
      clearInterval(this.propertyLeasedCount);
    }
  }, 10);

  salesCount: any = setInterval(() => {
    this.sales++;
    if (this.sales == 522) {
      clearInterval(this.salesCount);
    }
  }, 10);
}
