import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<fromApp.AppState>) {}
    
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

    canActivate(path: ActivatedRouteSnapshot, route: RouterStateSnapshot) {
            return this.store.select('auth').pipe(
                map(
                    (authState: fromAuth.State) => {
                        return authState.authenticated;
                    }
                )
            );
        }
}   