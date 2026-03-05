import { environment } from 'src/environments/environment'

const BASE_URL = environment.backendUrl
export const IMAGES_URL = BASE_URL + '/construction-images/'
export const GET_SIMILAR_CONSTRUCTION_IMAGES_URL = BASE_URL + '/construction-images/similar/'
export const ARCHITECTURAL_STYLES_URL = BASE_URL + '/architectural-styles/'
export const ARCHITECTS_URL = BASE_URL + '/architects/'
export const SOURCES_URL = BASE_URL + '/sources/'
export const CONSTRUCTIONS_URL = BASE_URL + '/constructions/'
export const SEARCH_CONSTRUCTIONS_URL = BASE_URL + '/search/constructions'
