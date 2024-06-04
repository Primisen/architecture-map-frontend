import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GET_SIMILAR_CONSTRUCTION_IMAGES_URL } from '../../core/constants/URL';
import { ConstructionImage } from '../../core/models/constructionImage';

@Component({
  selector: 'app-similar-construction',
  templateUrl: './similar-construction.component.html',
  styleUrls: ['./similar-construction.component.css']
})
export class SimilarConstructionComponent implements OnInit {

  @Input() constructionId: number = 0;
  similarConstructionImages: ConstructionImage[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.findSimilarConstructions(this.constructionId)
  }

  getResource(resourceUrl: string): Observable<any> {
    return this.httpClient.get(resourceUrl);
  }

  findSimilarConstructions(constructionId: number) {
    this.getResource(GET_SIMILAR_CONSTRUCTION_IMAGES_URL + constructionId)
      .subscribe(
        data => this.similarConstructionImages = data
      );
  }
}
