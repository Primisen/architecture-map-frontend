import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public photos: any;

  public photoVisualTypes: any;


  private urlBasic = "http://localhost:8080";
  private urlPhotoVisualTypeBasic = this.urlBasic + "/visual-types/";

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
    this.getPhotos();
    this.getPhotoVisualTypes();
  }

  getPhotos() {
    this.getResource("http://localhost:8080/photos/")
      .subscribe(
        data => this.photos = data
      );
  }

  getPhotoVisualTypes() {
    this.getResource("http://localhost:8080/visual-types/")
      .subscribe(
        data => this.photoVisualTypes = data
      );
  }

  getResource(resourceUrl: string): Observable<any> {
    return this._http.get(resourceUrl);
  }

}
