import { Component, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ArchitecturalStyle } from '../../../../core/models/architecturalStyle'
import { URL } from '../../../../core/constants/URL.constants'
import { APP_ROUTES } from 'src/app/core/constants/routes.constants'
import { ApiService } from 'src/app/core/services/api.service'

@Component({
    selector: 'app-construction-architectural-style',
    templateUrl: './construction-architectural-style.component.html',
    styleUrls: ['./construction-architectural-style.component.css'],
})
export class ConstructionArchitecturalStyleComponent {
    public architecturalStyle!: ArchitecturalStyle
    private activatedRoute = inject(ActivatedRoute)
    private apiService = inject(ApiService)

    constructor() {
        const id = this.activatedRoute.snapshot.params[APP_ROUTES.ID]
        this.getArchitecturalStyle(id)
    }

    getArchitecturalStyle(id: number) {
        this.apiService
            .get<ArchitecturalStyle>(URL.ARCHITECTURAL_STYLES + id)
            .subscribe((data) => (this.architecturalStyle = data))
    }
}
