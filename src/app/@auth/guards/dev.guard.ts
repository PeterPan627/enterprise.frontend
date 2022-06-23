import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { AuthGuard } from './auth.guard';
@Injectable()
export class DevGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
        const isDevEnvironment = !environment.production;
        if (!isDevEnvironment) {
            this.router.navigate(['/pages/error/404']);
        }
        return isDevEnvironment;
    }

}
