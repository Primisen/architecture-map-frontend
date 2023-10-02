import { Component } from '@angular/core';
import { getResource } from '../function/getResource';
import { HttpClient } from '@angular/common/http';
import { ArchitecturalStyle } from '../model/architecturalStyle';

@Component({
  selector: 'app-architectural-style',
  templateUrl: './architectural-style.component.html',
  styleUrls: ['./architectural-style.component.css']
})
export class ArchitecturalStyleComponent {

  private url: string;

  architecturalStyles: ArchitecturalStyle [];

  constructor(private httpClient : HttpClient){

    this.url = 'architectural-styles/';
    this.architecturalStyles = [];

    this.getArchitecturalStyles ();
  }


  getArchitecturalStyles () {
    getResource(this.url, this.httpClient)
    .subscribe (
      data => this.architecturalStyles = data
    );

  }

}
