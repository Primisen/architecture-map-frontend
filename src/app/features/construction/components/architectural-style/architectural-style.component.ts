import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ArchitecturalStyle } from '../../core/models/architecturalStyle';
import { ARCHITECTURAL_STYLES_URL } from '../../core/constants/URL';

@Component({
  selector: 'app-architectural-style',
  templateUrl: './architectural-style.component.html',
  styleUrls: ['./architectural-style.component.css']
})
export class ArchitecturalStyleComponent {

  public architecturalStyle!: ArchitecturalStyle;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    const id = this.activatedRoute.snapshot.params['id'];
    this.getArchitecturalStyle(id);
  }

  getResource(resourceUrl: string): Observable<any> {
    return this.httpClient.get(resourceUrl  );
  }

  getArchitecturalStyle(id: number) {
    this.getResource(ARCHITECTURAL_STYLES_URL + id)
      .subscribe(
        data => this.architecturalStyle = data
      );

  }
}
