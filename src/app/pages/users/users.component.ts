/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 *
 */

import { Component, OnDestroy } from "@angular/core";

import { NbToastrService } from "@nebular/theme";
import { Router } from "@angular/router";
import { DataSource } from "ng2-smart-table/lib/lib/data-source/data-source";

@Component({
  selector: "ngx-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnDestroy {
  private alive = true;

  settings = {
    mode: "external",
    actions: {
      add: false,
      delete: false,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
    },
    columns: {
      firstName: {
        title: "First Name",
        type: "string",
      },
      lastName: {
        title: "Last Name",
        type: "string",
      },
      login: {
        title: "User Name",
        type: "string",
      },
      email: {
        title: "Email",
        type: "string",
      },
    },
  };

  source: DataSource;

  constructor(private router: Router, private toastrService: NbToastrService) {
    this.loadData();
  }

  loadData() {
    // this.source = [];
  }

  onEdit($event: any) {
    this.router.navigate([`/pages/users/edit/${$event.data.id}`]);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
