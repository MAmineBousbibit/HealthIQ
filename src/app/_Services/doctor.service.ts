import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ordonnance } from "../_models/ordonnance";
import { Event } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class DoctorService{
    private add_api = 'http://localhost:8080/doctor/add';
    private getAll_api = 'http://localhost:8080/doctor/list';
    private delete_api = 'http://localhost:8080/doctor/delete';
    private getById_api = 'http://localhost:8080/doctor/List';
    private update_api = 'http://localhost:8080/doctor/update';
    private API_GestionDoc='http://localhost:8080/doctor'
    private ApiHost='http://localhost:8080/'
    requestHeader=new HttpHeaders(
      { "No-Auth":"True"}  
    );
    constructor(private http:HttpClient) { }
getAllDoctors():Observable<any>{
    return this.http.get(this.getAll_api);
  }
  

  getOneDoctor(id:any):Observable<any>{
    return this.http.get(this.API_GestionDoc+'/List/' +id)
  }
  addDoctor(doctor:any):Observable<any>{
    return this.http.post(this.add_api,doctor);
  }
  deleteDoctor(id:string):Observable<any>{
    //console.log('test');
    const deleteUrl = `${this.delete_api}/${id}`;
    return this.http.delete<any>(deleteUrl);
  }
  updateDoctor(id?:string, doctor?:any):Observable<any>{
    const updateUrl = `${this.update_api}/${id}`;
    return this.http.put(updateUrl,doctor);
  }
  AjouterOrdonnance(Ordonnance:any){
   
    return this.http.post(this.API_GestionDoc + '/Ordonnance/add', Ordonnance,{
      headers:this.requestHeader
    }
    );

  }
  AddEvent(Event:any){
   
    return this.http.post(this.ApiHost + 'events/addEvent', Event,{
      headers:this.requestHeader
    }
    );

  }
  deleteEvent(Event:any){
   
    return this.http.post(this.ApiHost + '/events/deleteEvent/'+ Event,{
      headers:this.requestHeader
    }
    );

  }
  getEvents(){
    return this.http.get(this.ApiHost + 'events/AllEvent')

  }

  getToDoList(){
    return this.http.get(this.ApiHost + 'ToDoList/getAll')

  }

  CheckedTodoList(id:any, list?:any){
    const updateUrl = `${this.ApiHost+'ToDoList/update'}/${id}`;
    return this.http.put(updateUrl,list);
  }
  NoCheckedTodoList(id:any, list?:any){
    const updateUrl = `${this.ApiHost+'ToDoList/falseCheck'}/${id}`;
    return this.http.put(updateUrl,list);
  }
  AddToDo(list:any){

  return this.http.post(this.ApiHost + 'ToDoList/add', list,{
      headers:this.requestHeader
    }
    );
  }


}