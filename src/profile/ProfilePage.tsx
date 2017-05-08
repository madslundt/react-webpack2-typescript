import Panel from '../panel/PanelPage';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux'
import ProfileImage from './ProfileImage'
import ProfileName from './ProfileName'
import { RouteComponentProps } from 'react-router'
import { bindActionCreators } from "redux";
import { IReducers } from "../infrastructure/rootReducers";
import styled from "styled-components";
import { IProfile } from "./ProfileReducer";
import ProfileActions, { IProfileActions } from "./ProfileActions";
import NotFound from "../infrastructure/404";
import { isEmpty } from 'lodash';

interface IProps extends RouteComponentProps<{id: string}> {
    profile: IProfile
    actions: IProfileActions
}

// Smart/statefull component
export class ProfilePage extends React.Component<IProps, void> {
    constructor(props: IProps, context: any) {
        super(props, context);
    }

    componentWillMount() {
        const profileId = this.props.match.params.id;
        this.props.actions.loadProfile(profileId).then(() => {
            document.title = `${this.props.profile.firstName}`;
        })
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

        if (!profile.isRequesting && profile.error === null) {
            return (
                <Container>
                    <div>
                        <ProfileImage src={profile.profileImage} />
                        <ProfileName firstName={profile.firstName} lastName={profile.lastName} />
                    </div>

                    <Panel profile={profile} />
                </Container>
            );
        } else if (!profile.isRequesting && profile.error !== null) {
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