import { Component } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';
import { UserService } from 'src/app/_Services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent {
  AdminData=new User()
  ID:any
  constructor(private AuthService:AuthService ,private UserSevice:UserService){
   this.ID=this.AuthService.getIDUser()
 //console.log("Admin Id ", this.ID);
 this.UserSevice.getOneUser( this.ID).subscribe(
  (rep:any)=>{
    this.AdminData=rep
  //  console.log("admindaata",this.AdminData);
    
  }
 )
 
  }

}
