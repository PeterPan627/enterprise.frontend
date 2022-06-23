import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { NbAuthService } from "@nebular/auth";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AppService } from "../../@services/app.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private appService: AppService,
    private authService: NbAuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isLogged = this.appService.isLogged();
    if (!isLogged) this.router.navigate(["auth/login"]);
    return isLogged;

    // return this.authService.isAuthenticatedOrRefresh().pipe(
    //   tap((authenticated) => {
    //     console.log("authenticated2", authenticated);
    //     if (!authenticated) {
    //       this.router.navigate(["auth/login"]);
    //     }
    //   })
    // );
  }
}
