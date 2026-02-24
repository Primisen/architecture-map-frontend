import { HttpClient } from '@angular/common/http'
import { Component, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { ARCHITECTURAL_STYLES_URL } from '../../core/constants/URL'
import { ArchitecturalStyle } from '../../core/models/architecturalStyle'

@Component({
    selector: 'app-architectural-styles',
    templateUrl: './architectural-styles.component.html',
    styleUrls: ['./architectural-styles.component.css'],
})
export class ArchitecturalStylesComponent {
    architecturalStyles: ArchitecturalStyle[] = []
    private architecturalStylesUrl = ARCHITECTURAL_STYLES_URL
    private httpClient = inject(HttpClient)

    constructor() {
        this.getArchitecturalStyles()
    }

    getArchitecturalStyles() {
        this.getResource(this.architecturalStylesUrl).subscribe((architecturalStyles: ArchitecturalStyle[]) => {
            this.architecturalStyles = architecturalStyles.sort((a, b) => a.name.localeCompare(b.name))
        })
    }

    getResource(url: string): Observable<any> {
        return this.httpClient.get(url)
    }
}
