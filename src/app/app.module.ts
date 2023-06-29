import { NgModule } from '@angular/core';
import { AboutPageModule } from './about-page/about-page.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { HomeModule } from './share/home/home.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyModule } from './property/property.module';
import { PackageModule } from './package/package.module';
import { PropertyDetailsModule } from './property-details/property-details.module';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    HomeModule,
    RouterModule,
    AboutPageModule,
    LoginModule,
    CoreModule,
    PropertyModule,
    PackageModule,
    BrowserAnimationsModule,
    PropertyDetailsModule,
    UserDashboardModule,
    RegisterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
