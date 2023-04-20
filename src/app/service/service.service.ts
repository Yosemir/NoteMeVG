import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotasI } from '../model/notasM';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  private url = 'http://localhost:8080/api/v1/getNotas/get/';
  //private url = 'http://35.203.38.167:8080/api/v1/getNotas/get/';

  constructor(private http: HttpClient) { }

  getNotas(email: string): Observable<NotasI[]> {
    return this.http.get<NotasI[]>(this.url + email);
  }



}
