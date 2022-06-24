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
} from "@nebular/theme";
import { initApp } from "./@services/onstart.service";
import { ConfigurationService } from "./@services/configuration.service";
import { ConfigurationApi } from "./@core/backend/common/api/configuration.api";
import { NbAuthService } from "@nebular/auth";
import { AppService } from "./@services/app.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeModule.forRoot(),
    AuthModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
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
    ConfigurationApi,
    NbThemeService,
    NbAuthService,
    Title,
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [Injector, ConfigurationApi, ConfigurationService, NbThemeService],
      multi: true,
    },
  ],
})
export class AppModule {}
