import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  getWithParams(url: string, params: HttpParams): Observable<any> {
    return this.httpClient.get(url, { params: params });
  }
}
