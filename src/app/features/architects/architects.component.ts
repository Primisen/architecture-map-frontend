import { Component, inject, OnInit, signal } from '@angular/core'
import { Architect } from '../../core/models/architect'
import { ARCHITECTS_URL } from '../../core/constants/URL'
import { ApiService } from 'src/app/core/services/api.service'

@Component({
    selector: 'app-architects',
    templateUrl: './architects.component.html',
    styleUrls: ['./architects.component.css'],
})
export class ArchitectsComponent implements OnInit {
    architects = signal<Architect[]>([])
    private apiService = inject(ApiService)

    ngOnInit() {
        this.loadArchitects()
    }

    private loadArchitects(): void {
        this.apiService.get<Architect[]>(ARCHITECTS_URL).subscribe((architects) => {
            this.architects.set(architects)
        })
    }
}
