import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { URL } from '../../constants/URL.constants'
import { Construction } from '../../models/construction'

@Injectable({
    providedIn: 'root',
})
export class ConstructionService {
    private httpClient = inject(HttpClient)

    getResource(resourceUrl: string): Observable<any> {
        return this.httpClient.get(resourceUrl)
    }

    getConstruction(constructionId: string): Observable<Construction> {
        return this.httpClient.get<Construction>(URL.CONSTRUCTIONS + constructionId)
    }
}
