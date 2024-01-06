import { Component } from '@angular/core';
import { Doctor } from 'src/app/_models/doctor';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  Doctor = new Doctor(); 

  formPWD:boolean=false
  informations:boolean=false
  ChangePWD(){
    this.formPWD = !this.formPWD; 
  }
  Changeinfo(){
    this.informations = !this.informations; 

  }
  editinformation(){
    console.log(this.Doctor)
  }
  editpassword(){
    console.log(this.Doctor)

  }
}
