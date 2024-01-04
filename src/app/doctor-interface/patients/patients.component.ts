import {Component, OnInit} from '@angular/core';
import {UserService} from "../../_Services/user.service";
import {User} from "../../_models/user";

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




  constructor(private _userService:UserService) {
  }


  onClickPatient():void{
    this._userService.findAll().subscribe((users)=>{
      this._users=users;
      console.log("users",this._users)
    })
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


