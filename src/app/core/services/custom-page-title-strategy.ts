import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { RouterStateSnapshot, TitleStrategy } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'

@Injectable({
    providedIn: 'root',
})
export class CustomPageTitleStrategy extends TitleStrategy {
    constructor(
        private readonly title: Title,
        private translateService: TranslateService
    ) {
        super()
    }

    override updateTitle(routerState: RouterStateSnapshot): void {
        const title = this.buildTitle(routerState)
        if (title) {
            this.translateService.get(title).subscribe((translatedTitle) => {
                this.title.setTitle(`${translatedTitle}`)
            })
        }
    }
}
