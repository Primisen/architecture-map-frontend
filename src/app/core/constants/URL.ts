import { environment } from "src/environments/environment"

const BASE_URL = environment.backendUrl
export const IMAGES_URL = BASE_URL + "/construction-images/"
export const GET_CONSTRUCTION_IMAGES_BY_ARCHITECTURAL_STYLE_URL = BASE_URL + "/construction-images/architectural-styles/"
export const ARCHITECTURAL_STYLES_URL = BASE_URL + "/architectural-styles/"
export const ARCHITECTS_URL = BASE_URL + "/architects/"
export const SOURCES_URL = BASE_URL +  "/sources/"
