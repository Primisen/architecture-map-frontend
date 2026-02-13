import { Component } from '@angular/core'
import { Architect } from '../../../../core/models/architect'
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ARCHITECTS_URL } from '../../../../core/constants/URL'

@Component({
    selector: 'app-architect',
    templateUrl: './architect.component.html',
    styleUrls: ['./architect.component.css'],
})
export class ArchitectComponent {
    public architect!: Architect

    constructor(
        private activatedRoute: ActivatedRoute,
        private httpClient: HttpClient,
    ) {
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
