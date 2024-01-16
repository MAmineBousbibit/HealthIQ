import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/_Services/doctor.service';
import {  Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/_Services/user.service';

@Component({
  selector: 'app-gestion-doc',
  templateUrl: './gestion-doc.component.html',
  styleUrls: ['./gestion-doc.component.css']
})
export class GestionDocComponent implements OnInit {
  doctors:any =[];
  NouveauDocteurForm!: FormGroup;

 
  constructor(private router:Router, private doctorService: DoctorService ,private doc:UserService,
    private formulaire: FormBuilder){ }
    ngOnInit(){
      this.NouveauDocteurForm = this.formulaire.group({
        first_name: [null, [Validators.required]],
        last_name: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        debutTime: [null, [Validators.required]],
        finTime: [null, [Validators.required]]
      })
      this.getAllDoctors();
    }
    getAllDoctors(){
      this.doc.getAllDoctors().subscribe((res)=>{
        console.log(res);
        this.doctors=res;
        
      });
    }
    deleteDoctor(id: string) {
      const confirmDelete = confirm('Are you sure you want to delete this Doctor?');
      if (confirmDelete ) {
        this.doctorService.deleteDoctor(id).subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (error) => {
            console.log(error.ok);
            if(error.status == 200){
              this.getAllDoctors();
            }
          }
        })
      }
    }
    addDoctor(){
      console.log(this.NouveauDocteurForm.value);
      this.doctorService.addDoctor(this.NouveauDocteurForm.value).subscribe((res)=>{
        console.log(res);
        this.getAllDoctors();
      })
    }
    toggleEditing(doctor: any) {
      doctor.editing = !doctor.editing;
      if (doctor.editing) {
        doctor.updatedFirstName = doctor.first_name;
        doctor.updatedLastName = doctor.last_name;
        doctor.updatedEmail = doctor.email;
        doctor.updatedDebutTime = doctor.debutTime;
        doctor.updatedFinTime = doctor.finTime;
      } else { 
        this.doctorService.updateDoctor(doctor);
      }
    }
    updateDoctor(doctor:any){
      const { updatedFirstName, updatedLastName, updatedEmail, updatedDebutTime, updatedFinTime } = doctor;
      const updatedData = {
      first_name: updatedFirstName,
      last_name: updatedLastName,
      email: updatedEmail,
      debutTime: updatedDebutTime,
      finTime: updatedFinTime
    }
    this.doctorService.updateDoctor(doctor.id, updatedData)
      .subscribe((response) => {
        console.log(response);
        doctor.editing = false;
        this.getAllDoctors();
      });
    }
  

}
