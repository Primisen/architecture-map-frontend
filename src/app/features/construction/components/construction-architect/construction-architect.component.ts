import { Component, inject } from '@angular/core'
import { Architect } from '../../../../core/models/architect'
import { ActivatedRoute } from '@angular/router'
import { URL } from '../../../../core/constants/URL.constants'
import { APP_ROUTES } from 'src/app/core/constants/routes.constants'
import { ApiService } from 'src/app/core/services/api.service'

@Component({
    selector: 'app-construction-architect',
    templateUrl: './construction-architect.component.html',
    styleUrls: ['./construction-architect.component.css'],
})
export class ConstructionArchitectComponent {
    public architect!: Architect
    private activatedRoute = inject(ActivatedRoute)
    private apiService = inject(ApiService)

    constructor() {
        const id = this.activatedRoute.snapshot.params[APP_ROUTES.ID]
        this.getArchitecturalStyle(id)
    }

    getArchitecturalStyle(id: number) {
        this.apiService.get<Architect>(URL.ARCHITECTS + id).subscribe((data) => (this.architect = data))
    }
}
