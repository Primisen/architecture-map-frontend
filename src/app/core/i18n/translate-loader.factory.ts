import { HttpClient } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { I18N_DEFAULT_LANGUAGE, I18N_STORAGE_KEY, I18N_SUPPORTED_LANGUAGES } from '../constants/i18n.constants'
import { TranslateService } from '@ngx-translate/core'

export function translateHttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

export function translateInitializerFactory(translateService: TranslateService) {
    return () => {
        translateService.setDefaultLang(I18N_DEFAULT_LANGUAGE)
        const savedLanguage =
            localStorage.getItem(I18N_STORAGE_KEY) || navigator.language.split('-')[0] || I18N_DEFAULT_LANGUAGE
        const validLanguage = savedLanguage.match(I18N_SUPPORTED_LANGUAGES) ? savedLanguage : I18N_DEFAULT_LANGUAGE
        return translateService.use(validLanguage)
    }
}
