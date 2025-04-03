import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private apiUrl = 'http://localhost:5000/api/sessions/'; // URL de ejemplo

  constructor(private http: HttpClient) { }

  getSession(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
