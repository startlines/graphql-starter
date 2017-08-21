import { Date, ObjectId } from './public';

export type UserId = ObjectId;

export interface IUser {
    _id?: UserId;
    name?: string;
    create_at?: Date;
    update_at?: Date;
}
