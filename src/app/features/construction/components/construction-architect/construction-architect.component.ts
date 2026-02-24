import { Component, inject } from '@angular/core'
import { Architect } from '../../../../core/models/architect'
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ARCHITECTS_URL } from '../../../../core/constants/URL'

@Component({
    selector: 'app-construction-architect',
    templateUrl: './construction-architect.component.html',
    styleUrls: ['./construction-architect.component.css'],
})
export class ConstructionArchitectComponent {
    public architect!: Architect
    private activatedRoute = inject(ActivatedRoute)
    private httpClient = inject(HttpClient)

    constructor() {
        const id = this.activatedRoute.snapshot.params['id']
        this.getArchitecturalStyle(id)
    }

    getResource(resourceUrl: string): Observable<any> {
        return this.httpClient.get(resourceUrl)
    }

    getArchitecturalStyle(id: number) {
        this.getResource(ARCHITECTS_URL + id).subscribe(data => (this.architect = data))
    }
}
