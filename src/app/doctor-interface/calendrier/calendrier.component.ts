import { AfterViewInit, Component,ElementRef,OnInit,ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { BsModalRef,BsModalService ,ModalModule} from 'ngx-bootstrap/modal';
import { Events } from 'src/app/_models/events';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent {
 // @ViewChild('eventModal') eventModal!: ElementRef;
  constructor() {}
  @ViewChild('eventModal') eventModal: any; // Référence à la modale
 options=['9:00','10:00','11:00','12:00','14:00','15:00']
  Event=new Events
  title:any;
  events:any= [
    { title: 'event 1', date: '2023-12-01' ,color:'red',hour:'12:00'},
    { title: 'event 1', date: '2023-12-10' ,color:'red',hour:'12:00'},

    { title: 'event 45', date: '2024-01-05' ,color:'red',hour:'12:00'},

    { title: 'event 2', date: '2023-11-27',color:'green' }
  ]
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

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0'); 

const formattedDate = `${year}-${month}-${day}`;

const inputDateElement = document.querySelector<HTMLInputElement>('.form-control[type="date"]');

if (inputDateElement !== null) {
  inputDateElement.value = formattedDate;
} 
   console.log(this.Event);
   const modal=document.getElementById('eventModal')
   
   if(modal!=null){
    modal.style.display='block';

   }

  }

  closeevent(){
  this.Event=new Events;
   const modal=document.getElementById('eventModal')
   
   if(modal!=null){
    modal.style.display='none';

   }
  }


  deleteEvent() {
    
  this.closeevent()// Fermer la modale après la suppression
  }
  };

