import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ordonnance } from "../_models/ordonnance";
import { Event } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class UtilisateurService{
    private add_api = 'http://localhost:8080/utilisateur/add';
    private getAll_Api = 'http://localhost:8080/utilisateur/list';
    private delete_api = 'http://localhost:8080/utilisateur/delete';
    private getById_api = 'http://localhost:8080/utilisateur/List';
    private update_api = 'http://localhost:8080/utilisateur/update';
    private API_GestionDoc='http://localhost:8080/utilisateur'
    private ApiHost='http://localhost:8080/'
    requestHeader=new HttpHeaders(
      { "No-Auth":"True"}  
    );
    constructor(private http:HttpClient) { }
  getAllUtilisateur():Observable<any>{
    return this.http.get(this.getAll_Api);
  }
  
  addUtilisateur(utilisateur:any):Observable<any>{
    return this.http.post(this.add_api,utilisateur);
  }
  deleteUtilisateur(id:string):Observable<any>{
    //console.log('test');
    const deleteUrl = `${this.delete_api}/${id}`;
    return this.http.delete<any>(deleteUrl);
  }
  updateUtilisateur(id?:string, utilisateur?:any):Observable<any>{
    const updateUrl = `${this.update_api}/${id}`;
    return this.http.put(updateUrl,utilisateur);
  }
 


}