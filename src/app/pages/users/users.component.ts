/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 *
 */

import { Component, OnDestroy } from "@angular/core";

import { NbToastrService } from "@nebular/theme";
import { Router, Data } from "@angular/router";
import { DataSource } from "ng2-smart-table/lib/lib/data-source/data-source";
import { UserService } from "../../@services/user.service";
import { AppService } from "../../@services/app.service";
import { AuthService } from "../../@services/auth.service";

@Component({
  selector: "ngx-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnDestroy {
  private alive = true;

  source: any;
  isAdmin: boolean;
  myHash: string;

  test: any = [1, 2, 3];

  constructor(
    private router: Router,
    private toastrService: NbToastrService,
    private userService: UserService,
    private appService: AppService,
    private authService: AuthService
  ) {
    this.isAdmin = this.appService.getIsAdmin();
    this.myHash = this.appService.getUser().hash;
    this.loadData();
  }

  loadData() {
    // this.source = [];
    const account = this.appService.getUser();
    this.userService.getAdminBoard().subscribe({
      next: (data) => {
        const parsed = JSON.parse(data);
        let result = [];
        parsed.data.forEach((user) => {
          if (account.address !== user.address) {
            if (this.isAdmin) {
              result.push(user);
            } else if (!user.isAdmin) {
              result.push(user);
            }
          }
        });
        this.source = result;
      },
      error: (err) => {},
    });
  }

  addRemoveToWhiteLists(user, isWhiteListed) {
    const account = this.appService.getUser();
    this.authService
      .setWhiteList(user.hash, account.hash, isWhiteListed)
      .subscribe({
        next: (data) => {
          this.loadData();
        },
        error: (err) => {},
      });
  }

  setRemoveAdmin(user, isAdmin) {
    const account = this.appService.getUser();
    this.authService.setAdmin(user.hash, account.hash, isAdmin).subscribe({
      next: (data) => {
        this.loadData();
      },
      error: (err) => {},
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
