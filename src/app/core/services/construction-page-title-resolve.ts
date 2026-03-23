import { inject, Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable, of, switchMap } from 'rxjs'
import { ConstructionService } from './construction/construction.service'
import { Construction } from '../models/construction'
import { APP_ROUTES } from '../constants/routes.constants'

@Injectable({
    providedIn: 'root',
})
export class ConstructionTitleResolver {
    private constructionService = inject(ConstructionService)

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string | Observable<string> | Promise<string> {
        const constructionId = route.paramMap.get(APP_ROUTES.CONSTRUCTION_ID)

        if (!constructionId) {
            return of(APP_ROUTES.NOT_FOUND)
        }

        return this.constructionService.getConstruction(constructionId).pipe(
            switchMap((constructionData: Construction) => {
                return of(constructionData.name)
            })
        )
    }
}
