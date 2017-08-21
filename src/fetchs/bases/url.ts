/**
 * url types and handler.
 */
import { IApiConfig } from '../config';

export type Api = string;

export type Param = number | string | boolean;

export interface IQuery {
    [field: string]: any;
}

export class Url {
    public static gen(api: IApiConfig, params: Param[], query: IQuery) {
        return '';
    }
}
