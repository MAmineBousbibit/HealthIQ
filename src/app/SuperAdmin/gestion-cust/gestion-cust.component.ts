import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/_Services/doctor.service';
import {  Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/_Services/user.service';
import * as bcrypt from 'bcryptjs';
import { ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { UtilisateurService } from 'src/app/_Services/utilisateur.service';

@Component({
  selector: 'app-gestion-cust',
  templateUrl: './gestion-cust.component.html',
  styleUrls: ['./gestion-cust.component.css']
})
export class GestionCustComponent implements OnInit {
  utilisateurs:any =[];
  NouveauUtilisateurForm!: FormGroup;
  @ViewChild('exampleModal') modal: any;
 
  constructor(private router:Router, private utilisateurService: UtilisateurService ,
    private user:UserService,private formulaire: FormBuilder,){ }
    ngOnInit(){
      this.NouveauUtilisateurForm = this.formulaire.group({
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        age: ['', [Validators.required]],
        image: ['', [Validators.required]],
        naissance: ['', [Validators.required]],
        adresse: ['', [Validators.required]]
      })
      this.getAllUtilisateur();
    }
    getAllUtilisateur(){
      this.user.getAllUtilisateur().subscribe((res)=>{
        console.log(res);
        this.utilisateurs=res;
      });
    }
    deleteUtilisateur(id: string) {
      const confirmDelete = confirm('Are you sure you want to delete this Doctor?');
      if (confirmDelete ) {
        this.utilisateurService.deleteUtilisateur(id).subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (error) => {
            console.log(error.ok);
            if(error.status == 200){
              this.getAllUtilisateur();
            }
          }
        })
      }
    }
    addUtilisateur(){
      const firstName = this.NouveauUtilisateurForm.get('first_name');
      const lastName = this.NouveauUtilisateurForm.get('last_name');
      const emailForm = this.NouveauUtilisateurForm.get('email');
      const passwordForm = this.NouveauUtilisateurForm.get('password');
      const naissanceForm = this.NouveauUtilisateurForm.get('naissance');
      if(firstName?.invalid || lastName?.invalid || 
        emailForm?.invalid || passwordForm?.invalid ||  naissanceForm?.invalid){
        console.log('Formulaire invalid', this.NouveauUtilisateurForm);
        alert('Veuillez remplir tous les champs requis.');
    } else {
      const plainPassword = this.NouveauUtilisateurForm.value.password;
      const hashedPassword = bcrypt.hashSync(plainPassword, 10);
      const userData = {
        ...this.NouveauUtilisateurForm.value,
        password: hashedPassword
      };
      console.log(userData);
      this.utilisateurService.addUtilisateur(userData).subscribe((res)=>{
        console.log(res);
        this.getAllUtilisateur();
      });
       }
      }
    
    toggleEditing(utilisateur: any) {
      utilisateur.editing = !utilisateur.editing;
      if (utilisateur.editing) {
        utilisateur.updatedFirstName = utilisateur.first_name;
        utilisateur.updatedLastName = utilisateur.last_name;
        utilisateur.updatedEmail = utilisateur.email;
        utilisateur.updatedPassword = utilisateur.password;
        utilisateur.updatedAge = utilisateur.age;
        utilisateur.updatedImage = utilisateur.image;
        utilisateur.updatedNaissance = utilisateur.naissance;
        utilisateur.updatedAdresse = utilisateur.adresse;
      } else { 
        this.utilisateurService.updateUtilisateur(utilisateur);
      }
    }
    updateUtilisateur(utilisateur:any){
      const { updatedFirstName, updatedLastName, updatedEmail, updatedPassword,
        updatedAge,updatedImage, updatedNaissance, updatedAdresse } = utilisateur;
      const updatedData = {
      first_name: updatedFirstName,
      last_name: updatedLastName,
      email: updatedEmail,
      password: updatedPassword,
      age: updatedAge,
      image: updatedImage,
      naissance: updatedNaissance,
      adresse: updatedAdresse
    }
    this.utilisateurService.updateUtilisateur(utilisateur.id, updatedData)
      .subscribe((response) => {
        console.log(response);
        utilisateur.editing = false;
        this.getAllUtilisateur();
      });
    }
    closeModal(){
      this.modal.modal('hide');
    }
    goBack(): void {
      this.router.navigate(['/admin']);
    }
    
  

}
