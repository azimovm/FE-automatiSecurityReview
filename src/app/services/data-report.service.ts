import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiffsModel } from '../model/diffs.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getReportData(): Observable<DiffsModel[]> {
    return this.http.get<DiffsModel[]>('http://127.0.0.1:5000/report-data');
  }
  postConfigData(data: any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:5000/config-data', data);
  }
}
