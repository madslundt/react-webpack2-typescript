import { IRelationApi } from './api/PanelModel';
import * as React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';

export interface IProps {
    relations: IRelationApi[],
    selectedRelation?: IRelationApi,
    clickRelation(trait: IRelationApi): void
}

type RelationProps = ThemedStyledProps<{selected: boolean}, any>;

const RelationContainer = styled.ul`
    color: #fff;
    background-color: #000;
    padding: 15px;
`;

const RelationElement = styled.li`
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    user-select: none;
`;

const Relation = styled.div`
    transition: .3s ease-in-out all;
    cursor: pointer;
    padding: 15px;
    color: ${(props: RelationProps) => props.selected ? '#000' : '#fff'};
    background-color: ${(props: RelationProps) => props.selected ? '#fff' : '#000'};
    box-sizing: border-box;
    padding: 15px;
    border: 1px solid ${(props: RelationProps) => props.selected ? '#000' : '#fff'};;
    border-radius: 10px;
` as ThemedStyledProps<any, {selected: boolean}>;

// Dumb/stateless component
const RelationPanel = (props: IProps) => {
    const { relations, selectedRelation, clickRelation } = props;

    return <RelationContainer>
        <div>Relation</div>
        {props.relations.map(relation => {
            return (
                <RelationElement key={relation.id}>
                    <Relation
                        onClick={() => clickRelation(relation)}
                        selected={selectedRelation && selectedRelation.id === relation.id}
                    >
                        {relation.name}
                    </Relation>
                </RelationElement>
            )
        })}
    </RelationContainer>;
}

export default RelationPanel;
