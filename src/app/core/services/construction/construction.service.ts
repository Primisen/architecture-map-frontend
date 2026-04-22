import { inject, Injectable } from '@angular/core'
import { URL } from '../../constants/URL.constants'
import { Construction } from '../../models/construction'
import { ApiService } from '../api.service'

@Injectable({
    providedIn: 'root',
})
export class ConstructionService {
    private apiService = inject(ApiService)

    getConstruction(constructionId: string) {
        return this.apiService.get<Construction>(URL.CONSTRUCTIONS + constructionId)
    }
}
