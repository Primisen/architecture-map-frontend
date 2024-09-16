import { Construction } from "./construction";
import { Image } from "./image";

export interface Architect {
    id: number;
    name: string;
    surname: string;
    middleName: string;
    yearsOfLife: string;
    shortWorkDescription: string;
    biographicalArticle: string;
    portraitImage: Image;
    constructions: Construction[];
}