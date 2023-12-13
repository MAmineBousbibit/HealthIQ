import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-cust',
  templateUrl: './gestion-cust.component.html',
  styleUrls: ['./gestion-cust.component.css']
})
export class GestionCustComponent {
  activeDiv: string = '';

  setActiveDiv(Div: string, event:Event){
    event.preventDefault();
    this.activeDiv = Div
  }
}
