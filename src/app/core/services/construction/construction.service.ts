import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTRUCTIONS_URL } from '../../constants/URL';
import { Construction } from '../../models/construction';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  constructor(private httpClient: HttpClient) {
  }

  getResource(resourceUrl: string): Observable<any> {
    return this.httpClient.get(resourceUrl);
  }

   getConstruction(constructionId: string):  Observable<Construction>{
    return  this.httpClient
      .get<Construction>(CONSTRUCTIONS_URL + constructionId);
  }

}
