import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
  private apiUrl = 'http://localhost:5000/api/chart'; // Ajusta según tu API

  constructor(private http: HttpClient) { }

  getChartData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addDataPoint(data: { category: string; value: number }): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}