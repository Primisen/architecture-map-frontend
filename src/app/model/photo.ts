import { Source } from "./source";
import { VisualType } from "./visual-type";

export interface Photo {
    id: number;
    urlAddressToPhoto: string;
    source: Source;
    show: boolean;
}