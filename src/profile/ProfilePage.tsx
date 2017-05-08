import Panel from '../panel/PanelPage';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux'
import ProfileImage from './ProfileImage'
import ProfileName from './ProfileName'
import { RouteComponentProps } from 'react-router'
import { bindActionCreators } from "redux";
import { IReducers } from "../infrastructure/rootReducers";
import styled from "styled-components";
import { IProfileApi } from "./ProfileMockApi";
import ProfileActions, { IProfileActions } from "./ProfileActions";
import NotFound from "../infrastructure/404";
import { isEmpty } from 'lodash';

interface IState {
    success: Boolean,
    error: any
}

interface IProps extends RouteComponentProps<{id: string}> {
    profile: IProfileApi
    actions: IProfileActions
}

// Smart/statefull component
export class ProfilePage extends React.Component<IProps, IState> {
    constructor(props: IProps, context: any) {
        super(props, context);

        this.state = {
            success: false,
            error: {}
        };
    }

    componentWillMount() {
        const profileId = this.props.match.params.id;
        this.props.actions.loadProfile(profileId).then(() => {
            this.setState({
                success: true
            });
            document.title = `${this.props.profile.firstName}`;
        }).catch(error => {
            this.setState({
                error: error
            });
        });
    }

    render() {
        const { profile } = this.props;

        const Container = styled.div`
            width: 500px;
            text-align: center;
            &>p {
                margin: 0;
            }
        `;

        if (this.state.success) {
            return (
                <Container>
                    <div>
                        <ProfileImage src={profile.profileImage} />
                        <ProfileName firstName={profile.firstName} lastName={profile.lastName} />
                    </div>

                    <Panel profile={profile} />
                </Container>
            );
        } else if (!isEmpty(this.state.error)) {
            return <NotFound />;
        } else {
            return <Container />;
        }
    }
}


const mapStateToProps = (state: IReducers) => {
    return {
        profile: state.profiles
    }
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        actions: bindActionCreators(ProfileActions, dispatch)
    };
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(ProfilePage);