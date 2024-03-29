import { Component, Input } from '@angular/core';
import { ConstructionImage } from '../model/constructionImage';

@Component({
  selector: 'app-construction-image-masonry',
  templateUrl: './construction-image-masonry.component.html',
  styleUrls: ['./construction-image-masonry.component.css']
})
export class ConstructionImageMasonryComponent {

  @Input() constructionImages: ConstructionImage[] = [];

}
