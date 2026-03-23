import { Component, inject } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { I18N } from '../../constants/i18n.constants'

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
})
export class NavComponent {
    isMenuOpen = false
    private translate = inject(TranslateService)

    menuItems = [
        { label: 'На галоўную', link: '/' },
        { label: 'Архітэктурныя стылі', link: '/architectural-styles' },
        { label: 'Архітэктары', link: '/architects' },
        { label: 'Крыніцы', link: '/sources' },
        { label: 'Адваротная сувязь', link: '/contacts' },
    ]

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen
    }

    switchLanguage(language: string): void {
        this.translate.use(language)
        localStorage.setItem(I18N.STORAGE_KEY, language)
    }
}
