import { Source } from "./source";
import { VisualType } from "./visual-type";

export interface Image {
    id: number;
    url: string;
    show: boolean;
    source: Source;
    takenTime: string;
}