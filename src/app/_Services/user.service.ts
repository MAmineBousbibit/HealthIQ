import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import {User} from "../_models/user";


@Injectable({
  providedIn: 'root'
})
export class UserService {
 /***URL de RestAPI de Login USER  */

 private _Path_SERVER="http://localhost:8080/api/v1/auth/";

  private _apiUrl = 'http://localhost:8080/api/v1/user';

  private _getAll_api = 'http://localhost:8080/doctor/list';

  private _requestHeader=new HttpHeaders(
    { "No-Auth":"True"}
  );

  private _isAuthenticated:boolean =false;
  private _role:any;
  private _email:any;
  private _userID:any;
  private _token!:string;
  constructor(private _httpclient:HttpClient) { }

/**Fonction de Register  ******/
  public Register(USER:any){
    return this._httpclient.post(this._Path_SERVER+'register',USER,{
      headers:this._requestHeader
    });
  }
  getAllDoctors():Observable<any>{
    return this._httpclient.get(this._getAll_api);
  }
  /**Fonction de Login  ******/
  public Login(USER:any){
    return this._httpclient.post(this._Path_SERVER+'authenticate',USER,{
      headers:this._requestHeader
    });
  }

  /**Fonction pour recuperer tout les patient**/

  public findAll():Observable<Array<User>>{
    return this._httpclient.get<Array<User>>(`${this._apiUrl}/`);
  }


  get Path_SERVER(): string {
    return this._Path_SERVER;
  }

  set Path_SERVER(value: string) {
    this._Path_SERVER = value;
  }

  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get getAll_api(): string {
    return this._getAll_api;
  }

  set getAll_api(value: string) {
    this._getAll_api = value;
  }

  get requestHeader(): HttpHeaders {
    return this._requestHeader;
  }

  set requestHeader(value: HttpHeaders) {
    this._requestHeader = value;
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }

  get role(): any {
    return this._role;
  }

  set role(value: any) {
    this._role = value;
  }

  get email(): any {
    return this._email;
  }

  set email(value: any) {
    this._email = value;
  }

  get userID(): any {
    return this._userID;
  }

  set userID(value: any) {
    this._userID = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get httpclient(): HttpClient {
    return this._httpclient;
  }

  set httpclient(value: HttpClient) {
    this._httpclient = value;
  }
}
