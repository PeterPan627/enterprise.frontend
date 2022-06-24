import { Component, OnDestroy, OnInit, AfterViewInit } from "@angular/core";
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from "@nebular/theme";

import { LayoutService } from "../../../@core/utils";
import { map, takeUntil } from "rxjs/operators";
import { Subject, Observable, of } from "rxjs";
import { ConfigurationService } from "../../../@services/configuration.service";
import { Tenant } from "../../../@core/interfaces/common/tenant";
import { HttpClient } from "@angular/common/http";
import { AuthPipe } from "../../../@auth/auth.pipe";
import { NbAuthService } from "@nebular/auth";
import { AppService } from "../../../@services/app.service";

@Component({
  selector: "ngx-header",
  styleUrls: ["./header.component.scss"],
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  public tenant: Tenant;
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  companyName: string;
  userPhoto: string;

  themes = [
    {
      value: "default",
      name: "Light",
    },
    {
      value: "dark",
      name: "Dark",
    },
    {
      value: "cosmic",
      name: "Cosmic",
    },
    {
      value: "corporate",
      name: "Corporate",
    },
  ];

  currentTheme = "default";

  userMenu = this.getMenuItems();

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private appService: AppService,
    private configurationService: ConfigurationService,
    private breakpointService: NbMediaBreakpointsService
  ) {
    this.tenant = this.configurationService.configuration.tenant;
  }

  getMenuItems() {
    const userLink = this.user ? "/pages/users/current/" : "";
    return [
      { title: "Profile", link: userLink, queryParams: { profile: true } },
      { title: "Log out", link: "/auth/logout" },
    ];
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.user = this.appService.getUser();
    this.userMenu = this.getMenuItems();
    this.companyName = this.configurationService.configuration.tenant.name;
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl)
      );

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe((themeName) => (this.currentTheme = themeName));
  }

  ngAfterViewInit(): void {
    this.getUserPhoto();
  }

  getUserName(): string {
    return this.user ? this.user.firstName + " " + this.user.lastName : "";
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  getUserPhoto() {
    this.userPhoto = this.user.picture;
  }
}
