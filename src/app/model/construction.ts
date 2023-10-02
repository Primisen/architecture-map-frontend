import { Address } from "./address";
import { Architect } from "./architect";
import { ArchitecturalStyle } from "./architecturalStyle";
import { Photo } from "./photo";

export interface Construction {
    id: number;
    name: string;
    address: Address;
    photos: Photo[];
    architecturalStyle: ArchitecturalStyle;
    buildingTime: string;
    architects: Architect[];
    description: string;
}