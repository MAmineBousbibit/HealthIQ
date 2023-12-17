import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HomePageSecondCreatComponent } from './view/home/home-page-second-creat/home-page-second-creat.component';
import { HomePageFirstCreatComponent } from './view/home/home-page-first-creat/home-page-first-creat.component';
import { HomePageParentComponent } from './view/home/home-page-parent/home-page-parent.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DoctorComponent } from './Views/page-home/doctor/doctor.component';

import { MapsComponent } from './Views/page-home/maps/maps.component';
import { BlogsComponent } from './Views/blogs/blogs.component';
import { StatistiqueComponent } from './Views/page-home/statistique/statistique.component';
import { NavbarComponent } from './Views/navbar/navbar.component';
import { FooterComponent } from './Views/footer/footer.component';
import { ContactComponent } from './Views/page-home/contact/contact.component';
import { ServiceMedicalComponent } from './Views/page-home/service-medical/service-medical.component';
import { HomeComponent } from './Views/home/home.component';
import { FormCardComponent } from './component/form-card/form-card.component';
import { BlogsDetailComponent } from './Views/blogs/blogs-detail/blogs-detail.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './_guards/auth.guard';
import { PageHomeComponent } from './Views/page-home/page-home.component';
import { DashboardSuperAddComponent } from './SuperAdmin/dashboard-super-add/dashboard-super-add.component';
import { ForgotPwdComponent } from './component/forgot-pwd/forgot-pwd.component';

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
    
    NavbarComponent,
   
    FooterComponent,
    ContactComponent,
    ServiceMedicalComponent,
    HomeComponent,
    FormCardComponent,
    BlogsDetailComponent,
    PageHomeComponent,
    DashboardSuperAddComponent,
    ForgotPwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
