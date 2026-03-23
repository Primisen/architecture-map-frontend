import { environment } from 'src/environments/environment'
import { APP_ROUTES } from './routes.constants'

const BASE_URL = environment.backendUrl
const buildUrl = (path: string) => `${BASE_URL}/${path}/`

export const URL = {
    IMAGES: buildUrl(APP_ROUTES.IMAGES),
    GET_SIMILAR_CONSTRUCTION_IMAGES: BASE_URL + '/construction-images/similar/',
    ARCHITECTURAL_STYLES: buildUrl(APP_ROUTES.ARCHITECTURAL_STYLES),
    ARCHITECTS: buildUrl(APP_ROUTES.ARCHITECTS),
    SOURCES: buildUrl(APP_ROUTES.SOURCES),
    CONSTRUCTIONS: buildUrl(APP_ROUTES.CONSTRUCTIONS),
    SEARCH_CONSTRUCTIONS: BASE_URL + '/search/constructions',
} as const
