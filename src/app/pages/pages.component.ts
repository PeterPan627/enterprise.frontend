import { Component, OnDestroy, OnInit } from "@angular/core";
import { takeWhile } from "rxjs/operators";
import { NbTokenService } from "@nebular/auth";
import { NbMenuItem, NbIconLibraries } from "@nebular/theme";
import { PagesMenu } from "./pages-menu";
import { UsersService } from "../@core/backend/common/services/users.service";

@Component({
  selector: "ngx-pages",
  styleUrls: ["pages.component.scss"],
  templateUrl: "./pages.component.html",
})
export class PagesComponent implements OnDestroy, OnInit {
  ngOnInit(): void {
    this.initMenu();
  }

  menu: NbMenuItem[];
  alive: boolean = true;

  constructor(
    private pagesMenu: PagesMenu,
    private tokenService: NbTokenService,
    private iconsLibrary: NbIconLibraries,
    protected initUserService: UsersService
  ) {
    this.iconsLibrary.registerFontPack("fa", {
      packClass: "fa",
      iconClassPrefix: "fa",
    });
    this.initMenu();
    this.tokenService
      .tokenChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        this.initMenu();
      });
  }

  initMenu() {
    this.pagesMenu
      .getMenu()
      .pipe(takeWhile(() => this.alive))
      .subscribe((menu) => {
        this.menu = menu;
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
