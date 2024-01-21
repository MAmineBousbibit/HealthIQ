import { Component } from '@angular/core';
import { AuthService } from '../_Services/auth.service';

@Component({
  selector: 'app-doctor-interface',
  templateUrl: './doctor-interface.component.html',
  styleUrls: ['./doctor-interface.component.css']
})
export class DoctorInterfaceComponent {

  constructor(private AuthServices: AuthService){
   const Token=AuthServices.getIDUser()
    console.log(Token);

  }

}
