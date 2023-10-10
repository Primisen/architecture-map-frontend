import { Component } from '@angular/core';
import { Source } from '../model/source';
import { SOURCES_URL } from '../constants/URL';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.css']
})
export class SourceListComponent {

  sources: Source[] = [];
  private sourcesUrl = SOURCES_URL;

  constructor(private httpClient: HttpClient) {
    this.getSources();
  }

  private getSources() {
    this.getResource(this.sourcesUrl)
      .subscribe((sources: Source[]) => {
        this.sources.push(...sources);
      });
  }

  private getResource(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
}
