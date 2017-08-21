import { Api } from './bases';

export interface IApiConfig {
    api: string;
    desc: string;
    mock?: boolean;
}

export interface IServerConfig {
    online: string;
    offline: string;
    desc: string;
    apis: [IApiConfig | { [api: string]: IApiConfig }];
}

export const APIs = {
    github: {
        user: {
            api: '/user',
            desc: 'users',
            mock: false,
        },
    },
};

export const SERVERs: { [name: string]: IServerConfig } = {
    github: {
        online: 'api.github.com',
        offline: 'api.github.com',
        desc: 'github apis.',
        apis: [
            APIs.github,
        ],
    },
};
