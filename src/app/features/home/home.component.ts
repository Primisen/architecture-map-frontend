import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConstructionImage } from '../../core/models/constructionImage';
import { IMAGES_URL } from '../../core/constants/URL';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page = 1;
  constructionImages: ConstructionImage[] = [];
  gotImagesId: number[] = [];//for getting only unique images
  param = new HttpParams({ fromObject: { 'usedId': this.gotImagesId } });
  loading = true;

  private url = IMAGES_URL;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getRandomConstructionImages();
    this.loading = false;
  }

  getRandomConstructionImages() {
    this.loading = true;
    this.apiService.getWithParams(this.url, this.param)
      .subscribe((randomConstructionImages: ConstructionImage[]) => {

        this.loading = true;

        this.constructionImages.push(...randomConstructionImages);

        for (let index = 0; index < randomConstructionImages.length; index++) {
          this.gotImagesId.push(randomConstructionImages[index].id);
        }

        this.param = new HttpParams({ fromObject: { 'usedId': this.gotImagesId } });
        this.loading = false;

      });
  }

  onScroll(): void {
    this.loading = true;
    ++this.page;
    this.getRandomConstructionImages();
  }
}
