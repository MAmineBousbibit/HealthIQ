import { Component } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService) {
  this.isLoggedIn()
  }
  islogin = false;
  User_ID:any
  isLoggedIn() {
     this.authService.isAuthenticated;
    this.User_ID= this.authService.getIDUser()
    console.log("idUser",this.User_ID);
    
   if(this.User_ID != undefined){
    this.islogin=true
   }
    
    
  }

  login() {
    // Ajoutez ici votre logique de connexion (peut-être un appel à une méthode du service d'authentification)
  }

  logout() {
    // Ajoutez ici votre logique de déconnexion (peut-être un appel à une méthode du service d'authentification)
  }

  searchText='';

  // Replace with your logic for login status
 // Replace with your logic for DoctorData
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
