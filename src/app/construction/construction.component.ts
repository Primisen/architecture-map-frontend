import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Construction } from '../entity/construction';



import {NgxGalleryOptions} from '@rybos/ngx-gallery';
import {NgxGalleryImage} from '@rybos/ngx-gallery';
import {NgxGalleryAnimation} from '@rybos/ngx-gallery';




@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {

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

        // thumbnailsAsLinks: true

      },
      //big
      // max-width 800
      {
        // breakpoint: 800,
        width: '70%',
        height: '80vh',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 10,
        thumbnailMargin: 10,
        // lazyLoading: false,
        imageAnimation: NgxGalleryAnimation.Slide,
        
        // previewCloseOnClick : true,


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

  ngOnInit() {




    // this.galleryOptions = [
    //   {
    //     width: '600px',
    //     height: '400px',
    //     thumbnailsColumns: 4,
    //      arrowPrevIcon: 'fa fa-arrow-circle-left',
    //     arrowNextIcon: 'fa fa-arrow-circle-right',
    //     closeIcon : 'fa fa-times-circle',
        
    //     imageAnimation: NgxGalleryAnimation.Slide,
        
        
    //   },
    //   // max-width 800
    //   {
    //     breakpoint: 800,
    //     width: '100%',
    //     height: '600px',
    //     imagePercent: 80,
    //     thumbnailsPercent: 20,
    //     thumbnailsMargin: 20,
    //     thumbnailMargin: 20,
        
    //   },
    //   // max-width 400
    //   {
    //     breakpoint: 400,
    //     preview: false,
        
    //   }
    // ];

    // this.galleryImages = [
    //   {
    //     small: 'https://zoographia.ru/upload/iblock/f5e/h6up57sp4z07z1nsdx8cq5e5514m4bwv.jpg',
    //     medium: 'https://zoographia.ru/upload/iblock/f5e/h6up57sp4z07z1nsdx8cq5e5514m4bwv.jpg',
    //     big: 'https://zoographia.ru/upload/iblock/f5e/h6up57sp4z07z1nsdx8cq5e5514m4bwv.jpg'
    //   },
    //   {
    //     small: 'https://www.novochag.ru/upload/img_cache/20a/20a1dbc01926f789c01c371113377c27_ce_2370x1580x0x0.jpg',
    //     medium: 'https://www.novochag.ru/upload/img_cache/20a/20a1dbc01926f789c01c371113377c27_ce_2370x1580x0x0.jpg',
    //     big: 'https://www.novochag.ru/upload/img_cache/20a/20a1dbc01926f789c01c371113377c27_ce_2370x1580x0x0.jpg'
    //   },
    //   {
    //     small: 'https://kor.ill.in.ua/m/610x385/2722809.jpg',
    //     medium: 'https://kor.ill.in.ua/m/610x385/2722809.jpg',
    //     big: 'https://kor.ill.in.ua/m/610x385/2722809.jpg'
    //   },{
    //     small: 'https://funart.pro/uploads/posts/2021-07/1627395638_38-funart-pro-p-tupie-koti-zhivotnie-krasivo-foto-56.jpg',
    //     medium: 'https://funart.pro/uploads/posts/2021-07/1627395638_38-funart-pro-p-tupie-koti-zhivotnie-krasivo-foto-56.jpg',
    //     big: 'https://funart.pro/uploads/posts/2021-07/1627395638_38-funart-pro-p-tupie-koti-zhivotnie-krasivo-foto-56.jpg'
    //   },
    //   {
    //     small: 'https://s0.rbk.ru/v6_top_pics/media/img/6/67/756484737186676.jpg',
    //     medium: 'https://s0.rbk.ru/v6_top_pics/media/img/6/67/756484737186676.jpg',
    //     big: 'https://s0.rbk.ru/v6_top_pics/media/img/6/67/756484737186676.jpg'
    //   }
    // ];



  }

  getResource(resourceUrl: string): Observable<any> {
    return this._http.get(resourceUrl);
  }

  getPhoto() {
    this.getResource("http://localhost:8080/constructions/" + this.id)
      .subscribe(
        data => { this.construction = data, 
          this.galleryInit(),
          this.findSimilarConstructions(data['architecturalStyle']) }
      );

  }

  findSimilarConstructions(architecturalStyle : any) {
    this.getResource("http://localhost:8080/constructions/architectural-styles/" + architecturalStyle.id)
      .subscribe(
        data => this.similarConstructions = data
      );
  }

  galleryInit() {

    this.construction.photos.forEach(photo => {

      var image: NgxGalleryImage = {
        small: photo.urlAddressToPhoto,
        medium: photo.urlAddressToPhoto,
        big: photo.urlAddressToPhoto
      };
      // console.log(photo.urlAddressToPhoto);

      // image.small = photo.urlAddressToPhoto;
      this.galleryImages.push(image);
    });
  }

}
