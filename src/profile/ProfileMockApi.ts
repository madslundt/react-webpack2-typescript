import delay from '../infrastructure/api/apiMockDelay';

export interface IProfileApi {
    id: string;
    firstName: string;
    lastName: string;
    profileImage: string;
}

// This file mocks a web API by working with the hard-coded data below. It uses
// setTimeout to simulate the delay of an AJAX call. All calls return promises.
const profile : IProfileApi = {
    id: 'test',
    firstName: 'test',
    lastName: 'test',
    profileImage: '/images/profile.jpg'
};

class ProfileApi {
    static getProfile(id: string): Promise<IProfileApi> {
        return new Promise<IProfileApi>((resolve : any, reject : any) => {
            setTimeout(() => {
                if (id === profile.id) {
                    resolve(profile);
                } else {
                    reject('No profile with that id');
                }
            }, delay);
        });
    }
}

export default ProfileApi;