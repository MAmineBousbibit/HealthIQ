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

  constructor(private jwtService: JwtService, private router: Router,private userService:UserService,private AuthService:AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("is LoggedIn ? ",this.jwtService.isLoggedIn());
    
    if (this.jwtService.isLoggedIn() && this.AuthService.role ==='ROLE_ADMIN'||this.jwtService.isLoggedIn() && this.AuthService.role ==='ROLE_DOCTOR' ) {
    
      return  true
      
    } else {
      this.router.navigate(['/Login']); // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
      return false;
    }

  }
  
  }


