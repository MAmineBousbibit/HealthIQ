import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-doc',
  templateUrl: './gestion-doc.component.html',
  styleUrls: ['./gestion-doc.component.css']
})
export class GestionDocComponent {
  activeDiv: string = '';

  setActiveDiv(Div: string, event: Event){
    event.preventDefault();
    this.activeDiv = Div;
  }

}
