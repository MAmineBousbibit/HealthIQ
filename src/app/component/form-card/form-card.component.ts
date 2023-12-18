import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/_Services/auth.service';
import { JwtService } from 'src/app/_Services/jwt.service';
import { UserService } from 'src/app/_Services/user.service';
import { User } from 'src/app/_models/user';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { formatCurrency } from '@angular/common';



function PasswordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const password = c.get('password');
  const confPassword = c.get('ConfirmPassword');
  if (password?.pristine || confPassword?.pristine) {
    return null; // Si les deux champs sont "pristine", pas d'erreur
  }

  if (password?.value === confPassword?.value) {
    return null; // Si les valeurs correspondent, pas d'erreur
  }
  console.log("haha")
  return { 'match': true };
}
@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {

  formLogin!: FormGroup;
  //SignupForm!:FormGroup;
  SignupGroup!: FormGroup;
  constructor(private Services: UserService, private AuthService: AuthService, private router: Router, private formBuilder: FormBuilder) {

  }

  SelectedUser: User = new User();
  showLoginForm: Boolean = true
  showSignUpForm: Boolean = false
  ValueProgress: number = 25
  ValueStep: number = 1
  groupesSanguins: String[] = ["A", "B", "AB", "O"]
  Maladieoption: String[] = ["Cardiovasculaires", "Le cancer", "Les maladies neurologiques", "Les maladies infectieuses ", "Le diabète", "Gastro-intestinales","Autre"]
  alergieOption:String[] =["Alimentaires","Respiratoires","Cutanées","Médicamenteuses","Autre"]
  CheckedSport: boolean = false
  CheckedMaladie: boolean = false
  CheckedAlergie: boolean = false
  CheckedMedicament: boolean = false
  Chirurgie: boolean = false
  EmailForgot: User = new User();
  errorMessage: string = '';
  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
    this.SignupGroup = this.formBuilder.group({
      SignupForm: this.formBuilder.group({
        nom: ['', [Validators.required]],
        prenom: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        PasswordGroup: this.formBuilder.group({
          password: ['', [Validators.required, Validators.minLength(8)]],
          ConfirmPassword: ['', [Validators.required]]
        }, { validators: PasswordMatcher }),
      }),
      secondForm: this.formBuilder.group({
        ville: [''],
        adresse: [''],
        sex: [''],
        phoneNumber: [''],
        dateNaissance: [''],
      }),
      thirdForm: this.formBuilder.group({
        poid: [''],
        taille: [''],
        sportActif: [''],
        typeSport: [''],
        nb_foisSport: [''],
        group_sang: [''],


      }),
      fourthForm: this.formBuilder.group({
        maladieCheck: [''],
        typeMaladie: [''],
        alergieCheck: [''],
        typeAlergie: [''],
        MedicamentCheck:[''],
        NomMedicament:[''],
        Chirurgie:['']

      })

    });







  }
  ShowSignUpform() {
    this.showSignUpForm = true
    this.showLoginForm = false
  }
  ShowLoginform() {
    this.showLoginForm = true
    this.showSignUpForm = false
  }
  nextStep() {
    this.ValueProgress += 25
    this.ValueStep += 1

  }
  prevStep() {
    this.ValueProgress = this.ValueProgress - 25
    this.ValueStep = this.ValueStep - 1
  }
  selectOption(option: String) {
    //console.log('Option sélectionnée sanguin groupe : ', option);
    this.SignupGroup.get('thirdForm.group_sang')?.setValue(option)

  }
  MaladieOption(option: String) {
   // console.log('Option sélectionnée maladie : ', option);
    this.SignupGroup.get('fourthForm.typeMaladie')?.setValue(option)

  }
  AlergieOption(option: String) {
    //console.log('Option sélectionnée alergie : ', option);
    this.SignupGroup.get('fourthForm.typeAlergie')?.setValue(option)

  }

  checkedSport() {
    this.CheckedSport = !this.CheckedSport;

  }
  checkedMaladie() {
    this.CheckedMaladie = !this.CheckedMaladie

  }
  checkedAlergie() {
    this.CheckedAlergie = !this.CheckedAlergie
  }
  checkedMedicament() {
    this.CheckedMedicament = !this.CheckedMedicament
  }
  Chirurigie() {
    this.Chirurgie = !this.Chirurgie
  }
  toggleSportSelection(event: any) {
    this.CheckedSport = event.target.checked;

    const sportActifControl = this.SignupGroup.get('thirdForm.sportActif');

    if (sportActifControl) {
      if (this.CheckedSport) {
        sportActifControl.setValue(true);
      } else {
        sportActifControl.setValue(false);
      }
    }
  }
  toggleMaladieSelection(event: any) {
    this.CheckedMaladie = event.target.checked;
    const MaladieControl = this.SignupGroup.get('fourthForm.maladieCheck');

    if (MaladieControl) {
      if (this.CheckedMaladie) {
        MaladieControl.setValue(true);
      } else {
        MaladieControl.setValue(false);
      }
    }
  }
  toggleAlergieSelection(event: any) {
    this.CheckedAlergie = event.target.checked;
    const CheckedAlergie = this.SignupGroup.get('fourthForm.alergieCheck');

    if (CheckedAlergie) {
      if (this.CheckedAlergie) {
        CheckedAlergie.setValue(true);
      } else {
        CheckedAlergie.setValue(false);
      }
    }
  }
  toggleChururgieSelection(event: any){
    this.Chirurgie = event.target.checked;
    const Chirurgie = this.SignupGroup.get('fourthForm.Chirurgie');

    if (Chirurgie) {
      if (this.Chirurgie) {
        Chirurgie.setValue(true);
      } else {
        Chirurgie.setValue(false);
      }
    }
 }
 toggleMedicamentSelection(event: any){
  this.CheckedMedicament = event.target.checked;
  const CheckedMedicament = this.SignupGroup.get('fourthForm.MedicamentCheck');

  if (CheckedMedicament) {
    if (this.CheckedAlergie) {
      CheckedMedicament.setValue(true);
    } else {
      CheckedMedicament.setValue(false);
    }
  }
}
  Login() {
    this.SelectedUser = { ...this.formLogin.value }// as User
    console.log(this.SelectedUser)
    this.Services.Login(this.SelectedUser).subscribe(
      (token: any) => {
        // recuperation de Token JWT



        this.AuthService.loadProfile(token)

      },
      (error) => {
        console.log(error);
      }
    )
  }
  SignUp() {

    this.SelectedUser = this.convertToUser(this.SignupGroup.value)
    console.log(this.SelectedUser)
    this.Services.Register(this.SelectedUser).subscribe(
      (token: any) => {
        this.AuthService.loadProfile(token)
      },
      (error) => {
        console.log(error.error);
        this.errorMessage = error.error
      }
    )


  }
  Forgotpwd() {
    console.log(this.EmailForgot);


  }

  //****Fonction qui convert les donnees de formControl a modal USER ***///
  convertToUser(formData: any): User {
    const user: User = new User();
    user.Nom = formData.SignupForm.nom;
    user.prenom = formData.SignupForm.prenom;
    user.email = formData.SignupForm.email;
    user.password = formData.SignupForm.PasswordGroup.password;
    user.dateNaissance = formData.secondForm.dateNaissance
    user.phoneNumber = formData.secondForm.phoneNumber;
    user.adresse = formData.secondForm.adresse;
    user.ville = formData.secondForm.ville;
    user.sex = formData.secondForm.sex;
    user.poid = formData.thirdForm.poid;
    user.taille = formData.thirdForm.taille;
    user.sportActif = formData.thirdForm.sportActif
    user.nb_foisSport = formData.thirdForm.nb_foisSport
    user.typeSport = formData.thirdForm.typeSport
    user.group_sang = formData.thirdForm.group_sang
    user.maladieCheck = formData.fourthForm.maladieCheck
    user.typeMaladie=formData.fourthForm.typeMaladie
    user.typeAlergie=formData.fourthForm.typeAlergie
    user.alergieCheck=formData.fourthForm.alergieCheck
    user.NomMedicament=formData.fourthForm.NomMedicament
    user.MedicamentCheck=formData.fourthForm.MedicamentCheck
    user.Chirurgie=formData.fourthForm.Chirurgie
    return user;
  }
}
