import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private router:Router) { }

                         

  public saveToken(token:string):void{  //*********Sauvgarde de token******/
    localStorage.setItem('token',token)
    
    this.router.navigate(['/Home']) /*Redirection to Home Page  */
    
  }
  
  /**********************Verifier Si User est  Login */
  public isLoggedIn():boolean{
    //return this.getRoles() && this.getToken();
  const token=localStorage.getItem('token')
  console.log("token qui se trouve dans LOCALSTORAGE",token);
  return !! token;
  
  }
/**********Deconnexion */


  //****Suppresion de Token d'apres LocalStorage */
  public ClearToken():void{
  localStorage.removeItem('token');
  this.router.navigate(['/']) //Redirection To Home 
  }

  /*public setRoles(roles:[]){
    localStorage.setItem("roles",JSON.stringify(roles));
  
  }
   public getRoles() {
   return JSON.parse(localStorage.getItem("roles")|| '{}');
   }
   
   */
    
}
