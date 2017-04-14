import * as React from 'react';

export interface IProps {
    firstName: string;
    lastName: string;
}

// Dumb/stateless component
const ProfileName = (props: IProps) => {
    const { firstName, lastName } = props;

    return <p>{firstName} {lastName}</p>;
}

export default ProfileName;
