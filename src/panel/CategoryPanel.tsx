import * as React from 'react';
import styled, {ThemedStyledProps} from 'styled-components';
import {ICategoryApi, ITraitApi} from "./api/PanelModel";

export interface ICategoryColor {
    defaultText: string,
    defaultBackground: string
}
export interface ITraitColor {
    defaultText: string,
    defaultBackground: string,
    selectedText: string,
    selectedBackground: string
}

export interface IProps {
    category: ICategoryApi,
    traits: ITraitApi[],
    selectedTrait: ITraitApi,
    colors: {
        trait: ITraitColor
    } & ICategoryColor,

    clickTrait(trait: ITraitApi): void
}

// Dumb/stateless component
const CategoryPanel = (props: IProps) => {
    const { category, traits, clickTrait, selectedTrait, colors } = props;

    type CategoryProps = ThemedStyledProps<{colors: ICategoryColor}, any>;
    type TraitProps = ThemedStyledProps<{selected: boolean, colors: ITraitColor}, any>;

    const CategoryContainer = styled.ul`
        color: ${(props: CategoryProps) => props.colors.defaultText};
        background-color: ${(props: CategoryProps) => props.colors.defaultBackground};
        padding: 15px;
    ` as ThemedStyledProps<any, void>;

    const TraitContainer = styled.li`
        display: inline-block;
        width: 50%;
        box-sizing: border-box;
        padding: 10px;
        user-select: none;
    `;

    const Trait = styled.div`
        transition: .3s ease-in-out all;
        cursor: pointer;
        padding: 15px;
        color: ${(props: TraitProps) => props.selected ? props.colors.selectedText : props.colors.defaultText};
        background-color: ${(props: TraitProps) => props.selected ? props.colors.selectedBackground : props.colors.defaultBackground};
        box-sizing: border-box;
        padding: 15px;
        border: 1px solid ${(props: TraitProps) => props.selected ? props.colors.selectedBackground : props.colors.defaultText};
        border-radius: 10px;
    ` as ThemedStyledProps<any, {selected: boolean}>;
    return (
        <CategoryContainer colors={colors}>
            <div>{category.name}</div>
            {props.traits.map(trait => {
                return (
                    <TraitContainer key={trait.id}>
                            <Trait
                                onClick={() => clickTrait(trait)}
                                colors={colors.trait}
                                selected={selectedTrait && selectedTrait.id === trait.id}
                            >
                                {trait.name}
                            </Trait>
                    </TraitContainer>
                );
            })}
        </CategoryContainer>
    );
}

export default CategoryPanel;
