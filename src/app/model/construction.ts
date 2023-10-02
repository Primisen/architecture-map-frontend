import { Address } from "./address";
import { Architect } from "./architect";
import { ArchitecturalStyle } from "./architecturalStyle";
import { Image } from "./image";

export interface Construction {
    id: number;
    name: string;
    buildingTime: string;
    address: Address;
    architecturalStyle: ArchitecturalStyle;
    architects: Architect[];
    description: string;
    images: Image[];
}