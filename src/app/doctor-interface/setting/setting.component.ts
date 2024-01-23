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
  Id="" 
  DoctorData=new Doctor()
  AgeDoc:any
  formattedDate:any
  constructor( private DocService:DoctorService,private AuthServices: AuthService){
 /**************************** */
 this.Id=AuthServices.getIDUser()
 
 this.DocService.getOneDoctor(this.Id).subscribe(
   (data:any)=>{
     console.log("user-auth :", data);
     this.DoctorData=data
     this.calculateAge(this.DoctorData.naissance)

     this.Doctor=data
     this.ChangeDate(this.DoctorData.finTime,this.DoctorData.debutTime) 
     
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
  onImageChange(event:any){
    this.Doctor.image=event
  }
  editinformation(){
    console.log(this.Doctor)
    //this.Doctor.enabled=true;
   // this.Doctor.locked=false;

    this.DocService.updateDoctor(this.Id,this.Doctor).subscribe(
      (response:any)=>{
        console.log("updated doc",response);
        
      }
    )
  }
  editpassword(){
    console.log(this.Doctor)

  }
 
  calculateAge(dateOfBirth: any): void {
    const today: Date = new Date();
  
    // Convertir la date de naissance en format "MM-DD-YYYY" en "YYYY-MM-DD"
    const formattedDateOfBirth: string = dateOfBirth.split('-').reverse().join('-');
    
    const birthDate: Date = new Date(formattedDateOfBirth);
  
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const monthDiff: number = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  console.log("age",age);
  
   this.AgeDoc= age;
  }
  
 ChangeDate(fin:any,debut:any) {
    
    const startDate = new Date(debut);
    const endDate = new Date(fin);

    const startDayName = this.getDayName(startDate).toUpperCase();
    const endDayName = this.getDayName(endDate).toUpperCase();

    const startTime = this.formatTime(startDate);
    const endTime = this.formatTime(endDate);

    this.formattedDate = `${startDayName} - ${endDayName} ${startTime} - ${endTime}`;
  }
  private getDayName(date: Date): string {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  }

  private formatTime(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }
}
