import { HttpParams } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConstructionImage } from '../../core/models/constructionImage';
import { IMAGES_URL } from '../../core/constants/URL';
import { ApiService } from 'src/app/core/services/api.service';
import { Construction } from 'src/app/core/models/construction';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page = 1;

  infiniteScrollEnabled: boolean = true;

  constructionImages: ConstructionImage[] = [];
  findedConstructions: Construction[] = []

  gotImagesId: number[] = [];//for getting only unique images
  param = new HttpParams({ fromObject: { 'usedId': this.gotImagesId } });
  loading = true;

  private url = IMAGES_URL;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getRandomConstructionImages();
    this.loading = false;
  }

  onSearchParams(params: Construction[]) {
    this.infiniteScrollEnabled = false;
    this.findedConstructions = params;
    this.constructionImages = this.parseFromConstructionToConstructionImages(this.findedConstructions)
  }

  parseFromConstructionToConstructionImages(findedConstructions: Construction[]): ConstructionImage[] {
    
    var constructionImages: ConstructionImage[] = [];

    findedConstructions.forEach(
      construction => {

        const image: ConstructionImage = {
          id: construction.images[0].id, 
          url: construction.images[0].url, 
          [construction.id]: construction.id,
          [construction.architecturalStyle.name]: construction.architecturalStyle.name,
          [construction.name]: construction.name,
          [construction.address.region]: construction.address.region,
          [construction.address.district]: construction.address.district,
          [construction.address.locality]: construction.address.locality,
          source: construction.images[0].source,
          author: construction.images[0].author,
          constructionId: construction.id,
          architecturalStyleName: construction.architecturalStyle.name,
          construction: construction
        };

        constructionImages.push(image)
      }
    )
  
    return constructionImages
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
    if (!this.infiniteScrollEnabled) return;
    this.loading = true;
    ++this.page;
    this.getRandomConstructionImages();
  }
}
