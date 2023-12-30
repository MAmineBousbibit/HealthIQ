import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  formPWD:boolean=false
  informations:boolean=false
  ChangePWD(){
    this.formPWD = !this.formPWD; 
  }
  Changeinfo(){
    this.informations = !this.informations; 

  }
}
