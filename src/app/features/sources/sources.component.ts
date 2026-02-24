import { Component, inject } from '@angular/core'
import { Source } from '../../core/models/source'
import { SOURCES_URL } from '../../core/constants/URL'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-sources',
    templateUrl: './sources.component.html',
    styleUrls: ['./sources.component.css'],
})
export class SourcesComponent {
    sources: Source[] = []
    private sourcesUrl = SOURCES_URL
    private httpClient = inject(HttpClient)

    constructor() {
        this.getSources()
    }

    private getSources() {
        this.getResource(this.sourcesUrl).subscribe((sources: Source[]) => {
            this.sources = sources.sort((a, b) => a.name.localeCompare(b.name))
        })
    }

    private getResource(url: string): Observable<any> {
        return this.httpClient.get(url)
    }
}
