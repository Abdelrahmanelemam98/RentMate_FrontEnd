import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { IgxCarouselModule } from 'igniteui-angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PropertyHomeComponent } from './components/property-home/property-home.component';
import { SearchPropertyComponent } from './components/search-property/search-property.component';
import { WorksSectionComponent } from './components/works-section/works-section.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { ArticleComponent } from './components/article/article.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';

@NgModule({
  declarations: [
    PropertyHomeComponent,
    SearchPropertyComponent,
    WorksSectionComponent,
    AboutUsComponent,
    SearchFilterComponent,
    ArticleComponent,
    NewsletterComponent,
    EnquiryComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    HammerModule,
    IgxCarouselModule,
    FormsModule,
  ],
  exports: [PropertyHomeComponent, AboutUsComponent],
})
export class HomeModule {}
