

import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule } from '@nebular/auth';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
  PlayerService,
  StateService,
} from './utils';

import { CommonBackendModule } from './backend/common/common-backend.module';
import { CommonMockModule } from './mock/common/common-mock.module';
import { EcommerceMockModule } from './mock/ecommerce/ecommerce-mock.module';
import { IotMockModule } from './mock/iot/iot-mock.module';
import { UserStore } from './stores/user.store';
import { UsersService } from './backend/common/services/users.service';
import { SettingsService } from './backend/common/services/settings.service';
import { InitUserService } from '../@theme/services/init-user.service';
import { ContactService } from './backend/common/services/contact.service';
import { OpportunityService } from './backend/common/services/opportunity.service';
import { FileService } from './backend/common/services/file.service';
import { DashboardService } from './backend/common/services/dashboard.service';
import { AccountService } from './backend/common/services/account.service';
import { SalesLibraryService } from './backend/common/services/sales-library.service';
import { UserRolesService } from './backend/common/services/user-roles.service';
import { CommunicationsUserService } from './backend/common/services/communications-users.service';
import { CommunicationsService } from './backend/common/services/communications.service';
import { NotificationService } from './backend/common/services/notifications.service';
import { LawAccountingService } from './backend/common/services/law-accounting.service';
import { LawAdaService } from './backend/common/services/law-ada.service';
import { LawCourtService } from './backend/common/services/law-court.service';
import { LawPersonalInjuryService } from './backend/common/services/law-personal-injury.service';
import { DropBoxAttachmentService } from './backend/common/services/dropbox-attachment.service';

export const NB_CORE_PROVIDERS = [
  ...CommonMockModule.forRoot().providers,
  ...CommonBackendModule.forRoot().providers,

  ...EcommerceMockModule.forRoot().providers,
  ...IotMockModule.forRoot().providers,

  AnalyticsService,
  LayoutService,
  PlayerService,
  StateService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
        UserStore,
        UsersService,
        InitUserService,
        ContactService,
        AccountService,
        DashboardService,
        FileService,
        OpportunityService,
        SettingsService,
        SalesLibraryService,
        DropBoxAttachmentService,
        UserRolesService,
        CommunicationsUserService,
        CommunicationsService,
        NotificationService,
        LawAccountingService,
        LawAdaService,
        LawCourtService,
        LawPersonalInjuryService,
      ],
    };
  }
}
