import { Component, NgModule, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import {  Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-gestion-doc',
  templateUrl: './gestion-doc.component.html',
  styleUrls: ['./gestion-doc.component.css']
})
export class GestionDocComponent implements OnInit  {
  NouveauDocteurForm! : FormGroup;
  doctors: any = [];


  constructor(private doctorService: DoctorService,
    private formulaire: FormBuilder){}

    ngOnInit(): void {
      this.NouveauDocteurForm = this.formulaire.group({
        first_name: [null, [Validators.required]],
        last_name: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]]
      })
      this.getAllDoctors();
    }
    getAllDoctors(){
      this.doctorService.getAllDoctors().subscribe((res)=>{
        console.log(res);
        this.doctors = res;
      });
    }
    deleteDoctor(id: string){
      const confirmDelete = confirm('Etes-vous sure de vouloir supprimer le Docteur ?');
      if(confirmDelete){
        this.doctorService.deleteDoctor(id).subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (error) =>{
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
    toggleEditing(doctor:any){
      doctor.editing = !doctor.editing;
      if(doctor.editing){
        doctor.updatedFirstName = doctor.first_name;
        doctor.updatedLastName = doctor.last_name;
        doctor.updatedEmail = doctor.email;
      }else{
        this.doctorService.updateDoctor(doctor);
      }
    }
    updateDoctor(doctor:any){
      const{updatedFirstName, updatedLastName, updatedEmail} = doctor;
      const updatedData = {
        first_name : updatedFirstName,
        last_name: updatedLastName,
        email: updatedEmail,
      }
      this.doctorService.updateDoctor(doctor.id, updatedData).subscribe((response)=>{
        console.log(response);
        doctor.editing = false;
        this.getAllDoctors;
      });
    }
}

