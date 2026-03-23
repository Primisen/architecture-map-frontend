import { Component, inject, OnInit, signal } from '@angular/core'
import { URL } from '../../core/constants/URL.constants'
import { ArchitecturalStyle } from '../../core/models/architecturalStyle'
import { ApiService } from 'src/app/core/services/api.service'

@Component({
    selector: 'app-architectural-styles',
    templateUrl: './architectural-styles.component.html',
    styleUrls: ['./architectural-styles.component.css'],
})
export class ArchitecturalStylesComponent implements OnInit {
    architecturalStyles = signal<ArchitecturalStyle[]>([])
    private apiService = inject(ApiService)

    ngOnInit() {
        this.loadArchitecturalStyles()
    }

    private loadArchitecturalStyles() {
        this.apiService.get<ArchitecturalStyle[]>(URL.ARCHITECTURAL_STYLES).subscribe((architecturalStyles) => {
            this.architecturalStyles.set(architecturalStyles.sort((a, b) => a.name.localeCompare(b.name)))
        })
    }
}
