import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GET_CONSTRUCTION_IMAGES_BY_ARCHITECTURAL_STYLE_URL } from '../../core/constants/URL';
import { ConstructionImage } from '../../core/models/constructionImage';

@Component({
  selector: 'app-similar-construction',
  templateUrl: './similar-construction.component.html',
  styleUrls: ['./similar-construction.component.css']
})
export class SimilarConstructionComponent implements OnInit {

  @Input() architecturalStyleId: number = 0;
  similarConstructionImages: ConstructionImage[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.findSimilarConstructions(this.architecturalStyleId)
  }

  getResource(resourceUrl: string): Observable<any> {
    return this.httpClient.get(resourceUrl);
  }

  findSimilarConstructions(architecturalStyle: number) {
    this.getResource(GET_CONSTRUCTION_IMAGES_BY_ARCHITECTURAL_STYLE_URL + architecturalStyle)
      .subscribe(
        data => this.similarConstructionImages = data
      );
  }
}
