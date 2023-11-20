import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomePageSecondCreatComponent } from './view/home/home-page-second-creat/home-page-second-creat.component';
import { HomePageFirstCreatComponent } from './view/home/home-page-first-creat/home-page-first-creat.component';
import { HomePageParentComponent } from './view/home/home-page-parent/home-page-parent.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DoctorComponent } from './view/doctor/doctor.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { ServiceComponent } from './Shared/Service/service/service.component';
=======
import { MapsComponent } from './Views/maps/maps.component';
import { BlogsComponent } from './Views/blogs/blogs.component';
import { StatistiqueComponent } from './Views/statistique/statistique.component';
import { BannerComponent } from './Views/banner/banner.component';
//import { AgmCoreModule } from '@agm/core';
>>>>>>> fb26664c87e4e7f45e2f9e0973d806c67a19a8fd

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomePageSecondCreatComponent,
    HomePageFirstCreatComponent,
    HomePageParentComponent,
    DoctorComponent,
    NavbarComponent,
    ServiceComponent,

=======
    MapsComponent,
    BlogsComponent,
    StatistiqueComponent,
    BannerComponent
>>>>>>> fb26664c87e4e7f45e2f9e0973d806c67a19a8fd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule
=======
   // AgmCoreModule.forRoot({
   // apiKey='AIzaSyCsDB4BgPFsmAUX5O2UluvYtZN8YUHpX8M'
  // })
>>>>>>> fb26664c87e4e7f45e2f9e0973d806c67a19a8fd
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
