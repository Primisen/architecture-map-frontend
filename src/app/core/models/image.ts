import { Source } from "./source";

export interface Image {
    id: number;
    url: string;
    show: boolean;
    source: Source;
    author: string;
}