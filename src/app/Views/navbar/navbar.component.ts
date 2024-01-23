import { Component } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';

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
  Id=""

  constructor(private authService: AuthService) {
    this.isLoggedIn()
    }
    
   toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }

  toggleTabsetVisibility() {
    this.isTabsetVisible = !this.isTabsetVisible;
  }

  isLoggedIn() {
    this.authService.isAuthenticated;
   this.User_ID= this.authService.getIDUser()
   console.log("idUser",this.User_ID);
   
  if(this.User_ID != undefined){
   this.islogin=true
  }
 }

 
}
