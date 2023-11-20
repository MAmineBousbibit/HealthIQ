import { Component } from '@angular/core';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent {
//Partie de l'incrementation de valeur statistique de hopital ****************************/
  numberPatients:number=0
  numberDepartements:number=0
  numberDocters:number=0
  numberServant:number=0

  Patientcounstop:any =setInterval(()=>{
    this.numberPatients++;
    if(this.numberPatients==18 ){
      clearInterval(this.Patientcounstop);
    }
  },20)

  Departementscounstop:any =setInterval(()=>{
  this.numberDepartements++;
    if(this.numberDepartements==38 ){
      clearInterval(this.Departementscounstop);
    }
  },10)

  Docterscounstop:any =setInterval(()=>{
    this.numberDocters++;
      if(this.numberDocters==287 ){
        clearInterval(this. Docterscounstop);
      }
    },5)
    
  Servantcounstop:any =setInterval(()=>{
    this.numberServant++;
      if(this.numberServant==1438 ){
        clearInterval(this.Servantcounstop);
      }
    },1)

  //****************************** */
}
  

