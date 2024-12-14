export interface Media {
    id?:string;
    path:string;
    desc?: string;
    type:string;
    language?: string | string[];
    displayOrder?: number;
}
