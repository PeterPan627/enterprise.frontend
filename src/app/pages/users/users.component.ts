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

  test: any = [1, 2, 3];

  constructor(
    private router: Router,
    private toastrService: NbToastrService,
    private userService: UserService,
    private appService: AppService,
    private authService: AuthService
  ) {
    this.loadData();
  }

  loadData() {
    // this.source = [];
    this.userService.getAdminBoard().subscribe({
      next: (data) => {
        const parsed = JSON.parse(data);
        let result = [];
        const owner = this.appService.getMintInfo().owner;
        parsed.data.forEach((user) => {
          if (user.address !== owner) result.push(user);
        });
        console.log("result", result);
        this.source = result;
      },
      error: (err) => {},
    });
  }

  addRemoveToWhiteLists(user, isWhiteListed) {
    this.authService.setWhiteList(user.hash, isWhiteListed).subscribe({
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
