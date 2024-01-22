import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-tabset-patient',
  templateUrl: './tabset-patient.component.html',
  styleUrls: ['./tabset-patient.component.css']
})
export class TabsetPatientComponent {
  specialites: String[] = ["Speciality 1", "Speciality 2", "Speciality 3", "Speciality 4"]
  doctors: String[] = ["doctor 1", "doctor 2", "doctor 3", "doctor 4"]
  title = 'Bytes';
  activeTab:string = 'Personal Details';
  appointmentForm: FormGroup;
   onTabClick(tab: string){
     this.activeTab = tab;
   }

   selectOption(option: String) {
    //console.log('Option sélectionnée sanguin groupe : ', option);
    this.appointmentForm.get('thirdForm.group_sang')?.setValue(option)

  }
  
   constructor(private formBuilder: FormBuilder) {
    this.activeTab = 'Personal Details';
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
      // Handle form submission here
      console.log(formValues);
      console.log("Selected Speciality: ", selectedSpeciality);
      console.log("Selected Doctor: ", selectedDoctor);
    }
  }
  
}
