import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Construction } from '../../core/models/construction';
import { NgxGalleryOptions } from '@rybos/ngx-gallery';
import { NgxGalleryImage } from '@rybos/ngx-gallery';
import { ConstructionImage } from '../../core/models/constructionImage';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent {

  construction!: Construction;
  id: number;
  imageId: number;
  clickedImage: ConstructionImage | undefined;
  similarConstructions: Construction[] = [];
  clickedGalleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  galleryOptions: NgxGalleryOptions[] = [];
  clickedGalleryImages: NgxGalleryImage[] = [];
  startIndex: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private _http: HttpClient) {
    this.id = this.activatedRoute.snapshot.params['constructionId'];
    this.imageId = this.activatedRoute.snapshot.params['imageId'];

    this.getConstructionData();

    this.clickedGalleryOptions = [
      {
        previewZoom: true,
        previewZoomStep: 0.2,
        previewZoomMax: 3,
        imageArrows: false,
        width: "100%",
        height: "90%",
        imageSwipe: true,
        thumbnails: false,
        thumbnailsArrows: false,
        thumbnailsSwipe: true,
        previewSwipe: true,
        previewCloseOnClick: true,
        arrowNextIcon: '',
        arrowPrevIcon: '',
      },
    ]

    this.galleryOptions = [
      {
        image: false,
        thumbnailsRemainingCount: true,
        height: "100px",
        width: "100%",
        previewZoom: true,
        previewZoomStep: 0.2,
        previewZoomMax: 3,
        previewSwipe: true,
        thumbnailsColumns: 6
      }
    ]
  }

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
              }),
            this.galleryInit()
        }
      );
  }

  galleryInit() {
    this.construction.images.forEach(photo => {

      let imageDescription = '';
      if (photo.author) {
        imageDescription = " Аўтар: " + photo.author + "; Крыніца: " + photo.source.name + ' (' + photo.source.url + ')'
      } else {
        imageDescription = "Крыніца: " + photo.source.name + ' (' + photo.source.url + ')'
      }

      var image: NgxGalleryImage = {
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: imageDescription,
      };
      this.galleryImages.push(image);
    });

    if (!this.clickedImage) {
      this.clickedImage = this.construction.images[0];
    }

    let imageDescription = '';
    if (this.clickedImage!.author) {
      imageDescription = " Аўтар: " + this.clickedImage!.author + "; Крыніца: " + this.clickedImage!.source.name + ' (' + this.clickedImage!.source.url + ')'
    } else {
      imageDescription = "Крыніца: " + this.clickedImage!.source.name + ' (' + this.clickedImage!.source.url + ')'
    }

    var bla: NgxGalleryImage = {
      // small: this.clickedImage!.url,
      medium: this.clickedImage!.url,
      big: this.clickedImage!.url,
      description: imageDescription,
    };
    this.clickedGalleryImages.push(bla)
  }

}
