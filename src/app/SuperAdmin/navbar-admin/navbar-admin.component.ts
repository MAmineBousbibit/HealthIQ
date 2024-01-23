import { Component } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent {
  AdminData:any
  ID:any
  constructor(private AuthService:AuthService ,){
   this.ID=this.AuthService.getIDUser()
 console.log("Admin Id ", this.ID);
 
  }
  
}
