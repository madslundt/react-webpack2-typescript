import { schema } from 'normalizr';
import { ICategoryApi, IRelationApi, ITraitApi } from './PanelModel';

const trait = new schema.Entity('traits');
const relation = new schema.Entity('relations');

const category = new schema.Entity('categories', {
    traits: [ trait ]
});

export const info = {
    categories: [ category ],
    relations: [ relation ]
};

export interface IInfoEntities {
    categories: {
        [id: string]: ICategoryApi
    },
    relations: {
        [id: number]: IRelationApi
    },
    traits: {
        [id: string]: ITraitApi
    }
}