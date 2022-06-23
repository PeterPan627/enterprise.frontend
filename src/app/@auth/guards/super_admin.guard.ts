

// tslint:disable: no-console
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NbRoleProvider } from '@nebular/security';
import { ROLES } from '../roles';

@Injectable()
export class SuperAdminGuard implements CanActivate {
  constructor(private router: Router, private roleProvider: NbRoleProvider) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
      return this.roleProvider.getRole()
      .pipe(map(role => {
        const roles = role instanceof Array ? role : [role];
        console.log(roles);
        return roles.some(x => x &&
          (x.toLowerCase() === ROLES.SUPER_ADMIN
        || x.toLowerCase() === ROLES.GLOBAL_ADMIN));
      })).pipe(tap((allowed) => {
        console.log(allowed);
        if (!allowed) {
          this.router.navigate(['/pages/error/403']);
        }
        return allowed;
      }));
  }
}
