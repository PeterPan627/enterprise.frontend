import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { ThemeModule } from "../@theme/theme.module";
import { PagesMenu } from "./pages-menu";
import { NbMenuModule, NbIconModule, NbCardModule } from "@nebular/theme";
import { AuthModule } from "../@auth/auth.module";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../@components/components.module";
import { UsersComponent } from "./users/users.component";

const PAGES_COMPONENTS = [PagesComponent, UsersComponent];

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbIconModule,
    NbCardModule,
    ThemeModule,
    NbMenuModule,
    ComponentsModule,
    AuthModule.forRoot(),
  ],
  declarations: [...PAGES_COMPONENTS],
  providers: [PagesMenu],
})
export class PagesModule {}
