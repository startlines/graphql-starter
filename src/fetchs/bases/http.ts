/**
 * backend http basic service.
 */
import fetch from 'node-fetch';
import { IApiConfig } from '../config';
import { Api, IQuery, Param, Url } from './url';

export interface IBody {
    [key: string]: any;
}

export interface IHeader {
    [key: string]: any;
}

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IHttpOptions {
    api: IApiConfig;
    params?: Param[];
    query?: IQuery;
    body?: IBody;
    header?: IHeader;
}

export class Http {
    public static list<T>(options: IHttpOptions) {
        return Http.buildMethod<T[]>('GET', options);
    }

    public static detail<T>(options: IHttpOptions) {
        return Http.buildMethod<T>('GET', options);
    }

    public static create<T>(options: IHttpOptions) {
        return Http.buildMethod<T>('POST', options);
    }

    public static update<T>(options: IHttpOptions) {
        return Http.buildMethod<T>('PUT', options);
    }

    public static delete<T>(options: IHttpOptions) {
        return Http.buildMethod<T>('DELETE', options);
    }

    public static buildMethod<T>(method: Method, options: IHttpOptions) {
        const { api, params, query, body, header } = options;

        return fetch(Url.gen(api, params, query));
    }
}
