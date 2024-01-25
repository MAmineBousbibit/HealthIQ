import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_Services/auth.service';
import { UserService } from 'src/app/_Services/user.service';
import { User } from 'src/app/_models/user';
import { Doctor } from 'src/app/_models/doctor';
import { DoctorService } from 'src/app/_Services/doctor.service';
import { HttpClient } from '@angular/common/http';
import { Events } from 'src/app/_models/events';
import { FlaskAnalyseService } from 'src/app/_Services/flask-analyse.service';



@Component({
  selector: 'app-tabset-patient',
  templateUrl: './tabset-patient.component.html',
  styleUrls: ['./tabset-patient.component.css']
})

export class TabsetPatientComponent implements OnInit{


  my_Event:any
  specialites: string[] = ["Médecine Familiale", "Soins Urgents", "Gynécologie", "Orthophoniste" , "Soins Dentaires" , "Physiothérapie"]
  selectedSpecialite: string = '';  // Variable pour stocker la spécialité sélectionnée
  title = 'Bytes';
  doctorsList: any[] = [];  // Variable pour stocker la liste des docteurs filtrés
  activeTab:string = 'Personal Details';
  UserData=new User()
  ID:any
  appointmentForm!:FormGroup;
  User=new User()
  Event=new Events()
  Id_Doc:any
 ListDoc:any
 groupesSanguins: String[] = ["A", "B", "AB", "O"]
 Maladieoption: String[] = ["Cardiovasculaires", "Le cancer", "Les maladies neurologiques", "Les maladies infectieuses ", "Le diabète", "Gastro-intestinales","Autre"]
 alergieOption:String[] =["Alimentaires","Respiratoires","Cutanées","Médicamenteuses","Autre"]

   onTabClick(tab: string){
     this.activeTab = tab;
     this.ngOnInit()
   }

   selectOption(option: string) {
    // console.log('Option sélectionnée sanguin groupe : ', option);
    this.appointmentForm.get('speciality')?.setValue(option)

    this.doctorService.getDoctorsBySpecialite(option).subscribe(
      (doctors: any[]) => {
        this.doctorsList = doctors.map(doctor => ({ id: doctor.id,nom: doctor.first_name, prenom: doctor.last_name }));

        
      // Afficher la liste des docteurs dans la console
    //  console.log('Liste des docteurs:', this.doctorsList);
      },
      (error : any) => {
       // console.error('Error fetching doctors by speciality', error);
      }
    );
  }
  SElectOption(option: String) {
    //console.log('Option sélectionnée sanguin groupe : ', option);
    this.User.group_sang=option

  }
  getDoctorNameById(doctorId: any):any {
 
    const doctor = this.ListDoc.find((d:any) => d.id == doctorId);
    
    
    //console.log("");
    
    return doctor ? `${doctor.first_name} ${doctor.last_name}` : 'Unknown Doctor';
  }
  selectDoctor(doctor: any) {
    // Votre logique de sélection du médecin ici
   // console.log('Selected doctor:', doctor);
    this.Event.ID_doc=doctor.id;
    this.Id_Doc=doctor.id

  }

  
   constructor(private formBuilder: FormBuilder,private FlaskService:FlaskAnalyseService, private doctorService: DoctorService , private AuthService:AuthService ,private UserSevice:UserService ,  private http: HttpClient) {
    this.activeTab = 'Personal Details';

    
        this.ID=this.AuthService.getIDUser()
    //console.log("Admin Id ", this.ID);
    this.UserSevice.getOneUser( this.ID).subscribe(
     (rep:any)=>{
       this.UserData=rep
       this.User=rep
      // console.log("admindaata",this.UserData);
     }
    )  
    
  }
  ngOnInit() {
    this.getEvent()
    this.User = this.UserData;
    this.doctorService.getAllDoctors().subscribe((res:any)=>{
      this.ListDoc=res
     })
    this.appointmentForm = this.formBuilder.group({
     
      title:[''],
   
      email: [''],
      phone: [''],
      date: ['', Validators.required],
      time: ['', Validators.required],
      speciality: ['', Validators.required],
      doctor: ['', Validators.required],
      status: [''],
      description: [''],
    } ); // Use the AppointmentForm interface here
  }

  onSubmit() {
   
   // this.Event.Id_patient.id=this.ID
   this.Event.Id_patient=new User()
   this.Event.Id_patient.role="ROLE_USER"
   
    this.Event.Id_patient.id=this.UserData.firstName
    this.Event.Id_patient.lastName=this.UserData.lastName
    this.Event.Id_patient.email=this.UserData.email
    this.Event.Id_patient.adresse=this.UserData.adresse
    this.Event.Id_patient.phoneNumber=this.UserData.phoneNumber
    this.Event.Id_patient.dateNaissance=this.UserData.dateNaissance
    this.Event.Id_patient.group_sang=this.UserData.group_sang
    this.Event.ID_doc=this.Id_Doc;
    this.Event.date=this.appointmentForm.get('date')?.value;
    this.Event.description=this.appointmentForm.get('description')?.value;
    this.Event.hour=this.appointmentForm.get('time')?.value;
    this.Event.date=this.appointmentForm.get('date')?.value;
    this.Event.title=this.appointmentForm.get('title')?.value;



    this.Event.status=this.appointmentForm.get('status')?.value;
    if(this.appointmentForm.get('status')?.value=='Urgent'){
    this.Event.color='red'

    }
    if(this.appointmentForm.get('status')?.value=='À venir'){
      this.Event.color='green'
  
      }
      else{
      this.Event.color='orange'

      }

    //console.log("event",this.Event);
    this.doctorService.AddEvent(this.Event).subscribe((rep:any)=>
    {
      //console.log("added",rep);
      alert("Rendez bien ajoutée")
      
    },
    (error) => {
      //console.log(error);
      alert("Rendez vous rejeter ! Changer la date ")
    }
    )
    

    
  }
  Ordonnance(Tab:any){
    console.log("ordonnance pdf");
    
  }
  getEvent(){
    this.FlaskService.getAllEvents().subscribe(
      (response:any) => {
      console.log("allEvents", response);
  
      const filteredEvents = response.filter((rp:any) => rp.Id_patient != undefined );
      this.my_Event=filteredEvents
   
       console.log("allEvents", this.my_Event );
      // this.updateCalendrier()
       
       
       
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
