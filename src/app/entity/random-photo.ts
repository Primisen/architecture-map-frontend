import { Source } from "./source";

export interface RandomPhoto {
    id: number;
    urlAddressToPhoto: string;
    constructionId: number;
    source: Source;
    architecturalStyleName: string;
}