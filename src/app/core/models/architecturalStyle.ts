import { Attribute } from "./attribute";
import { Image } from "./image";

export interface ArchitecturalStyle{
    id: number;
    name: string;
    description: string;
    attributes: Attribute [];
    shortDescription: string;
    yearsActive: string;
    demonstrativeImage: Image;
}