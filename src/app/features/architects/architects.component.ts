import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Architect } from '../../core/models/architect'
import { ARCHITECTS_URL } from '../../core/constants/URL'

@Component({
    selector: 'app-architect-list',
    templateUrl: './architects.component.html',
    styleUrls: ['./architects.component.css'],
})
export class ArchitectsComponent {
    architects: Architect[] = []
    private architectsUrl = ARCHITECTS_URL

    constructor(private httpClient: HttpClient) {
        this.getArchitects()
    }

    getArchitects() {
        this.getResource(this.architectsUrl).subscribe((architects: Architect[]) => {
            this.architects.push(...architects)
        })
    }

    getResource(url: string): Observable<any> {
        return this.httpClient.get(url)
    }
}
