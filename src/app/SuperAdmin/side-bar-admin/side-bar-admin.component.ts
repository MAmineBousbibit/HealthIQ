import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_Services/auth.service';
import { UserService } from 'src/app/_Services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-side-bar-admin',
  templateUrl: './side-bar-admin.component.html',
  styleUrls: ['./side-bar-admin.component.css']
})
export class SideBarAdminComponent {
  AdminData=new User()
  ID:any
  constructor(private AuthService:AuthService ,private UserSevice:UserService ,private router:Router){
   this.ID=this.AuthService.getIDUser()
 //console.log("Admin Id ", this.ID);
 this.UserSevice.getOneUser( this.ID).subscribe(
  (rep:any)=>{
    this.AdminData=rep
    //console.log("admindaata",this.AdminData);
    
  }
 )
 
  }

  
  goToPageSuivante(page: string): void {
    this.router.navigate([`/${page}`], {replaceUrl: true});
  }

  logout(){
    
    this.AuthService.logout()
  }
}
