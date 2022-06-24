import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { TestComponent } from "./test/test.component";
import { UsersComponent } from "./users/users.component";
import { DevGuard } from "../@auth/guards/dev.guard";
import { AdminGuard } from "../@auth/guards/admin.guard";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "test",
        component: TestComponent,
        canActivate: [DevGuard],
      },
      {
        path: "user-list",
        component: UsersComponent,
        canActivate: [AdminGuard],
      },
      {
        path: "",
        redirectTo: "test",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
