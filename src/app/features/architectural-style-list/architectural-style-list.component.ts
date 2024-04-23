import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ARCHITECTURAL_STYLES_URL } from '../../core/constants/URL';
import { ArchitecturalStyle } from '../../core/models/architecturalStyle';

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
      .subscribe(
        (architecturalStyles: ArchitecturalStyle[]) => { this.architecturalStyles = architecturalStyles.sort((a, b) => a.name.localeCompare(b.name));
      });
  }

  getResource(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
}
