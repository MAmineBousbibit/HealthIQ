import { Component } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

  login() {
    // Ajoutez ici votre logique de connexion (peut-être un appel à une méthode du service d'authentification)
  }

  logout() {
    // Ajoutez ici votre logique de déconnexion (peut-être un appel à une méthode du service d'authentification)
  }

}
