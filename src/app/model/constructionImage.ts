import { Source } from "./source";
import { Address } from "./address";
import { Construction } from "./construction";

export interface ConstructionImage {
    id: number;
    url: string;
    source: Source;
    construction: Construction;
    constructionId: number;
    architecturalStyleName: string;
    addressDto: Address;
    takenTime: string;
    author: string;
    description: string;
}