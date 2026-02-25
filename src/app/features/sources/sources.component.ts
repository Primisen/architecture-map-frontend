import { Component, inject, OnInit, signal } from '@angular/core'
import { Source } from '../../core/models/source'
import { SOURCES_URL } from '../../core/constants/URL'
import { ApiService } from 'src/app/core/services/api.service'

@Component({
    selector: 'app-sources',
    templateUrl: './sources.component.html',
    styleUrls: ['./sources.component.css'],
})
export class SourcesComponent implements OnInit {
    sources = signal<Source[]>([])
    private apiService = inject(ApiService)

    ngOnInit() {
        this.loadSources()
    }

    private loadSources() {
        this.apiService.get<Source[]>(SOURCES_URL).subscribe((sources) => {
            this.sources.set(sources.sort((a, b) => a.name.localeCompare(b.name)))
        })
    }
}
