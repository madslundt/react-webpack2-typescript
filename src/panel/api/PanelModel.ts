export interface IPanelInfoApi {
    categories: ICategoryApi[],
    relations: IRelationApi[]
}

export interface ICategoryApi {
    id: string,
    name: string,
    description: string,
    orderIndex: number,
    traits: ITraitApi[]
}
export interface ITraitApi {
    id: string,
    name: string,
    description: string,
    orderIndex: number
}

export interface IRelationApi {
    id: number,
    name: string
}