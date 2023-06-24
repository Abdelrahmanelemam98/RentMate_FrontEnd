import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { PackageComponent } from './components/package/package.component';

@NgModule({
  declarations: [ContentComponent, PackageComponent],
  imports: [CommonModule],
})
export class PackageModule {}
