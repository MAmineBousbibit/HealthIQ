import { AfterViewInit, Component,ElementRef,OnInit,ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { BsModalRef,BsModalService ,ModalModule} from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/_Services/auth.service';
import { DoctorService } from 'src/app/_Services/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { Events } from 'src/app/_models/events';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent {
 // @ViewChild('eventModal') eventModal!: ElementRef;
 Doctor=new Doctor()
 formattedDate:any
 UserID:any
 Id="6593d95fe01ea7347c191052" /******************* */
 //**6599449e3c0530726e1d654b */
  constructor( private ServiceDoc:DoctorService, private AuthServices:AuthService) {
    this.UserID=AuthServices.getIDUser()
 
    this.ServiceDoc.getOneDoctor(this.Id).subscribe(
      (data:any)=>{
        console.log("user-auth :", data);
        this.Doctor=data
      
      }
    )
  }
  ngOnInit(): void {
   this.getEvents()
 
   
  }
  addEvent:boolean=false
  @ViewChild('eventModal') eventModal: any; // Référence à la modale
 options=['9:00','10:00','11:00','12:00','14:00','15:00']
 optionEtat=['Urgent','À venir','Annulé']
  Event=new Events
  title:any;
  events:any=[]
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    
    plugins: [dayGridPlugin],
    events:this.events,
    eventClick: this.handleEventClick.bind(this), 
    
   
  };
 
  handleEventClick(eventInfo: any) {

 this.Event.title=eventInfo.event._def.title;
 this.Event.hour=eventInfo.event._def.extendedProps.hour;
 this.Event.description=eventInfo.event._def.extendedProps.hour;
 this.Event.date=eventInfo.event.start;



const date = eventInfo.event.start;


const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0'); 
const year = date.getFullYear()
this.formattedDate = `${year}-${month}-${day}`;


const inputDateElement = document.querySelector<HTMLInputElement>('.form-control[type="date"]');

if (inputDateElement !== null) {
  inputDateElement.value = this.formattedDate;
} 
   //console.log(this.Event);
   const modal=document.getElementById('eventModal')
   
   if(modal!=null){
    modal.style.display='block';

   }

  }
ajouterEvent(){
  this.addEvent=true
  console.log("ok",this.addEvent);
  const modal=document.getElementById('ajoutmodal')
   
  if(modal!=null){
   modal.style.display='block';

  }
  this.Event=new Events()
}
  closeevent(){
  this.Event=new Events;
   const modal=document.getElementById('eventModal')
  const modal2=document.getElementById('ajoutmodal')

   
   if(modal!=null){
    modal.style.display='none';

   }
 
    if(modal2!=null){
     modal2.style.display='none';
 
    }{

   }
  }

  btnAdd()
{
  //console.log("event add",this.Event);
  this.Event.ID_doc=this.Doctor.id
  if (this.Event.status=="Urgent") {
    this.Event.color='red'
  } else if(this.Event.status=="À venir") {
    this.Event.color='green'
  }
  else{
    this.Event.color='orange'
  }
  this.ServiceDoc.AddEvent(this.Event).subscribe(
    (response) => {
     //console.log(response);
     this.ngOnInit();
     
    },
    (error) => {
      console.log(error);
    }
  )
  this.closeevent()
} 

  delEvent(){
//console.log("del",this.Event);
  

    this.updateCalendrier()
  this.closeevent()// Fermer la modale après la suppression

  }

  selectStatus(selectedOption: string): void {
    this.Event.status = selectedOption;
  }
  selectHour(selectedOption: string): void {
    this.Event.hour = selectedOption;
  }

  
getEvents(){
  this.ServiceDoc.getEvents().subscribe(
    (response:any) => {
   // console.log("allEvents",this.Doctor.id);

    const filteredEvents = response.filter((rp:any) => rp.ID_doc === this.Doctor.id);
     this.events=filteredEvents
    // console.log("allEvents",filteredEvents);
     this.updateCalendrier()
     
     
     
    },
    (error) => {
      console.log(error);
    }
  )
}

updateCalendrier(){
  this.calendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: this.events,
    eventClick: this.handleEventClick.bind(this),
}
  }



}