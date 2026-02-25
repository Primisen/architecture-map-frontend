import { HttpClient, HttpParams } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private httpClient = inject(HttpClient)

    get<T>(url: string): Observable<T> {
        return this.httpClient.get<T>(url)
    }

    getWithParams(url: string, params: HttpParams): Observable<any> {
        return this.httpClient.get(url, { params: params })
    }
}
