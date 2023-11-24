import { Component } from '@angular/core';

declare var WOW: any;  
@Component({
  selector: 'app-service-medical',
  templateUrl: './service-medical.component.html',
  styleUrls: ['./service-medical.component.css']
})
export class ServiceMedicalComponent {
  
  constructor() { }
  selectedTab: string = 'tab1';
  ngOnInit(): void {
    // Initialisez Wow.js dans ngOnInit ou ngAfterViewInit
    new WOW().init();
  }
  
  activateTab(tabId: string) {
    this.selectedTab = tabId;
    console.log(this.selectedTab);
    
}

}
