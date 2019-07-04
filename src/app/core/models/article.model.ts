import { IProfile } from './profile.model';

export interface IArticle {
    slug: string;
    title: string;
    description: string;
    body: string;
    togList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: IProfile;
}