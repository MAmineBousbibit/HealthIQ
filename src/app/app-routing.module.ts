import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FormCardComponent } from './component/form-card/form-card.component';
import { PageHomeComponent } from './Views/page-home/page-home.component';
import { BlogsDetailComponent } from './Views/blogs/blogs-detail/blogs-detail.component';
import { DashboardSuperAddComponent } from './SuperAdmin/dashboard-super-add/dashboard-super-add.component';
import { GestionCustComponent } from './SuperAdmin/gestion-cust/gestion-cust.component';
import { GestionDocComponent } from './SuperAdmin/gestion-doc/gestion-doc.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [

  { path:'', redirectTo: 'Home', pathMatch: 'full' }, // Page par défaut
  {path:'Home',component:PageHomeComponent},
  {path:'Login',component:FormCardComponent},//login path
  {path:'Blog-Details',component:BlogsDetailComponent},
  {
    path: 'admin',
    component: DashboardSuperAddComponent, 
    canActivate:[AuthGuard],// User doit être admin pour acces a ces Page ****/
    children: [
      {
        path: 'Patients',
        component: GestionCustComponent  // Composant pour le chemin 'admin/Patients'
      },
      {
        path: 'Doctors',
        component: GestionDocComponent // Composant pour le chemin 'admin/Doctors'
      },
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
