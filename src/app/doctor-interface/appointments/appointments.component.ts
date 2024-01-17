import { Component,OnInit } from '@angular/core';
import { DoctorService } from 'src/app/_Services/doctor.service';
import { Events } from 'src/app/_models/events';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})

export class AppointmentsComponent {
  constructor(private ServiceDoc:DoctorService){

  }
  i=0;
  searchText='';
Event=new Events()
AppoitmentTable:any
ngOnInit():void{
this.getEvent()

}
  getEvent(){
    this.ServiceDoc.getEvents().subscribe(
      (response) => {
        console.log("events",response)
        this.AppoitmentTable=response
       
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
