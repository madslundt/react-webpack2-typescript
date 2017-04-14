import * as React from 'react';
import Avatar from 'material-ui/Avatar';

export interface IProps {
    src: string
}

// Dumb/stateless component
const ProfileImage = (props: IProps) => {
    const { src } = props;

    return <Avatar backgroundColor="#eee" size={100} src={src} />;
}

export default ProfileImage;
