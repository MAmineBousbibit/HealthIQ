import { Component } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';
import { DoctorService } from 'src/app/_Services/doctor.service';
import { UserService } from 'src/app/_Services/user.service';
import { Doctor } from 'src/app/_models/doctor';
import { Ordonnance } from 'src/app/_models/ordonnance';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.css']
})
export class OrdonnanceComponent {
  selectedOption: any;
  Doctor = new Doctor(); 
  Patients:any
  UserID:any
  Id="" /******************* */
  //**6599449e3c0530726e1d654b */
  constructor(private ServiceDoc:DoctorService, private AuthServices:AuthService ,private _userService:UserService){
    this.getPatient()
    this.Id=AuthServices.getIDUser()
 
    this.ServiceDoc.getOneDoctor(this.Id).subscribe(
      (data:any)=>{
        console.log("user-auth :", data);
        this.Doctor=data
      
      }
    )
  }

  Ordonnance=new Ordonnance();
  PDFform(){}
  getAllPatient(){

  }
  selectOption(option: any) {
    this.selectedOption = option;
    this.Ordonnance.ID_patient=option.id
    this.Ordonnance.Nom_patient=option.lastName

    this.Ordonnance.Prenom_patient=option.firstName


  }
  SendOrdo(){
   // console.log(this.Ordonnance);
   this.Ordonnance.ID_Doc=this.Doctor.id
   //this.Ordonnance.ID_Doc.Prenom_Doc=this.Doctor.first_name
   //this.Ordonnance.ID_Doc.nom_Doc=this.Doctor.last_name

     console.log("Ordoi",this.Ordonnance);

    this.ServiceDoc.AjouterOrdonnance(this.Ordonnance).subscribe(
      (response) => {
        //console.log("data",response)
        alert("L'ordonnance a été envoyer à votre patient avec succès!");
  
      },
      (error) => {
        console.log(error);
        alert("Èchec de l'envoie resaisie votre Ordonnace !");
      

      }
    )
    
  }

  getPatient(){
    this._userService.findAll().subscribe((users)=>{
      this.Patients=users;
      console.log("users",this.Patients)
    })
  }

}