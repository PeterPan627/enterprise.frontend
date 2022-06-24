import { BrowserModule, Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, Injector, APP_INITIALIZER } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./@core/core.module";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ThemeModule } from "./@theme/theme.module";
import { AuthModule } from "./@auth/auth.module";

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbThemeService,
  NbCardModule,
} from "@nebular/theme";
import { initApp } from "./@services/onstart.service";
import { ConfigurationService } from "./@services/configuration.service";
import { ConfigurationApi } from "./@core/backend/common/api/configuration.api";
import { NbAuthService } from "@nebular/auth";
import { AppService } from "./@services/app.service";
import { UserService } from "./@services/user.service";
import { KeplrService } from "./@services/keplr.service";
import { PagesModule } from "./pages/pages.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PagesModule,
    ThemeModule.forRoot(),
    AuthModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: "AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY",
    }),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    ConfigurationService,
    AppService,
    UserService,
    KeplrService,
    ConfigurationApi,
    NbThemeService,
    NbAuthService,
    Title,
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [
        Injector,
        ConfigurationApi,
        ConfigurationService,
        NbThemeService,
        AppService,
        UserService,
        KeplrService,
      ],
      multi: true,
    },
  ],
})
export class AppModule {}
