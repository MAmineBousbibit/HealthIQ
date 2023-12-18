import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/_Services/auth.service';
import { JwtService } from 'src/app/_Services/jwt.service';
import { UserService } from 'src/app/_Services/user.service';
import { User } from 'src/app/_models/user';
import { FormBuilder,FormControl,FormGroup, Validators,AbstractControl } from '@angular/forms';



function  PasswordMatcher(c:AbstractControl):{[key:string]:boolean }| null{
const password=c.get('password');
const confPassword=c.get('ConfirmPassword');

/*if (password?.pristine=== confPassword?.pristine){
  return null;

}*/

if (password?.value=== confPassword?.value){
  return null;

}
return {'match':true}
}
@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {

  formLogin!: FormGroup;
  SignupForm!:FormGroup;
constructor(private Services:UserService,private AuthService:AuthService,private router:Router,private formBuilder: FormBuilder){
 
}

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
EmailForgot:User=new User();
errorMessage: string = ''; 
  ngOnInit() {
    this.formLogin=this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['',Validators.required]
    })
    this.SignupForm=this.formBuilder.group({
      nom:['',[Validators.required]],
      prenom:['',[Validators.required]],
      email:['', [Validators.required,Validators.email]],
      PasswordGroup:this.formBuilder.group({
        password:['',[Validators.required,Validators.minLength(8)]],
        ConfirmPassword:['',[Validators.required]]
      },{validators:PasswordMatcher})
      

    })
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
 this.SelectedUser = { ...this.formLogin.value } as User
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
 
  console.log(this.SelectedUser)
  this.Services.Register(this.SelectedUser).subscribe(
    (token:any)=>{
      this.AuthService.loadProfile(token)
    },
    (error)=>{
      console.log(error.error);
      this.errorMessage=error.error
    }
   )


}
Forgotpwd(){
  console.log(this.EmailForgot);
  
  
}
}
