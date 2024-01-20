import { Component } from '@angular/core';

import { DoctorService } from 'src/app/_Services/doctor.service';
import { Ordonnance } from 'src/app/_models/ordonnance';


@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.css']
})
export class OrdonnanceComponent {

  constructor(private ServiceDoc:DoctorService){}
  Ordonnance=new Ordonnance();
  PDFform(){}
  SendOrdo(){
   // console.log(this.Ordonnance);
    this.ServiceDoc.AjouterOrdonnance(this.Ordonnance).subscribe(
      (response) => {
        //console.log("data",response)
        alert("L'ordonnance a été envoyer à votre patient avec succès!");
        
      },
      (error) => {
        //console.log(error);
        alert("Èchec de l'envoie resaisie votre Ordonnace !");
      }
    )
    
  }

}
