import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_Services/auth.service';
import { UserService } from 'src/app/_Services/user.service';
import { User } from 'src/app/_models/user';
import { Doctor } from 'src/app/_models/doctor';
import { DoctorService } from 'src/app/_Services/doctor.service';
import { HttpClient } from '@angular/common/http';
import { Events } from 'src/app/_models/events';

@Component({
  selector: 'app-tabset-patient',
  templateUrl: './tabset-patient.component.html',
  styleUrls: ['./tabset-patient.component.css']
})
export class TabsetPatientComponent implements OnInit{
  specialites: string[] = ["Médecine Familiale", "Soins Urgents", "Gynécologie", "Pédiatrie" , "Soins Dentaires" , "Physiothérapie"]
  selectedSpecialite: string = '';  // Variable pour stocker la spécialité sélectionnée
  title = 'Bytes';
  doctorsList: any[] = [];  // Variable pour stocker la liste des docteurs filtrés
  activeTab:string = 'Personal Details';
  UserData=new User()
  ID:any
  appointmentForm!  : FormGroup;
   onTabClick(tab: string){
     this.activeTab = tab;
   }

   selectOption(option: string) {
    // console.log('Option sélectionnée sanguin groupe : ', option);
    this.appointmentForm.get('speciality')?.setValue(option)

    this.doctorService.getDoctorsBySpecialite(option).subscribe(
      (doctors: any[]) => {
        this.doctorsList = doctors.map(doctor => ({ nom: doctor.first_name, prenom: doctor.last_name }));

        
      // Afficher la liste des docteurs dans la console
      console.log('Liste des docteurs:', this.doctorsList);
      },
      (error : any) => {
        console.error('Error fetching doctors by speciality', error);
      }
    );
  }

  selectDoctor(doctor: any) {
    // Votre logique de sélection du médecin ici
    console.log('Selected doctor:', doctor);
  }

  
   constructor(private formBuilder: FormBuilder, private doctorService: DoctorService , private AuthService:AuthService ,private UserSevice:UserService ,  private http: HttpClient) {
    this.activeTab = 'Personal Details';

    
        this.ID=this.AuthService.getIDUser()
    //console.log("Admin Id ", this.ID);
    this.UserSevice.getOneUser( this.ID).subscribe(
     (rep:any)=>{
       this.UserData=rep
      // console.log("admindaata",this.UserData);
     }
    )  
    
  }

  ngOnInit(){
    this.appointmentForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      speciality: ['', Validators.required],
      doctor: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      const formValues = this.appointmentForm.value;
      const selectedSpeciality = formValues.speciality;
      const selectedDoctor = formValues.doctor;
      console.log("testestest",this.appointmentForm.value);
     
      
    }
  }
  
}
