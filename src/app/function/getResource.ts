import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

export function getResource(url: string, httpClient: HttpClient): Observable<any> {
    return httpClient.get("http://localhost:8080/" + url);
}