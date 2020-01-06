import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService) {}
    
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

    canActivate(path: ActivatedRouteSnapshot, route: RouterStateSnapshot) {
            return this.authService.isAuthenticated();
        }
}