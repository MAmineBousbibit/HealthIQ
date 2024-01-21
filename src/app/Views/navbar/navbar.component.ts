import { Component } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
<<<<<<< HEAD
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

=======
  searchText='';
>>>>>>> 5b0dfb2f7ccf037613e3d865248833c7936e898b
}
