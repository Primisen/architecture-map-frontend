import { HttpClient, HttpParams } from '@angular/common/http'
import { Component, EventEmitter, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Observable } from 'rxjs/internal/Observable'
import { ARCHITECTURAL_STYLES_URL, SEARCH_CONSTRUCTIONS_URL } from 'src/app/core/constants/URL'
import { ArchitecturalStyle } from 'src/app/core/models/architecturalStyle'
import { Construction } from 'src/app/core/models/construction'

@Component({
    selector: 'app-searching',
    templateUrl: './searching.component.html',
    styleUrls: ['./searching.component.css'],
})
export class SearchingComponent {
    @Output() searchParams = new EventEmitter<any>()

    getArchitecturalStylesUrl = ARCHITECTURAL_STYLES_URL
    searchConstructionUrl = SEARCH_CONSTRUCTIONS_URL
    architecturalStyles: ArchitecturalStyle[] = []

    foundConstructions: Construction[] = []

    searchQuery: string = ''
    selectedRegion: string = ''
    selectedDistrict: string = ''
    centuryFrom: string = ''
    centuryTo: string = ''

    regions: { [key in 'Мінская вобласць' | 'Брэсцкая вобласць' | 'Гомельская вобласць' | 'Віцебская вобласць' | 'Гродзенская вобласць' | 'Магілёўская вобласць']: string[] } = {
        'Мінская вобласць': [
            'Барысаўскі раён',
            'Бярэзінскі раён',
            'Валожынскі раён',
            'Вілейскі раён',
            'Дзяржынскі раён',
            'Капыльскі раён',
            'Клецкі раён',
            'Крупскі раён',
            'Лагойскі раён',
            'Любанскі раён',
            'Маладзечанскі раён',
            'Мінскі раён',
            'Мядзельскі раён',
            'Нясвіжскі раён',
            'Пухавіцкі раён',
            'Салігорскі раён',
            'Слуцкі раён',
            'Смалявіцкі раён',
            'Старадарожскі раён',
            'Стаўбцоўскі раён',
            'Уздзенскі раён',
            'Чэрвеньскі раён',
        ],
        'Брэсцкая вобласць': [
            'Баранавіцкі раён',
            'Брэсцкі раён',
            'Бярозаўскі раён',
            'Ганцавіцкі раён',
            'Драгічынскі раён',
            'Жабінкаўскі раён',
            'Іванаўскі раён',
            'Івацэвіцкі раён',
            'Камянецкі раён',
            'Кобрынскі раён',
            'Лунінецкі раён',
            'Ляхавіцкі раён',
            'Маларыцкі раён',
            'Пінскі раён',
            'Пружанскі раён',
            'Столінскі раён',
        ],
        'Віцебская вобласць': [
            'Аршанскі раён',
            'Бешанковіцкі раён',
            'Браслаўскі раён',
            'Верхнядзвінскі раён',
            'Віцебскі раён',
            'Гарадоцкі раён',
            'Глыбоцкі раён',
            'Докшыцкі раён',
            'Дубровенскі раён',
            'Лепельскі раён',
            'Лёзненскі раён',
            'Мёрскі раён',
            'Пастаўскі раён',
            'Полацкі раён',
            'Расонскі раён',
            'Сенненскі раён',
            'Талачынскі раён',
            'Ушацкі раён',
            'Чашніцкі раён',
            'Шаркоўшчынскі раён',
            'Шумілінскі раён',
        ],
        'Гомельская вобласць': [
            'Акцябрскі раён',
            'Брагінскі раён',
            'Буда-Кашалёўскі раён',
            'Веткаўскі раён',
            'Гомельскі раён',
            'Добрушскі раён',
            'Ельскі раён',
            'Жлобінскі раён',
            'Жыткавіцкі раён',
            'Калінкавіцкі раён',
            'Кармянскі раён',
            'Лельчыцкі раён',
            'Лоеўскі раён',
            'Мазырскі раён',
            'Нараўлянскі раён',
            'Петрыкаўскі раён',
            'Рагачоўскі раён',
            'Рэчыцкі раён',
            'Светлагорскі раён',
            'Хойніцкі раён',
            'Чачэрскі раён',
        ],
        'Гродзенская вобласць': [
            'Астравецкі раён',
            'Ашмянскі раён',
            'Бераставіцкі раён',
            'Ваўкавыскі раён',
            'Воранаўскі раён',
            'Гродзенскі раён',
            'Дзятлаўскі раён',
            'Зэльвенскі раён',
            'Іўеўскі раён',
            'Карэліцкі раён',
            'Лідскі раён',
            'Мастоўскі раён',
            'Навагрудскі раён',
            'Свіслацкі раён',
            'Слонімскі раён',
            'Смаргонскі раён',
            'Шчучынскі раён',
        ],
        'Магілёўская вобласць': [
            'Асіповіцкі раён',
            'Бабруйскі раён',
            'Быхаўскі раён',
            'Бялыніцкі раён',
            'Глускі раён',
            'Горацкі раён',
            'Дрыбінскі раён',
            'Касцюковіцкі раён',
            'Кіраўскі раён',
            'Клімавіцкі раён',
            'Клічаўскі раён',
            'Краснапольскі раён',
            'Круглянскі раён',
            'Крычаўскі раён',
            'Магілёўскі раён',
            'Мсціслаўскі раён',
            'Слаўгарадскі раён',
            'Хоцімскі раён',
            'Чавускі раён',
            'Чэрыкаўскі раён',
            'Шклоўскі раён',
        ],
    }

    districts: string[] = []

    constructor(private httpClient: HttpClient) {
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
        this.districts = this.regions[region as keyof typeof this.regions] || []
    }

    validateCentury(event: Event) {
        const input = event.target as HTMLInputElement
        input.value = input.value.replace(/[^0-9]/g, '')
    }

    getResource(resourceUrl: string): Observable<any> {
        return this.httpClient.get(resourceUrl)
    }

    getResourceWithParams(resourceUrl: string, params: HttpParams): Observable<any> {
        return this.httpClient.get(resourceUrl, { params })
    }

    getArchitecturalStyles() {
        this.getResource(this.getArchitecturalStylesUrl).subscribe((architecturalStyle: ArchitecturalStyle[]) => {
            this.architecturalStyles = architecturalStyle.sort((a, b) => a.name.localeCompare(b.name))
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

        this.httpClient.get(this.searchConstructionUrl, { params }).subscribe(answer => this.searchParams.emit(answer))
    }
}
