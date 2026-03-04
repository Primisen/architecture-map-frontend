import { Component, inject } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

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

    switchLanguage(lang: string): void {
        this.translate.use(lang)
    }
}
