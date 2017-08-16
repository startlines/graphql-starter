/**
 * backend http basic service.
 */
import { Api, IQuery, Param } from './url';

export interface IBody {
    [key: string]: any;
}

export type Method = 'get' | 'post' | 'patch' | 'put' | 'delete';

export interface IHttpOptions {
    api: Api;
    params: Param[];
    query: IQuery;
}

export class Http {
    public static instance: Http;

    public static list<T>(api: Api, params: Param[], query: IQuery) {

    }

    public static detail<T>(api: Api, params: Param[], query: IQuery) {

    }

    public static create<T>(api: Api, params: Param[], body: IBody) {

    }

    public static update<T>(api: Api, params: Param[], body: IBody) {

    }

    public static delete<T>(api: Api, params: Param[]) {

    }

    public static buildMethod<T>(method: Method, options: IHttpOptions) {
        this.instance = this.instance || new Http();
        return;
    }
}
