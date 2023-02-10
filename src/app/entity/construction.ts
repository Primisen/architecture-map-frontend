import { Address } from "./address";
import { ArchitecturalStyle } from "./architectural-style";
import { Photo } from "./photo";

export interface Construction {
    id: number;
    name: string;
    address: Address;
    photos: Photo [];
    architecturalStyle: ArchitecturalStyle;
    buildingTime: string;
}