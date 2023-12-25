import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DoctorService{
    private add_api = 'http://localhost:8080/doctor/add';
    private getAll_api = 'http://localhost:8080/doctor/list';
    private delete_api = 'http://localhost:8080/doctor/delete';
    private getById_api = 'http://localhost:8080/doctor/List';
    private update_api = 'http://localhost:8080/doctor/update';

    constructor(private http:HttpClient) { }

   getAllDoctors():Observable<any>{
    return this.http.get(this.getAll_api);
  }
  addDoctor(doctor:any):Observable<any>{
    return this.http.post(this.add_api,doctor);
  }
  deleteDoctor(id:string):Observable<any>{
    console.log('test');
    const deleteUrl = `${this.delete_api}/${id}`;
    return this.http.delete<any>(deleteUrl);
  }
  updateDoctor(id?:string, doctor?:any):Observable<any>{
    const updateUrl = `${this.update_api}/${id}`;
    return this.http.put(updateUrl,doctor);
  }


}