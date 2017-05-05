import { IProfileApi } from '../profile/ProfileMockApi';
import * as React from 'react';
import * as schema from './api/PanelSchema';
import { denormalize } from 'normalizr';
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { bindActionCreators } from "redux";
import { IReducers } from "../infrastructure/rootReducers";
import styled, {ThemedStyledProps} from "styled-components";
import {ICategoryApi, IPanelInfoApi, IRelationApi, ITraitApi} from './api/PanelModel';
import PanelActions, { IPanelActions } from "./PanelActions";
import NotFound from "../infrastructure/404";
import { isEmpty } from 'lodash';
import Category from './CategoryPanel';
import colors from './CategoryColors';
import {Motion, spring} from 'react-motion';
import Relation from './RelationPanel';

interface IState {
    selectedTraits: {
        [key: string]: ITraitApi
    },
    selectedRelation?: IRelationApi,
    index: number
}
interface IProps extends RouteComponentProps<{id: string}> {
    categories: ICategoryApi[],
    relations: IRelationApi[],
    profile: IProfileApi,
    panel: any,
    actions: IPanelActions
}


// Smart/stateful component
export class PanelPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            selectedTraits: {},
            selectedRelation: undefined,
            index: 0
        };

        this.clickTrait = this.clickTrait.bind(this);
    }

    componentWillMount() {
        if (!this.props.categories.length && !this.props.panel.fetching && !this.props.panel.error) {
            this.props.actions.loadPanelInfo();
        }
    }

    clickTrait(categoryId: string, trait: ITraitApi) {
        const selectedTrait = this.state.selectedTraits[categoryId];
        if (!selectedTrait || selectedTrait.id !== trait.id) {
            console.log('selected trait', trait);
            this.setState({
                selectedTraits: { ...this.state.selectedTraits, [categoryId]: trait }
            });
        }

        this.setState({
            index: this.state.index + 1
        });
    }

    clickRelation(relation: IRelationApi) {
        const selectedRelation = this.state.selectedRelation;
        if (!selectedRelation || selectedRelation.id !== relation.id) {
            this.setState({
                selectedRelation: relation
            });
        }

        this.setState({
            index: this.state.index + 1
        });
    }

    render() {
        const Container = styled.ul`
            display: block;
        `;

        type CategoryContainerProps = ThemedStyledProps<{active: boolean}, any>;
        type RelationContainerProps = ThemedStyledProps<{active: boolean}, any>;
        const CategoryContainer = styled.li`
            display: ${(props: CategoryContainerProps) => props.active ? 'block' : 'none'};
        ` as ThemedStyledProps<any, void>;

        const RelationContainer = styled.li`
            display: ${(props: RelationContainerProps) => props.active ? 'block' : 'none'};
        ` as ThemedStyledProps<any, void>;

        const { categories, relations } = this.props;
        const currentIndex = this.state.index;
        return (
            <Container>
                {categories.map((category, index) =>
                    <CategoryContainer
                        key={category.id}
                        active={index === currentIndex}>
                        <Category
                            colors={colors[index]}
                            traits={category.traits}
                            category={category}
                            selectedTrait={this.state.selectedTraits[category.id]}
                            clickTrait={(trait: ITraitApi) => this.clickTrait(category.id, trait)}
                        />
                    </CategoryContainer>
                )}

                <RelationContainer active={currentIndex === categories.length}>
                    <Relation
                        relations={relations}
                        selectedRelation={this.state.selectedRelation}
                        clickRelation={(relation: IRelationApi) => this.clickRelation(relation)}
                    />
                </RelationContainer>
            </Container>
        );
    }
}


const mapStateToProps = (state: IReducers) => {
    const categoryValues = {
        categories: Object.keys(state.panels.categories),
    };
    const relationValues = {
        relations: Object.keys(state.panels.relations)
    }

    return {
        ...denormalize(categoryValues, schema.info, state.panels),
        ...denormalize(relationValues, schema.info, state.panels),
        panel: state.panels
    }
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        actions: bindActionCreators(PanelActions, dispatch)
    };
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(PanelPage);