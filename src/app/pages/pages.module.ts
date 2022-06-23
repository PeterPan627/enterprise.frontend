

import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { LawAdaDashboardModule } from './dashboard/law-ada/law-ada-dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { ErrorModule } from './error/error.module';
import { PagesMenu } from './pages-menu';
import { NbMenuModule, NbIconModule } from '@nebular/theme';
import { AuthModule } from '../@auth/auth.module';
import { InsuranceDashboardModule } from './dashboard/insurance/insurance-dashboard.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { LawAdaDashboardComponent } from './dashboard/law-ada/law-ada-dashboard.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbIconModule,
    ThemeModule,
    LawAdaDashboardModule,
    InsuranceDashboardModule,
    NbMenuModule,
    ErrorModule,
    SharedModule,
    AuthModule.forRoot(),
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  providers: [
    PagesMenu,
  ],
})
export class PagesModule {
}
