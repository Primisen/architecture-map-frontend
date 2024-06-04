import { HttpClient } from '@angular/common/http';
import { Component, ElementRef,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Construction } from '../../core/models/construction';
import { ConstructionImage } from '../../core/models/constructionImage';
import { environment } from 'src/environments/environment';
import { BeforeSlideDetail, InitDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
import { LightGallery } from 'lightgallery/lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lightGallery from 'lightgallery'; // Правільны імпарт

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent {

  title = 'angular-demo';

  construction!: Construction;
  id: number;
  imageId: number;
  clickedImage: ConstructionImage | undefined;
  similarConstructions: Construction[] = [];
  loadedImages: any[] = [];
  startIndex: number = 0;

  private lightGallery!: LightGallery;
  private needRefresh = false;

  settings = {
    counter: false,
    allowMediaOverlap: true,

    enableThumbSwipe: true,
    enableThumbDrag: true,

    plugins: [lgZoom],
    

    // counter: false,
    // thumbnail: true,
    // allowMediaOverlap: true,
    // enableThumbSwipe: true,
    // enableThumbDrag: true,
    // plugins: [lgZoom, lgThumbnail],


    subHtmlSelectorRelative: true,

  };





  

  constructor(private activatedRoute: ActivatedRoute, private _http: HttpClient,  private _elementRef: ElementRef) {
    this.id = this.activatedRoute.snapshot.params['constructionId'];
    this.imageId = this.activatedRoute.snapshot.params['imageId'];

    this._elementRef = _elementRef;

    this.getConstructionData();
  }

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }

  @ViewChild('lightgallery') lightGalleryElem!: ElementRef;

  ngAfterViewInit(): void {
    lightGallery(this.lightGalleryElem.nativeElement, this.settings);
  }

  onInit = (detail: InitDetail): void => {
    this.lightGallery = detail.instance;
  };

  getResource(resourceUrl: string): Observable<any> {
    return this._http.get(resourceUrl);
  }

  getConstructionData() {
    this.getResource(environment.backendUrl + "/constructions/" + this.id)
      .subscribe(
        data => {
          this.construction = data,
            this.clickedImage = this.construction.images.find(element => element.id == this.imageId),
            this.startIndex = this.construction.images.findIndex(
              image => {
                image.id == this.imageId
              })
        }
      );
  }

  loadImages() {

    const DEFAULT_NUMBER_OF_IMAGE_LOADING = 10;

    for (let i = this.loadedImages.length; i < this.loadImages.length + DEFAULT_NUMBER_OF_IMAGE_LOADING; i++) {

      let image = {
        src: this.construction.images[i].url,
        thumb: this.construction.images[i].url,
        subHtml: this.construction.images[i].source + ' ' + this.construction.images[i].author
      };

      this.loadedImages.push(image);
    }

    this.lightGallery.refresh();
  }
}
