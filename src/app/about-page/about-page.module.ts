import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMainComponent } from './components/about-main/about-main.component';
import { AboutVisionComponent } from './components/about-vision/about-vision/about-vision.component';
import { CountingUpComponent } from './components/about-counting-up/counting-up/counting-up.component';
import { PremuimSectionComponent } from './components/premuim-section/premuim-section.component';
import { HomeModule } from '../share/home/home.module';
import { MissionSectionComponent } from './components/mission-section/mission-section.component';

@NgModule({
  declarations: [
    AboutMainComponent,
    AboutVisionComponent,
    CountingUpComponent,
    PremuimSectionComponent,
    MissionSectionComponent,
  ],
  imports: [CommonModule, HomeModule],
  exports: [AboutMainComponent],
})
export class AboutPageModule {}
