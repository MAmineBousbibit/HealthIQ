import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent {
SelectedUser: User=new User();
showLoginForm:Boolean=false
showSignUpForm:Boolean=false
ValueProgress:number=25
ValueStep:number=1
groupesSanguins:String[]=["Groupe Sanguin","A","B","AB","O"]
CheckedSport:boolean=false
CheckedMaladie:boolean=false
CheckedAlergie:boolean=false
CheckedMedicament:boolean=false
Chirurgie:boolean=false
  ngOnInit() {
    console.log(this.SelectedUser);
    //this.ShowLoginform();
    this.ShowSignUpform()
  }
ShowSignUpform(){
      this.showSignUpForm=true
      this.showLoginForm=false
}
ShowLoginform(){
      this.showLoginForm=true
      this.showSignUpForm=false
}
nextStep(){
  this.ValueProgress+=25
  console.log("ValueProgress",this.ValueProgress);
  this.ValueStep+=1
  
}
prevStep(){
  this.ValueProgress=this.ValueProgress-25
  this.ValueStep =this.ValueStep-1
}
selectOption(option:String){
  console.log('Option sélectionnée sanguin groupe : ', option);
}
checkedSport(){
  this.CheckedSport = !this.CheckedSport;  
  
}
checkedMaladie(){
  this.CheckedMaladie=!this.CheckedMaladie
}
checkedAlergie(){
  this.CheckedAlergie=!this.CheckedAlergie
}
checkedMedicament(){
  this.CheckedMedicament=!this.CheckedMedicament
}
Chirurigie(){
  this.Chirurgie=!this.Chirurgie
}
}
