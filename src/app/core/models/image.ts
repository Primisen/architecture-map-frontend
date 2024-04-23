import { Source } from "./source";

export interface Image {
    id: number;
    url: string;
    show: boolean;
    source: Source;
    takenTime: string;
    author: string;
}