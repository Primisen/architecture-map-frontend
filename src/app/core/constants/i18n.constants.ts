export const I18N = {
    STORAGE_KEY: 'language',
    DEFAULT_LANGUAGE: 'be',
    SUPPORTED_LANGUAGES: /en|be/,
} as const

export const I18N_SUPPORTED_LANGUAGES_LIST = [
    { code: 'be', label: 'BE' },
    { code: 'en', label: 'EN' },
] as const
