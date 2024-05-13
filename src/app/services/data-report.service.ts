import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiffsModel } from '../model/diffs.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = 'http://127.0.0.1:5000';
  constructor(private http: HttpClient) {}

  getReportData(): Observable<DiffsModel[]> {
    return this.http.get<DiffsModel[]>(this.baseUrl + '/report-data');
  }
  postConfigData(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/config-data', data);
  }
}
