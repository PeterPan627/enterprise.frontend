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
import { KeplrService } from "../../@services/keplr.service";
import { contractAddress } from "../../../environments/config";

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
    private authService: AuthService,
    private keplrService: KeplrService
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
        // queries = [];
        parsed.data.forEach((user) => {
          if (account.address !== user.address) {
            if (this.isAdmin) {
              result.push({
                ...user,
                sendId: `send-${user.hash}`,
                getId: `get-${user.hash}`,
              });
              // queries.push(
              //   this.keplrService.getBalance(user.custom_wallet_address)
              // );
            } else if (!user.isAdmin) {
              result.push({
                ...user,
                sendId: `send-${user.hash}`,
                getId: `get-${user.hash}`,
              });
              // queries.push(
              //   this.keplrService.getBalance(user.custom_wallet_address)
              // );
            }
          }
        });
        // console.log("queries", queries);
        // if (queries.length) {
        //   Promise.all(queries).then((queryResults) => {
        //     queryResults.forEach((queryResult, index) => {
        //       this.source[index].balance = `${(
        //         +queryResult.amount / 1e6
        //       ).toFixed(2)}JUNO`;
        //     });
        //   });
        // }
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

  async setRemoveAdmin(user, isAdmin) {
    await this.keplrService.runExecute(contractAddress, {
      [isAdmin === "true" ? "add_admin" : "delete_admin"]: {
        ...(isAdmin === "true"
          ? {
              admin: {
                address: user.custom_wallet_address,
                name: "",
                email: "",
              },
            }
          : { admin: user.custom_wallet_address }),
      },
    });
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

  async sendToken(user) {
    const inputElement: any = document.getElementById(`send-${user.hash}`);
    const amount = Number(inputElement.value);
    if (!isNaN(amount) && amount) {
      await this.keplrService.sendToken(amount, user.custom_wallet_address);
      inputElement.value = "";
      this.loadData();
    }
  }

  async getToken(user) {
    const storedObjectString = window.localStorage.getItem("account-info");
    const storedObject = storedObjectString
      ? JSON.parse(storedObjectString)
      : null;

    const inputElement: any = document.getElementById(`get-${user.hash}`);
    const amount = Number(inputElement.value);
    if (!isNaN(amount) && amount) {
      this.userService
        .getToken(amount, user.hash, storedObject.hash)
        .subscribe({
          next: (data) => {
            inputElement.value = "";
            this.loadData();
          },
          error: (err) => {
            console.log("fail", err);
          },
        });
    }
  }
}
