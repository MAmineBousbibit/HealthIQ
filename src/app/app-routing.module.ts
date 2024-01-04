import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FormCardComponent } from './component/form-card/form-card.component';
import { PageHomeComponent } from './Views/page-home/page-home.component';
import { BlogsDetailComponent } from './Views/blogs/blogs-detail/blogs-detail.component';
import { DashboardSuperAddComponent } from './SuperAdmin/dashboard-super-add/dashboard-super-add.component';
import { GestionCustComponent } from './SuperAdmin/gestion-cust/gestion-cust.component';
import { GestionDocComponent } from './SuperAdmin/gestion-doc/gestion-doc.component';
import { AuthGuard } from './_guards/auth.guard';
import { DoctorInterfaceComponent } from './doctor-interface/doctor-interface.component';
import { TabDashboardComponent } from './doctor-interface/tab-dashboard/tab-dashboard.component';
import { CalendrierComponent } from './doctor-interface/calendrier/calendrier.component';
import { OrdonnanceComponent } from './doctor-interface/ordonnance/ordonnance.component';
import { PatientsComponent } from './doctor-interface/patients/patients.component';
import { SettingComponent } from './doctor-interface/setting/setting.component';
import { AppointmentsComponent } from './doctor-interface/appointments/appointments.component';

const routes: Routes = [

  { path:'', redirectTo: 'Home', pathMatch: 'full' }, // Page par défaut
  {path:'Home',component:PageHomeComponent},
  {path:'Login',component:FormCardComponent},//login path
  {path:'Blog-Details',component:BlogsDetailComponent},
  { 
    path: 'Doctor',
    component: DoctorInterfaceComponent,
    children: [
      { 
        path: '', // Route vide pour rediriger vers 'Dashboard'
        redirectTo: 'Dashboard',
        pathMatch: 'full'
      },
      { 
        path: 'Dashboard',
        component: TabDashboardComponent  
      },
      { 
        path: 'Appointments',
        component: AppointmentsComponent  
      },
      { 
        path: 'Calendrier',
        component: CalendrierComponent  
      },
      { 
        path: 'Ordonnance',
        component: OrdonnanceComponent  
      },
      { 
        path: 'Patients',
        component: PatientsComponent  
      },
      { 
        path: 'Settings',
        component: SettingComponent  
      }
    ]
  }
  ,

  {
    path: 'admin',
    component: DashboardSuperAddComponent, 
    canActivate:[AuthGuard],// User doit être admin pour acces a ces Page ****/

  },
  {path: 'gestion-doc', component:GestionDocComponent},
  {path:'gestion-cust', component:GestionCustComponent}
    ];
 




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
