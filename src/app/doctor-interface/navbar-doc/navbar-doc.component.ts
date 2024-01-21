import { Component } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';
import { DoctorService } from 'src/app/_Services/doctor.service';
import { Doctor } from 'src/app/_models/doctor';

@Component({
  selector: 'app-navbar-doc',
  templateUrl: './navbar-doc.component.html',
  styleUrls: ['./navbar-doc.component.css']
})
export class NavbarDocComponent {
  UserID:any
  Id="6593d95fe01ea7347c191052" /******************* */
  //**6599449e3c0530726e1d654b */
  DoctorData=new Doctor()
  
  constructor( private DocService:DoctorService,private AuthServices: AuthService){
 /**************************** */
 this.UserID=AuthServices.getIDUser()
 
 this.DocService.getOneDoctor(this.Id).subscribe(
   (data:any)=>{
    // console.log("user-auth :", data);
     this.DoctorData=data
    
   }
 )
  }


}