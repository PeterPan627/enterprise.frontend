import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { ThemeModule } from "../@theme/theme.module";
import { PagesMenu } from "./pages-menu";
import { NbMenuModule, NbIconModule } from "@nebular/theme";
import { AuthModule } from "../@auth/auth.module";
import { CommonModule } from "@angular/common";

const PAGES_COMPONENTS = [PagesComponent];

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbIconModule,
    ThemeModule,
    NbMenuModule,
    AuthModule.forRoot(),
  ],
  declarations: [...PAGES_COMPONENTS],
  providers: [PagesMenu],
})
export class PagesModule {}
