import { Component,OnInit , AfterViewInit,ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { DoctorService } from 'src/app/_Services/doctor.service';
import { FlaskAnalyseService } from 'src/app/_Services/flask-analyse.service';
import { ToDo } from 'src/app/_models/to-do';
import * as $ from 'jquery';
@Component({
  selector: 'app-tab-dashboard',
  templateUrl: './tab-dashboard.component.html',
  styleUrls: ['./tab-dashboard.component.css']
})
export class TabDashboardComponent  {
  @ViewChild('myModal') myModal!: ElementRef;
constructor(private FlaskService:FlaskAnalyseService, private DocService:DoctorService){

}

compteurDates: { [date: string]: number } = {};
PatientList:any
DataEvents:any
ListToDo:any;
TODO=new ToDo()
nbPatientsTOTAL:any
nbTotalAppoitment:any;
  public chart: any;
  ngOnInit(){
  this.getDataEvent()
  this.getToDoList()
  
  }
 
  createChart(){
  

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor:string;
    fill:boolean;
    tension:number
   
  }[];
}

const chartData: ChartData = {
  labels: Object.keys(this.compteurDates),
  datasets: [
    {
      label: "Nombre de consultation ",
      data: Object.values(this.compteurDates),
      backgroundColor: ' rgba(162, 111, 72, 0.181)', 
      fill: true,
      borderColor: 'rgba(162, 111, 72, 0.647)',
      tension: 0.5,
    
    },
  ],

};
// Create the chart using the chartData
this.chart = new Chart("MyChart", {
  type: 'line',
  data: chartData,
  options: {
    animations: {
      tension: {
        duration: 2000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    plugins: {
      legend:{
        display:false
      }
    },
    elements: {
    
      point: {
        borderColor: 'rgba(0,0,0,0)', // Couleur des bordures des points transparente
        backgroundColor: 'rgba(0,0,0,0)', // Couleur de fond des points transparente
        radius: 0 // Rayon des points à zéro
      }
    },
    scales: {
    
      x: {
        grid: {
          display: false // Masquer les lignes de la grille de l'axe x
        },
        display: true, // Masquer les lignes et étiquettes de l'axe x
        beginAtZero: true,
      },
      y: {
        grid: {
          display: false // Masquer les lignes de la grille de l'axe x
        },
        display: true, // Masquer les lignes et étiquettes de l'axe y
        beginAtZero: true,
      }
    }
  }
});


  }
  getDataEvent() {
    const id_Doc = "1";
    this.FlaskService.getEventsDoc(id_Doc).subscribe(
      (response: any) => {
       this.DataEvents=response
      
       this.NombreConsultation(response)
       this.GetPatient()
       this.PatientGraphe()
       this.ChartPatient()
       this.DoughnutGraph()
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  NombreConsultation(data: any) {

    data.forEach((item: any) => {
        const date = item.date; 
        if (this.compteurDates[date]) {
            this.compteurDates[date]++;
        } else {
            this.compteurDates[date] = 1;
        }
    });
    
    this.createChart()
}
 
GetPatient(){
 
  this.PatientList=this.DataEvents.slice(0, 7);
  //console.log("patient",this.PatientList);
}
getToDoList(){
  this.DocService.getToDoList().subscribe(
    (response: any) => {
     //console.log("TodoList",response);

     this.ListToDo=response;
     
     },
     (error) => {
       console.log(error);
     }
  )
}
checkedDo(index: number) {
  this.ListToDo[index].cheked = this.ListToDo[index].cheked;


 if(this.ListToDo[index].cheked ==true){


  this.DocService.CheckedTodoList(this.ListToDo[index].id,this.ListToDo[index].cheked ).subscribe(
    (response:any)=>{
     // console.log("true",response);
      
    },
    (error) => {
      console.log(error);
    }
  )

}else{
  this.DocService.NoCheckedTodoList(this.ListToDo[index].id,this.ListToDo[index].cheked ).subscribe(
    (response:any)=>{
    //  console.log("false",response);
      
    },
    (error) => {
      console.log(error);
    }
  )

}
}
newEvent(){
this.TODO=new ToDo()

}
addToDo()
{
  
this.TODO.checked=false
this.TODO.id_Doc.id="1"  /*****id de doc************************************ */

this.DocService.AddToDo(this.TODO).subscribe(
  (resp:any)=>{
 
  this.getToDoList()
 
  this.closeModal()
  },(error) => {
    console.log(error);
  }
)
}
closeModal() {
  this.myModal.nativeElement.classList.remove('show');
  document.body.classList.remove('modal-open');
  this.myModal.nativeElement.style.display = 'none';

  const modalBackdrop = document.querySelector('.modal-backdrop');
  if (modalBackdrop && modalBackdrop.parentNode) {
    modalBackdrop.parentNode.removeChild(modalBackdrop);
  }
}

PatientGraphe(){
  const currentDate = new Date();
 // Utilisez la fonction filter pour sélectionner les événements qui répondent aux critères
const filteredEvents = this.DataEvents.filter((evet:any) =>

evet.Id_patient && 
evet.Id_patient.firstname !=="" &&
isEventInCurrentDay(evet, currentDate),//verifier la date de aujourd'hui que event on a 


);
this.nbPatientsTOTAL = filteredEvents.length; //nb des patient qui on consiltation today
this.nbTotalAppoitment=this.DataEvents.length;

function isEventInCurrentDay(eve: any, currentDate: Date): boolean {
  
  const eventDate = new Date(eve.date); 
  return (
    eventDate.getFullYear() === currentDate.getFullYear() &&
    eventDate.getMonth() === currentDate.getMonth() &&
    eventDate.getDate() === currentDate.getDate()
  );
}

}

 extractMonthAndYear(dateString:any) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();
  return `${year}-${month}`;
}
ChartPatient(){
// console.log("hah",this.DataEvents) 

 const last12MonthsEvents = this.DataEvents.filter((event: any) => {
  const eventDate = new Date(event.date);
  const currentDate = new Date();
  const last12Months = new Date(currentDate.setMonth(currentDate.getMonth() - 12));
  return eventDate >= last12Months;
});
const uniqueMonths = [...new Set(last12MonthsEvents.map((event:any) => event.date.slice(0, 7)))];

// Initialize datasets array

const monthlyPatientCount =this.DataEvents.reduce((result:any, event:any) => {
  const monthAndYear = this.extractMonthAndYear(event.date);
  result[monthAndYear] = (result[monthAndYear] || 0) + 1;
  return result;
}, {});
// Extract the last 12 months
const last12Months = Object.keys(monthlyPatientCount).slice(-12);
last12Months.forEach((monthAndYear) => {
 // console.log(`Month: ${monthAndYear}, Total Patients: ${monthlyPatientCount[monthAndYear]}`);
});
  interface ChartData {
    labels: any;
    datasets: {
      label: string;
      data: any;
     
     
    }[];
  }
  const chart = new Chart("patientChart", {
    type: 'bar',
    data: {
      labels: last12Months,
      datasets: [{
        label: 'Number of Patients',
        data: last12Months.map(month => monthlyPatientCount[month] || 0),
        backgroundColor: 'rgba(154, 61, 138, 0.647)',
        borderColor: 'rgba(154, 61, 138, 0.647)',
        borderWidth: 0,
        barPercentage: 0.4,
      }]
    },
    options: {
      
      scales: {
        x: { grid: {
          display: false // Masquer les lignes de la grille de l'axe x
        },
        
         
        },
        y: {
         
          beginAtZero: true,
          
        }
      },
      
    }
  });
  
}
DoughnutGraph(){
  const consultationDates = this.DataEvents.map((entry:any) => entry.date_consultation);
  const data=this.DataEvents
// Obtention de la date actuelle au format 'YYYY-MM-DD'
const today = new Date().toISOString().split('T')[0];

// Filtrage des consultations ayant lieu aujourd'hui
const todayConsultations = data.filter((entry:any) => entry.date === today);

 
  
  const chart = new Chart("graph", {
    type: 'doughnut',
    data: {
      labels: [
        'Consultations aujourd\'hui', 'Consultation fini'
      ],
      datasets: [{
      
        data:[todayConsultations.length, this.DataEvents.length - todayConsultations.length],
        backgroundColor: [
          'rgba(64, 202, 198, 0.99)',
      'rgba(62, 164, 161, 0.653)',
      
    ],
    hoverOffset: 4
      }]
    },
    options: {
      
      
      
    }
  });
}
}