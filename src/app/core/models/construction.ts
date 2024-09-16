import { Address } from "./address";
import { Architect } from "./architect";
import { ArchitecturalStyle } from "./architecturalStyle";
import { ConstructionImage } from "./constructionImage";
import { Image } from "./image";

export interface Construction {
    id: number;
    name: string;
    buildingDate: string;
    address: Address;
    architecturalStyle: ArchitecturalStyle;
    architects: Architect[];
    description: string;
    images: ConstructionImage[];
}