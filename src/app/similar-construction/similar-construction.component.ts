import { Component, Input, OnInit } from '@angular/core';
import { Construction } from '../model/construction';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GET_CONSTRUCTIONS_BY_ARCHITECTURAL_STYLE_URL } from '../constants/URL';

@Component({
  selector: 'app-similar-construction',
  templateUrl: './similar-construction.component.html',
  styleUrls: ['./similar-construction.component.css']
})
export class SimilarConstructionComponent implements OnInit{

  similarConstructions: Construction[] = [];
  @Input() architecturalStyleId: number = 0;

  constructor(private _http: HttpClient) {  
  }

  ngOnInit() {
    this.findSimilarConstructions(this.architecturalStyleId)
  }

  getResource(resourceUrl: string): Observable<any> {
    return this._http.get(resourceUrl);
  }

  findSimilarConstructions(architecturalStyle: number) {
    this.getResource(GET_CONSTRUCTIONS_BY_ARCHITECTURAL_STYLE_URL + architecturalStyle)
      .subscribe(
        data => this.similarConstructions = data
      );
  }
}
