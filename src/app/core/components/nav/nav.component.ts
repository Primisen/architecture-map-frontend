import { Component, inject } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { I18N, I18N_SUPPORTED_LANGUAGES_LIST } from '../../constants/i18n.constants'
import { APP_ROUTES } from '../../constants/routes.constants'

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
})
export class NavComponent {
    isMenuOpen = false
    languages = I18N_SUPPORTED_LANGUAGES_LIST
    private translate = inject(TranslateService)

    menuItems = [
        { label: 'NAVBAR.HOME', link: '' },
        { label: 'NAVBAR.ARCHITECTURAL_STYLES', link: APP_ROUTES.ARCHITECTURAL_STYLES },
        { label: 'NAVBAR.ARCHITECTS', link: APP_ROUTES.ARCHITECTS },
        { label: 'NAVBAR.SOURCES', link: APP_ROUTES.SOURCES },
        { label: 'NAVBAR.CONTACTS', link: APP_ROUTES.CONTACTS },
    ]

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen
    }

    switchLanguage(language: string): void {
        this.translate.use(language)
        localStorage.setItem(I18N.STORAGE_KEY, language)
    }
}
