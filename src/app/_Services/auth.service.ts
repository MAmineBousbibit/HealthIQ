import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { JwtService } from './jwt.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role:any;
  email:any;
  userID:any;
  token!:string;
  isAuthenticated:boolean =false;
  constructor(private http:HttpClient,private JWTService:JwtService,private router:Router) { }

  /*/************************* Fonction Qui Decode Jeton de User*/ 
  public loadProfile(token:any){
    this.isAuthenticated=true;
    //recuperation de token 
    this.token=token['token'];
   //Decodage de Token 
    let jwtDecoder:any =jwtDecode(this.token)
   //afectation les info de token 
    //this.email=jwtDecoder.sub;
    this.role=jwtDecoder.role
    this.userID=jwtDecoder.ID;
    if(this.role==='ROLE_USER'){
    this.JWTService.saveToken(this.token)
    this.router.navigate(['/Home'])
    }
    else if (this.role==='ROLE_ADMIN') {
      this.JWTService.saveToken(this.token)
      this.router.navigate(['/admin'])
   
    } 
    else  {
      this.JWTService.saveToken(this.token)
      this.router.navigate(['/Doctor'])
    } 
  }
//*******Recupere Dato from Token  */
  getIDUser(){
  return this.userID
  }
logout(){
  this.JWTService.ClearToken()
  
}
}
