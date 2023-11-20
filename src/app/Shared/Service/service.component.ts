import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  activeTab: string = ''; // Variable pour stocker l'onglet actif

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
