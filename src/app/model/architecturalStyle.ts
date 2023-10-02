import { Attribute } from "./attribute";

export interface ArchitecturalStyle{
    id: number;
    name: string;
    description: string;
    attributes: Attribute [];
}