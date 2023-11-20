import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageSecondCreatComponent } from './view/home/home-page-second-creat/home-page-second-creat.component';
import { HomePageFirstCreatComponent } from './view/home/home-page-first-creat/home-page-first-creat.component';
import { HomePageParentComponent } from './view/home/home-page-parent/home-page-parent.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DoctorComponent } from './view/doctor/doctor.component';

import { MapsComponent } from './Views/maps/maps.component';
import { BlogsComponent } from './Views/blogs/blogs.component';
import { StatistiqueComponent } from './Views/statistique/statistique.component';
import { BannerComponent } from './Views/banner/banner.component';
//import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,

    HomePageSecondCreatComponent,
    HomePageFirstCreatComponent,
    HomePageParentComponent,
    DoctorComponent,

    MapsComponent,
    BlogsComponent,
    StatistiqueComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // AgmCoreModule.forRoot({
   // apiKey='AIzaSyCsDB4BgPFsmAUX5O2UluvYtZN8YUHpX8M'
  // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
