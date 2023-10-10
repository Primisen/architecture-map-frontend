import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Construction } from '../model/construction';
import { NgxGalleryOptions } from '@rybos/ngx-gallery';
import { NgxGalleryImage } from '@rybos/ngx-gallery';
import { NgxGalleryAnimation } from '@rybos/ngx-gallery';
import { GET_CONSTRUCTION_IMAGES_BY_ARCHITECTURAL_STYLE_URL } from '../constants/URL';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent {

  construction!: Construction;
  id: number;
  similarConstructions: Construction[] = [];
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  constructor(private activatedRoute: ActivatedRoute, private _http: HttpClient) {
    this.id = this.activatedRoute.snapshot.params['constructionId'];
    this.getPhoto();

    this.galleryOptions = [

      //small
      {
        width: '600px',
        height: '100vh',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-arrow-circle-left',
        arrowNextIcon: 'fa fa-arrow-circle-right',
        closeIcon: 'fa fa-times-circle',
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      //big
      // max-width 800
      {
        width: '70%',
        height: '80vh',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 10,
        thumbnailMargin: 10,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      //big
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
        lazyLoading: false,
        imageAnimation: NgxGalleryAnimation.Slide,
        linkTarget: 'dddd',

      }
    ];
  }

  getResource(resourceUrl: string): Observable<any> {
    return this._http.get(resourceUrl);
  }

  getPhoto() {
    this.getResource("http://localhost:8080/constructions/" + this.id)
      .subscribe(
        data => {
          this.construction = data,
            this.galleryInit()
        }
      );
  }

  findSimilarConstructions(architecturalStyle: any) {
    this.getResource(GET_CONSTRUCTION_IMAGES_BY_ARCHITECTURAL_STYLE_URL + architecturalStyle.id)
      .subscribe(
        data => this.similarConstructions = data
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
  }

}
