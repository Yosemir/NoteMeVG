import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotasI } from '../model/notasM';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = 'https://script.google.com/macros/s/AKfycbw70wAleZPYSzkeyUnP0_4T3sFDjK93WVkfTYMSv5rKvPK9gNo6prMwLG_bZMd75lKT/exec?correo=';

  constructor(private http: HttpClient) { }

  getNotas(email: string): Observable<NotasI[]> {
    return this.http.get<NotasI[]>(this.url + email);
  }



}
