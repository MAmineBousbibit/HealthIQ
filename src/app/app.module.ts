import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';


import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import {ModalModule } from 'ngx-bootstrap/modal';
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
import { GestionDocComponent } from './SuperAdmin/gestion-doc/gestion-doc.component';
import { ChatboxComponent } from './Views/page-home/chatbox/chatbox.component';
import { DoctorInterfaceComponent } from './doctor-interface/doctor-interface.component';
import { NavbarDocComponent } from './doctor-interface/navbar-doc/navbar-doc.component';
import { SidebarComponent } from './doctor-interface/sidebar/sidebar.component';
import { TabDashboardComponent } from './doctor-interface/tab-dashboard/tab-dashboard.component';
import { CalendrierComponent } from './doctor-interface/calendrier/calendrier.component';
import { PatientsComponent } from './doctor-interface/patients/patients.component';
import { OrdonnanceComponent } from './doctor-interface/ordonnance/ordonnance.component';
import { SettingComponent } from './doctor-interface/setting/setting.component';
import { AppointmentsComponent } from './doctor-interface/appointments/appointments.component';
import { TabsetPatientComponent } from './Views/tabset-patient/tabset-patient.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from './doctor-interface/appointments/search.pipe';
import { NgChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import { SearchPipeHomePipe } from './Views/navbar/search-pipe-home.pipe';
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
    GestionDocComponent,
    PageHomeComponent,
    DashboardSuperAddComponent,
    ChatboxComponent,
    DoctorInterfaceComponent,
    NavbarDocComponent,
    SidebarComponent,
    TabDashboardComponent,
    CalendrierComponent,
    PatientsComponent,
    OrdonnanceComponent,
    SettingComponent,
    AppointmentsComponent,
    TabsetPatientComponent,
    SearchPipe,
    SearchPipeHomePipe,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule,
    ModalModule.forRoot(),
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgChartsModule,
  
  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
