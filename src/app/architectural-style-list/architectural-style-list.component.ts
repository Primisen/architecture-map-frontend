import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ARCHITECTURAL_STYLES_URL } from '../constants/URL';
import { ArchitecturalStyle } from '../model/architecturalStyle';

@Component({
  selector: 'app-architectural-style-list',
  templateUrl: './architectural-style-list.component.html',
  styleUrls: ['./architectural-style-list.component.css']
})
export class ArchitecturalStyleListComponent {

  architecturalStyles: ArchitecturalStyle[] = [];
  private architecturalStylesUrl = ARCHITECTURAL_STYLES_URL;

  constructor(private httpClient: HttpClient) {
    this.getArchitecturalStyles();
  }

  getArchitecturalStyles() {
    this.getResource(this.architecturalStylesUrl)
      .subscribe((architecturalStyles: ArchitecturalStyle[]) => {
        this.architecturalStyles.push(...architecturalStyles);
      });
  }

  getResource(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
}
