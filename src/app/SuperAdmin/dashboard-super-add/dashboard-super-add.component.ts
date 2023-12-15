import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-super-add',
  templateUrl: './dashboard-super-add.component.html',
  styleUrls: ['./dashboard-super-add.component.css']
})
export class DashboardSuperAddComponent /*implements OnInit*/ {
  isMenuOpen: boolean = false;
  subscription: any;

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private router:Router) {}
 /* ngOnInit(): void {
    this.router.navigate(['/dashboard-super-add']);
  }*/
  
  goToPageSuivante(page: string): void{
    this.router.navigate([`/${page}`], {replaceUrl: true});
  }
}
