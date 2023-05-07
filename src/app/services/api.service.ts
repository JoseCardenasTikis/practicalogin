import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginI} from '../,,/../modelos/login.interface';
import {ResponseI} from '../,,/../modelos/response.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string= "https://social-back-epor.onrender.com/"

  constructor(private http:HttpClient) { 

    
}

loginByemail(form:LoginI):Observable<ResponseI>{
  let direccion=this.url
  return this.http.post<ResponseI>(direccion,form)



}
}
