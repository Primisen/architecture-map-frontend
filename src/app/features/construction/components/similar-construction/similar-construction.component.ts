import { Component, inject, Input, OnInit, signal } from '@angular/core'
import { GET_SIMILAR_CONSTRUCTION_IMAGES_URL } from '../../../../core/constants/URL'
import { ConstructionImage } from '../../../../core/models/constructionImage'
import { ApiService } from 'src/app/core/services/api.service'

@Component({
    selector: 'app-similar-construction',
    templateUrl: './similar-construction.component.html',
    styleUrls: ['./similar-construction.component.css'],
})
export class SimilarConstructionComponent implements OnInit {
    @Input() constructionId = 0
    similarConstructionImages = signal<ConstructionImage[]>([])
    loading = true
    private apiService = inject(ApiService)

    ngOnInit() {
        this.findSimilarConstructions(this.constructionId)
        this.loading = false
    }

    private findSimilarConstructions(constructionId: number) {
        this.loading = true
        this.apiService.get<ConstructionImage[]>(GET_SIMILAR_CONSTRUCTION_IMAGES_URL + constructionId).subscribe(images => {
            this.similarConstructionImages.set(images)
        })
    }
}
