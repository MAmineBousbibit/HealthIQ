import { Component } from '@angular/core';
import { Ordonnance } from 'src/app/_models/ordonnance';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.css']
})
export class OrdonnanceComponent {
  Ordonnance=new Ordonnance();
  PDFform(){}
  SendOrdo(){
    console.log(this.Ordonnance);
    
  }
}
