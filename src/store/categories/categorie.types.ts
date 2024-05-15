export enum CATEGORIES_ACTION_TYPES {
    FETCH_CATEGORIES_START = "categorie/FETCH_CATEGORIES_START",
    FETCH_CATEGORIES_SUCCESS = "categorie/FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_FAILURE = "categorie/FETCH_CATEGORIES_FAILURE",
};

export type CategoryItem = {
    id: string,
    imageUrl: string,
    name: string,
    price: number
};

export type Category = {
    title: string,
    imageUrl: string,
    items: CategoryItem[]
};