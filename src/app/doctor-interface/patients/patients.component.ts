import {Component, OnInit} from '@angular/core';
import {UserService} from "../../_Services/user.service";
import {User} from "../../_models/user";
import {PdfGeneratorService} from "../../_Services/pdf.service";
import { AuthService } from 'src/app/_Services/auth.service';
import { DoctorService } from 'src/app/_Services/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { FlaskAnalyseService } from 'src/app/_Services/flask-analyse.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{

  ngOnInit() {
    this.onClickPatient();
  }


  _users:any=[];


  UserID:any
  Id:any
  DataEvents:any

  DoctorData=new Doctor()
  

  constructor(private _userService:UserService, private pdfGeneratorService: PdfGeneratorService,private AuthServices:AuthService,private DocService:DoctorService
    ,private FlaskService:FlaskAnalyseService) {
    this.Id=AuthServices.getIDUser()
 
 this.DocService.getOneDoctor(this.Id).subscribe(
   (data:any)=>{
   
     this.DoctorData=data
    
   }
 )
  }

generatePDF(user: User): void {
  this.pdfGeneratorService.generateRapportPDF(user);
}


  onClickPatient():void{

    const id=this.Id
    const requestBody = { "id_Doc": id}; 
    this.FlaskService.getEventsDoc(requestBody).subscribe(
      (response: any) => {
       //this.DataEvents=response
       this.DataEvents = response.filter((event:any) => event.ID_doc == this.Id);
     // console.log("data Event",this.DataEvents);
      
      
      },
      (error) => {
        console.log(error);
      }
    );
  }



  get userService(): UserService {
    return this._userService;
  }

  set userService(value: UserService) {
    this._userService = value;
  }
  get users(): Array<User> {
    return this._users;
  }

  set users(value: Array<User>) {
    this._users = value;
  }
}


