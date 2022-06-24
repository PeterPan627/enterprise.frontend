import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import {
  NgxAuthComponent,
  NgxLoginComponent,
  NgxRegisterComponent,
  NgxWhiteListLoginRegisterComponent,
} from "./components";

const routes: Routes = [
  {
    path: "",
    component: NgxAuthComponent,
    children: [
      {
        path: "",
        component: NgxLoginComponent,
      },
      {
        path: "login",
        component: NgxLoginComponent,
      },
      {
        path: "register",
        component: NgxRegisterComponent,
      },
      {
        path: "whitelist",
        component: NgxWhiteListLoginRegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
