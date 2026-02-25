import { HttpClient, HttpParams } from '@angular/common/http'
import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ARCHITECTURAL_STYLES_URL, SEARCH_CONSTRUCTIONS_URL } from 'src/app/core/constants/URL'
import { VOBLASCS } from 'src/app/core/constants/voblascs'
import { ArchitecturalStyle } from 'src/app/core/models/architecturalStyle'
import { Construction } from 'src/app/core/models/construction'
import { ApiService } from 'src/app/core/services/api.service'

@Component({
    selector: 'app-searching',
    templateUrl: './searching.component.html',
    styleUrls: ['./searching.component.css'],
})
//Need to rewrite
export class SearchingComponent implements OnInit {
    @Output() searchParams = new EventEmitter<any>()

    architecturalStyles = signal<ArchitecturalStyle[]>([])

    foundConstructions: Construction[] = []

    readonly voblascs = VOBLASCS

    districts: string[] = []

    private httpClient = inject(HttpClient)
    private apiSercice = inject(ApiService)

    ngOnInit() {
        this.getArchitecturalStyles()
    }

    searchConstructionForm = new FormGroup({
        architecturalStyleId: new FormControl(''),
        region: new FormControl(''),
        district: new FormControl(''),
        buildingCenturyFrom: new FormControl(''),
        buildingCenturyTo: new FormControl(''),
    })

    updateDistricts(event: Event) {
        const selectElement = event.target as HTMLSelectElement
        const region = selectElement.value
        this.districts = this.voblascs[region as keyof typeof this.voblascs] || []
    }

    validateCentury(event: Event) {
        const input = event.target as HTMLInputElement
        input.value = input.value.replace(/[^0-9]/g, '')
    }

    getArchitecturalStyles() {
        this.apiSercice.get<ArchitecturalStyle[]>(ARCHITECTURAL_STYLES_URL).subscribe((architecturalStyle) => {
            this.architecturalStyles.set(architecturalStyle.sort((a, b) => a.name.localeCompare(b.name)))
        })
    }

    search() {
        this.foundConstructions = []

        let params = new HttpParams()
        if (this.searchConstructionForm.value.architecturalStyleId) {
            params = params.set('architecturalStyleId', this.searchConstructionForm.value.architecturalStyleId)
        }
        if (this.searchConstructionForm.value.region) {
            params = params.set('region', this.searchConstructionForm.value.region)
        }
        if (this.searchConstructionForm.value.district) {
            params = params.set('district', this.searchConstructionForm.value.district)
        }
        if (this.searchConstructionForm.value.buildingCenturyFrom) {
            params = params.set('buildingCenturyFrom', this.searchConstructionForm.value.buildingCenturyFrom.toString())
        }
        if (this.searchConstructionForm.value.buildingCenturyTo) {
            params = params.set('buildingCenturyTo', this.searchConstructionForm.value.buildingCenturyTo.toString())
        }

        this.httpClient.get(SEARCH_CONSTRUCTIONS_URL, { params }).subscribe((answer) => this.searchParams.emit(answer))
    }
}
