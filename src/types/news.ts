import type { Pageable } from './pageable';

export interface IResponseNews {
    content: INewPost[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
    pageable: Pageable;
}

export interface INewPost {
    id: number;
    newsTypeId: string;
    newsType: string;
    title: string;
    descriptions: string;
    createdDate: string;
    lang: string;
    photo: string;
    type: 'Event' | 'News';
    url: string;
}
