import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_Services/auth.service';

@Component({
  selector: 'app-side-bar-admin',
  templateUrl: './side-bar-admin.component.html',
  styleUrls: ['./side-bar-admin.component.css']
})
export class SideBarAdminComponent {
  AdminData:any
  ID:any;
  constructor(private AuthService:AuthService ,private router:Router){
   this.ID=this.AuthService.getIDUser()
 console.log("Admin Id ", this.ID);
 
  }

  
  goToPageSuivante(page: string): void {
    this.router.navigate([`/${page}`], {replaceUrl: true});
  }

  logout(){
    console.log("logout doc")
    this.AuthService.logout()
  }
}
