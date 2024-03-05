import { ArchitectImage } from "./architectImage";
import { Construction } from "./construction";

export interface Architect {
    id: number;
    name: string;
    surname: string;
    middleName: string;
    yearsOfLife: string;
    workDescription: string;
    image: ArchitectImage;
    constructions: Construction[];
}