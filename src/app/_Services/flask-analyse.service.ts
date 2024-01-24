import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlaskAnalyseService {
  requestHeader=new HttpHeaders(
    {  'Content-Type': 'application/json',}  
    
  );
  constructor(private _httpclient:HttpClient) { }
  
 private API_Flask="http://127.0.0.1:5000/"

 getEventsDoc(id_Doc:any){
  return this._httpclient.post(this.API_Flask+'getallEvents',id_Doc, { headers: this.requestHeader });
 }
 getAllUsers(){
  return this._httpclient.get(this.API_Flask+'getallusers', { headers: this.requestHeader });
 }
 getAllDoc(){
  return this._httpclient.get(this.API_Flask+'getalldoc', { headers: this.requestHeader });
 }
 getAllEvents(){
  return this._httpclient.get(this.API_Flask+'getallEvent', { headers: this.requestHeader });
 }
}
