import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FormCardComponent } from './component/form-card/form-card.component';
import { PageHomeComponent } from './Views/page-home/page-home.component';
import { BlogsDetailComponent } from './Views/blogs/blogs-detail/blogs-detail.component';

const routes: Routes = [

  { path:'', redirectTo: 'Home', pathMatch: 'full' }, // Page par défaut
  {path:'Home',component:PageHomeComponent},
  {path:'Login',component:FormCardComponent},//login path
  {path:'Blog-Details',component:BlogsDetailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
