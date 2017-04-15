import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import ProfileImage from './ProfileImage'
import ProfileName from './ProfileName'
import { RouteComponentProps } from 'react-router'
import { bindActionCreators } from "redux";
import { IReducers } from "../infrastructure/rootReducers";
import styled from "styled-components";
import { IProfileApi } from "./ProfileMockApi";
import ProfileActions, { IProfileActions } from "./ProfileActions";

interface IState {
    profile: IProfileApi
    errors: any
}

interface IProps extends RouteComponentProps<{id: string}> {
    profile: IProfileApi
    actions: IProfileActions
}

// Smart/statefull component
export class ProfilePage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            profile: this.props.profile,
            errors: {}
        };
    }

    componentWillMount() {
        const profileId = this.props.match.params.id;
        this.props.actions.loadProfile(profileId).then(() => {
            document.title = `${this.props.profile.firstName}`;
        });
    }

    componentWillReceiveProps(nextProps: IProps) {
        const profileId = this.props.match.params.id;
        if (profileId !== nextProps.match.params.id) {
            // this.props.actions.loadProfile(profileId);
            this.setState({
                profile: nextProps.profile
            });
        }
    }


    render() {
        const { profileImage, firstName, lastName } = this.props.profile;

        const Container = styled.div`
            width: 100px;
            text-align: center;
            &>p {
                margin: 0;
            }
        `;

        return (
            <Container>
                <ProfileImage src={profileImage} />
                <ProfileName firstName={firstName} lastName={lastName} />
            </Container>
        )
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