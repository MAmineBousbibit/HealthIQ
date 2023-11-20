import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageFirstCreatComponent } from './view/home/home-page-first-creat/home-page-first-creat.component';
import { HomePageSecondCreatComponent } from './view/home/home-page-second-creat/home-page-second-creat.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page-first', pathMatch: 'full' }, // Page par défaut
  { path: 'home-page-first', component: HomePageFirstCreatComponent },
  { path: 'home-page-second', component: HomePageSecondCreatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
