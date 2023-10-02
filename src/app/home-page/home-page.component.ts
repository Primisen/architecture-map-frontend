import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstructionImage } from '../model/constructionImage';
import { IMAGES_URL } from '../constants/URL';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  page = 1;
  photos: ConstructionImage[] = [];
  usedPhotosId: number[] = [];//for back

  private url = IMAGES_URL;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.getResource(this.url)
      .subscribe((randomPhotos: ConstructionImage[]) => {
        this.photos.push(...randomPhotos);
        for (let index = 0; index < randomPhotos.length; index++) {
          this.usedPhotosId.push(randomPhotos[index].id);
        }
      });
  }

  getResource(resourceUrl: string): Observable<any> {
    let param = new HttpParams({ fromObject: { 'usedId': this.usedPhotosId } });
    return this._http.get(resourceUrl, { params: param });
  }

  onScroll(): void {
    ++this.page;
    this.getPhotos();
  }
}
