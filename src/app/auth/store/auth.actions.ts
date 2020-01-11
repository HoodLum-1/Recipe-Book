import { Action } from '@ngrx/store';

export const SIGNUP = 'SINGUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class Signup implements Action {
    readonly type = SIGNUP;
}

export class Singin implements Action {
    readonly type = SIGNIN;
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;

    constructor(public payload: string) {}
}

export type AuthActions = Signup | Singin | Logout | SetToken;