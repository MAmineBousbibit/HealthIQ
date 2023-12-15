import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_Services/auth.service';
import { JwtService } from '../_Services/jwt.service';
import { UserService } from '../_Services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private jwtService: JwtService, private router: Router,private userService:UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("is LoggedIn ? ",this.jwtService.isLoggedIn());
    
    if (this.jwtService.isLoggedIn()) {
      //*this.router.navigate(['/Home']) ; Autoriser l'accès à la route
      return  true
      
    } else {
      this.router.navigate(['/Login']); // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
      return false;
    }

  }
  }


