import { Component } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';
import { DoctorService } from 'src/app/_Services/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
//import * as moment from 'moment';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  Doctor = new Doctor(); 
  UserID:any
  Id="6593d95fe01ea7347c191052" /******************* */
  //**6599449e3c0530726e1d654b */
  DoctorData=new Doctor()
  AgeDoc:any
  formattedDate:any
  constructor( private DocService:DoctorService,private AuthServices: AuthService){
 /**************************** */
 this.UserID=AuthServices.getIDUser()
 
 this.DocService.getOneDoctor(this.Id).subscribe(
   (data:any)=>{
     console.log("user-auth :", data);
     this.DoctorData=data
     this.calculateAge(this.DoctorData.naissance)
     this.Doctor=data
     
   }
 )
  }
  formPWD:boolean=false
  informations:boolean=false
  ChangePWD(){
    this.formPWD = !this.formPWD; 
  }
  Changeinfo(){
    this.informations = !this.informations; 

  }
  editinformation(){
    console.log(this.Doctor)
    this.DocService.updateDoctor(this.Id,this.Doctor).subscribe(
      (response:any)=>{
        console.log("updated doc",response);
        
      }
    )
  }
  editpassword(){
    console.log(this.Doctor)

  }
  calculateAge(dateOfBirth: Date): any {
    const today: Date = new Date();
    const birthDate: Date = new Date(dateOfBirth);
  
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const monthDiff: number = today.getMonth() - birthDate.getMonth();
  
    // Si le mois de naissance est dans le futur par rapport au mois actuel,
    // ou si c'est le même mois mais que le jour de naissance n'est pas encore passé,
    // alors réduire l'âge d'une année
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    this.AgeDoc=age
  }

  /*changeDate() {
    const startDate = moment('2024-01-22T08:15');
    const endDate = moment('2024-01-28T15:30');

    const startDayName = startDate.format('ddd').toUpperCase();
    const endDayName = endDate.format('ddd').toUpperCase();

    const startTime = startDate.format('h:mm A');
    const endTime = endDate.format('h:mm A');

    this.formattedDate = `${startDayName} - ${endDayName} ${startTime} - ${endTime}`;
  }*/
}
