import { Component, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";

import { NbAuthService } from "@nebular/auth";
import { takeWhile } from "rxjs/operators";
import { NbThemeService } from "@nebular/theme";

@Component({
  selector: "ngx-auth",
  styleUrls: ["./auth.component.scss"],
  template: `
    <nb-layout>
      <nb-layout-column>
        <div class="welcome-container">
          <h4 class="welcome-title">Welcome to the</h4>
          <h1 class="welcome-title">dERP Launchpad</h1>
          <h5>
            <span class="welcome-description-accent">Work</span
            ><span class="welcome-description">efficiently</span>
          </h5>
          <h5>
            <span class="welcome-description-accent">Earn</span
            ><span class="welcome-description">securely</span>
          </h5>
        </div>
        <nb-card>
          <nb-card-header>
            <img src="./assets/images/LS_Logo.png" alt="" />
            <nav class="navigation">
              <a
                href="#"
                (click)="back()"
                class="link back-link"
                aria-label="Back"
              >
                <nb-icon icon="arrow-back"></nb-icon>
              </a>
            </nav>
          </nb-card-header>
          <nb-card-body>
            <nb-auth-block>
              <router-outlet></router-outlet>
            </nb-auth-block>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class NgxAuthComponent implements OnDestroy {
  private alive = true;

  subscription: any;

  authenticated: boolean = false;
  token: string = "";

  // showcase of how to use the onAuthenticationChange method
  constructor(
    protected auth: NbAuthService,
    protected location: Location,
    private themeService: NbThemeService
  ) {
    this.themeService.changeTheme("corporate");
    this.subscription = auth
      .onAuthenticationChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe((authenticated: boolean) => {
        this.authenticated = authenticated;
      });
  }

  back() {
    this.location.back();
    return false;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
