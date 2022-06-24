import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { TestComponent } from "./test/test.component";
import { DevGuard } from "../@auth/guards/dev.guard";

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
