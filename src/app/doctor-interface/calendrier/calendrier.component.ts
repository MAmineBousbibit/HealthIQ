import { Component,OnInit,ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { BsModalRef,BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent {
  modalRef?:BsModalRef;
  events:any= [
    { title: 'event 1', date: '2023-12-01' ,color:'red'},
    { title: 'event 2', date: '2023-11-27',color:'green' }
  ]
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    
    plugins: [dayGridPlugin],
    events:this.events,
    eventClick: this.handleDateClick.bind(this), 
   
  };
 
  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
    console.log(arg)
  }
  };

