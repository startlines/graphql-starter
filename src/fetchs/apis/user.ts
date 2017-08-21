import { IConditions, IUser, UserId } from '../types';
import { BaseAPI } from './base';

export interface IUserListConditions extends IUser {
    name: string;
}

export class UserAPI extends BaseAPI {
    public list(conditions: IUserListConditions) {
        return this.http.list<IUser>({
            api: this.apis.github.user,
            query: conditions,
        });
    }

    public detail(user_id: UserId) {
        return this.http.detail<IUser>({
            api: this.apis.github.user,
            params: [user_id],
        });
    }

    public create(new_user: IUser) {
        return this.http.create<IUser>({
            api: this.apis.github.user,
            body: new_user,
        });
    }

    public update(user_id: UserId, new_user: IUser) {
        return this.http.update<IUser>({
            api: this.apis.github.user,
            params: [user_id],
            body: new_user,
        });
    }

    public delete(user_id: UserId) {
        return this.http.delete<IUser>({
            api: this.apis.github.user,
            params: [user_id],
        });
    }
}
