import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_Services/auth.service';
import { DoctorService } from 'src/app/_Services/doctor.service';
import { Doctor } from 'src/app/_models/doctor';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  UserID:any
  Id="" /******************* */
  //**6599449e3c0530726e1d654b */
  DoctorData=new Doctor()
  constructor(private route:Router, private DocService:DoctorService,private AuthServices: AuthService){
 /**************************** */
 this.Id=AuthServices.getIDUser()
 
 this.DocService.getOneDoctor(this.Id).subscribe(
   (data:any)=>{
    // console.log("user-auth :", data);
     this.DoctorData=data
     
   }
 )
/**************************** */
  }
  logout(){
    console.log("logout doc")
    this.AuthServices.logout()
  }
}
