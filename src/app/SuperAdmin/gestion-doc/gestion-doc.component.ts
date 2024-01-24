import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/_Services/doctor.service';
import {  Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/_Services/user.service';
import * as bcrypt from 'bcryptjs';

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
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        debutTime: ['', [Validators.required]],
        finTime: ['', [Validators.required]],
        password: ['', [Validators.required]],
        age: ['', [Validators.required]],
        prixConsultation: ['', [Validators.required]],
        Operation: ['', [Validators.required]],
        image: ['', [Validators.required]],
        specialite: ['', [Validators.required]],
        naissance: ['', [Validators.required]],
        adresse: ['', [Validators.required]]
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
      const firstName = this.NouveauDocteurForm.get('first_name');
      const lastName = this.NouveauDocteurForm.get('last_name');
      const emailForm = this.NouveauDocteurForm.get('email');
      const passwordForm = this.NouveauDocteurForm.get('password');
      const debutTimeForm = this.NouveauDocteurForm.get('debutTime');
      const finTimeFrom = this.NouveauDocteurForm.get('finTime');
      const prixConsultationForm = this.NouveauDocteurForm.get('prixConsultation');
      const naissanceForm = this.NouveauDocteurForm.get('naissance');
      if(firstName?.invalid || lastName?.invalid || 
        emailForm?.invalid || passwordForm?.invalid || 
        debutTimeForm?.invalid || finTimeFrom?.invalid ||
        prixConsultationForm?.invalid || naissanceForm?.invalid){
        console.log('Formulaire invalid', this.NouveauDocteurForm);
        alert('Veuillez remplir tous les champs requis.');
    } else {
      const plainPassword = this.NouveauDocteurForm.value.password;
      const hashedPassword = bcrypt.hashSync(plainPassword, 10);
      const doctorData = {
        ...this.NouveauDocteurForm.value,
        password: hashedPassword
      };
      console.log(doctorData);
      this.doctorService.addDoctor(doctorData).subscribe((res)=>{
        console.log(res);
        this.getAllDoctors();
      });
       }
      }
    
    toggleEditing(doctor: any) {
      doctor.editing = !doctor.editing;
      if (doctor.editing) {
        doctor.updatedFirstName = doctor.first_name;
        doctor.updatedLastName = doctor.last_name;
        doctor.updatedEmail = doctor.email;
        doctor.updatedDebutTime = doctor.debutTime;
        doctor.updatedFinTime = doctor.finTime;
        doctor.updatedPassword = doctor.password;
        doctor.updatedAge = doctor.age;
        doctor.updatedPrixConsultation = doctor.prixConsultation;
        doctor.updatedOperation = doctor.Operation;
        doctor.updatedImage = doctor.image;
        doctor.updatedSpecialite = doctor.specialite;
        doctor.updatedNaissance = doctor.naissance;
        doctor.updatedAdresse = doctor.adresse;
      } else { 
        this.doctorService.updateDoctor(doctor);
      }
    }
    updateDoctor(doctor:any){
      const { updatedFirstName, updatedLastName, updatedEmail, 
        updatedDebutTime, updatedFinTime, updatedPassword,
        updatedAge, updatedPrixConsultation, updatedOperation,
        updatedImage, updatedSpecialite, updatedNaissance, updatedAdresse } = doctor;
      const updatedData = {
      first_name: updatedFirstName,
      last_name: updatedLastName,
      email: updatedEmail,
      debutTime: updatedDebutTime,
      finTime: updatedFinTime,
      password: updatedPassword,
      age: updatedAge,
      prixConsultation: updatedPrixConsultation,
      operation: updatedOperation,
      image: updatedImage,
      specialite: updatedSpecialite,
      naissance: updatedNaissance,
      adresse: updatedAdresse
    }
    this.doctorService.updateDoctor(doctor.id, updatedData)
      .subscribe((response) => {
        console.log(response);
        doctor.editing = false;
        this.getAllDoctors();
      });
    }
  

}
