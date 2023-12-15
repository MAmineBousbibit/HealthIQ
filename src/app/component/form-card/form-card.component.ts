import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/_Services/auth.service';
import { JwtService } from 'src/app/_Services/jwt.service';
import { UserService } from 'src/app/_Services/user.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {
constructor(private Services:UserService,private AuthService:AuthService,private router:Router){}
SelectedUser: User=new User();
showLoginForm:Boolean=true
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
toggleSportSelection(event: any) {
  this.CheckedSport = event.target.checked;
  if (this.CheckedSport) {
     this.SelectedUser.sportActif=true
  } else {
    this.SelectedUser.sportActif=false
  }
}
Login(){

 console.log(this.SelectedUser)
 this.Services.Login(this.SelectedUser).subscribe(
  (token:any)=>{
   // recuperation de Token JWT
   
  
   
   this.AuthService.loadProfile(token)

  },
  (error)=>{
    console.log(error);
  }
 )
}
SignUp(){
  //this.SelectedUser=new User();
  console.log(this.SelectedUser)
  this.Services.Register(this.SelectedUser).subscribe(
    (token:any)=>{
      this.AuthService.loadProfile(token)
    },
    (error)=>{
      console.log(error);
    }
   )


}
}
