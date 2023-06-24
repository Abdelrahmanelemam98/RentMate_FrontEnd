import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './components/property/property.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PropertyComponent],
  imports: [CommonModule, FormsModule],
  exports: [PropertyComponent],
})
export class PropertyModule {}
