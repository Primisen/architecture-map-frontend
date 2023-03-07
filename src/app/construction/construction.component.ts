import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Construction } from '../entity/construction';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {

  construction!: Construction;
  id: number;
  similarConstructions: Construction[] = [];



  constructor(private activatedRoute: ActivatedRoute, private _http: HttpClient) {
    this.id = this.activatedRoute.snapshot.params['constructionId'];
    this.getPhoto();
  
  }

  ngOnInit() {
  }

  getResource(resourceUrl: string): Observable<any> {
    return this._http.get(resourceUrl);
  }

  getPhoto() {
    this.getResource("http://localhost:8080/constructions/" + this.id)
      .subscribe(
        data => { this.construction = data, this.findSimilarConstructions(data['architecturalStyle']) }
      );

  }

  findSimilarConstructions(architecturalStyle : any) {
    this.getResource("http://localhost:8080/constructions/architectural-styles/" + architecturalStyle.id)
      .subscribe(
        data => this.similarConstructions = data
      );
  }


}
