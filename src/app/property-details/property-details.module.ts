import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';

@NgModule({
  declarations: [PropertyDetailsComponent],
  imports: [CommonModule],
  exports: [PropertyDetailsComponent],
})
export class PropertyDetailsModule {}
