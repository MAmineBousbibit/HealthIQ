import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';
import { DoctorService } from 'src/app/_Services/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { Events } from 'src/app/_models/events';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})

export class AppointmentsComponent {
  Doctor=new Doctor()
  UserID:any
  Id:any
  //Id="65ae8ebd2abf49216e6354e7" /******************* */
  //**6599449e3c0530726e1d654b */
  constructor(private ServiceDoc:DoctorService,private AuthServices:AuthService){
    this.Id=AuthServices.getIDUser()
 //this.Id=this
    this.ServiceDoc.getOneDoctor(this.Id).subscribe(
      (data:any)=>{
        console.log("user-auth :", data);
        this.Doctor=data
      
      }
    )
  }
  i=0;
  searchText='';
Event=new Events()
AppoitmentTable:any
ngOnInit():void{
this.getEvents()

}
 /* getEvent(){
    this.ServiceDoc.getEvents().subscribe(
      (response) => {
        //console.log("events",response)
        this.AppoitmentTable=response
       
      },
      (error) => {
        console.log(error);
      }
    )
  }*/
  getEvents(){
    this.ServiceDoc.getEvents().subscribe(
      (response:any) => {
     // console.log("allEvents",this.Doctor.id);
  
      const filteredEvents = response.filter((rp:any) => rp.ID_doc === this.Doctor.id);
       this.AppoitmentTable=filteredEvents
       console.log("allEvents",filteredEvents);
      // this.updateCalendrier()
       
       
       
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
