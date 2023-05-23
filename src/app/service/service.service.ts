import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotasI } from '../model/notasM';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = 'https://script.google.com/macros/s/AKfycbwhx-PTfT9Wdz_8FmfYPLV-7Df42KoAjnmhLLYmj1DXpDpQSVVr1JxSi4KlLNKGu1cl/exec?correo=';

  constructor(private http: HttpClient) { }

  getNotas(email: string): Observable<NotasI[]> {
    return this.http.get<NotasI[]>(this.url + email);
  }



}
