import { Component } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';
import { UserService } from 'src/app/_Services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isTabsetVisible = false;
  islogin = false;
  User_ID:any
  searchText='';
  dropdownOpen = false;
  UserData=new User()
  ID:any

    constructor(private AuthService:AuthService ,private UserSevice:UserService){
      this.isLoggedIn()
      this.ID=this.AuthService.getIDUser()
    //console.log("Admin Id ", this.ID);
    this.UserSevice.getOneUser( this.ID).subscribe(
     (rep:any)=>{
       this.UserData=rep
      console.log("admindaata",this.UserData);
       
     }
    )
    
     }
    
   toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }

  toggleTabsetVisibility() {
    this.isTabsetVisible = !this.isTabsetVisible;
  }

  isLoggedIn() {
    this.AuthService.isAuthenticated;
   this.User_ID= this.AuthService.getIDUser()
   console.log("idUser",this.User_ID);
   
  if(this.User_ID != undefined){
   this.islogin=true
  }
 }

 
}
