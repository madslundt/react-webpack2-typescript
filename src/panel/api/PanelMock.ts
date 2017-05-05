import delay from '../../infrastructure/api/apiMockDelay';
import {
    IPanelInfoApi,
    ICategoryApi,
    ITraitApi,
    IRelationApi
} from './PanelModel'

const info: IPanelInfoApi = {
    categories: [
        {
            id: "a",
            name: "Category A",
            description: "Description A",
            orderIndex: 1,
            traits: [
                {
                    id: "a1",
                    name: "Trait 1",
                    description: "Description A1",
                    orderIndex: 1
                },
                {
                    id: "a2",
                    name: "Trait 2",
                    description: "Description A2",
                    orderIndex: 2
                },
            ]
        },
        {
            id: "b",
            name: "Category B",
            description: "Description B",
            orderIndex: 2,
            traits: [
                {
                    id: "b1",
                    name: "Trait 1",
                    description: "Description B1",
                    orderIndex: 1
                },
                {
                    id: "a2",
                    name: "Trait 2",
                    description: "Description B2",
                    orderIndex: 2
                },
            ]
        }
    ],
    relations: [
        {
            id: 1,
            name: "A"
        },
        {
            id: 2,
            name: "B"
        },
        {
            id: 3,
            name: "C"
        },
        {
            id: 4,
            name: "D"
        }
    ]
};


class PanelMock {
    static getPanelInfo(): Promise<IPanelInfoApi> {
        return new Promise<IPanelInfoApi>((resolve, reject) => {
            setTimeout(() => {
                resolve(info);
            }, delay);
        });
    }
}

export default PanelMock;