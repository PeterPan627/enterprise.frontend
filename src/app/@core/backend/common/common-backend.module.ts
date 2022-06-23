

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserData } from '../../interfaces/common/users';
import { UsersService } from './services/users.service';
import { UsersApi } from './api/users.api';
import { HttpService } from './api/http.service';
import { CountryData } from '../../interfaces/common/countries';
import { SettingsApi } from './api/settings.api';
import { NbAuthModule } from '@nebular/auth';
import { SettingsData } from '../../interfaces/common/settings';
import { SettingsService } from './services/settings.service';
import { ContactService } from './services/contact.service';
import { ContactData } from '../../interfaces/contact/contact.data';
import { ContactApi } from './api/contact.api';
import { OpportunityApi } from './api/opportunity.api';
import { OpportunityData } from '../../interfaces/opportunity/opportunity.data';
import { OpportunityService } from './services/opportunity.service';
import { FileApi } from './api/file.api';
import { FileData } from '../../interfaces/common/file';
import { FileService } from './services/file.service';
import { DashboardApi } from './api/dashboard.api';
import { DashboardData } from '../../interfaces/common/dashboard';
import { DashboardService } from './services/dashboard.service';
import { SalesStageApi } from './api/salesStage.api';
import { AccountApi } from './api/account.api';
import { AccountData } from '../../interfaces/account/account.data';
import { AccountService } from './services/account.service';
import { NotesHistoryApi } from './api/notes-history.api';
import { SalesLibraryApi } from './api/sales-library.api';
import { DropboxAttachmentsApi } from './api/dropbox-attachments.api';
import { SalesLibraryData } from '../../interfaces/common/sales-library';
import { SalesLibraryService } from './services/sales-library.service';
import { UserRolesData } from '../../interfaces/common/user-roles';
import { UserRolesService } from './services/user-roles.service';
import { UserRolesApi } from './api/user-roles.api';
import { CommunicationsApi } from './api/communications.api';
import { TextMessageApi } from './api/texting.api';
import { PhoneCallApi } from './api/calling.api';
import { EmailApi } from './api/email.api';
import { CommunicationsData } from '../../interfaces/common/communications.data';
import { CommunicationsService } from './services/communications.service';
import { CommunicationsUserData } from '../../interfaces/common/communications-user';
import { CommunicationsUserService } from './services/communications-users.service';
import { NotificationsApi } from './api/notifications.api';
import { NotificationData } from '../../interfaces/common/notification';
import { NotificationService } from './services/notifications.service';
import { LawAccountingApi } from './api/law-accounting.api';
import { LawAdaApi } from './api/law-ada.api';
import { LawCourtApi } from './api/law-court.api';
import { LawPersonalInjuryApi } from './api/law-personal-injury.api';
import { LawP65Api } from './api/law-p65.api';
import { LawAccountingData } from '../../interfaces/law/law-accounting.data';
import { LawAccountingService } from './services/law-accounting.service';
import { LawAdaData } from '../../interfaces/law/law-ada.data';
import { LawAdaService } from './services/law-ada.service';
import { LawCourtData } from '../../interfaces/law/law-court.data';
import { LawCourtService } from './services/law-court.service';
import { LawPersonalInjuryData } from '../../interfaces/law/law-personal-injury.data';
import { LawPersonalInjuryService } from './services/law-personal-injury.service';
import { DropBoxAttachmentData } from '../../interfaces/common/dropbox-attachment.data';
import { DropBoxAttachmentService } from './services/dropbox-attachment.service';

const API = [
  UsersApi,
  SettingsApi,
  AccountApi,
  ContactApi,
  DashboardApi,
  OpportunityApi,
  SalesStageApi,
  NotesHistoryApi,
  FileApi,
  SalesLibraryApi,
  DropboxAttachmentsApi,
  HttpService,
  UserRolesApi,
  CommunicationsApi,
  TextMessageApi,
  PhoneCallApi,
  EmailApi,
  NotificationsApi,
  LawAccountingApi,
  LawAdaApi,
  LawCourtApi,
  LawPersonalInjuryApi,
  LawP65Api,
];

const SERVICES = [
  { provide: UserData, useClass: UsersService },
  { provide: SettingsData, useClass: SettingsService },
  { provide: AccountData, useClass: AccountService },
  { provide: ContactData, useClass: ContactService },
  { provide: OpportunityData, useClass: OpportunityService },
  { provide: FileData, useClass: FileService },
  { provide: DashboardData, useClass: DashboardService },
  { provide: SalesLibraryData, useClass: SalesLibraryService },
  { provide: UserRolesData, useClass: UserRolesService },
  { provide: CommunicationsData, useClass: CommunicationsService },
  { provide: CommunicationsUserData, useClass: CommunicationsUserService },
  { provide: NotificationData, useClass: NotificationService },
  { provide: LawAccountingData, useClass: LawAccountingService },
  { provide: LawAdaData, useClass: LawAdaService },
  { provide: LawCourtData, useClass: LawCourtService },
  { provide: LawPersonalInjuryData, useClass: LawPersonalInjuryService },
  { provide: DropBoxAttachmentData, useClass: DropBoxAttachmentService },
];

@NgModule({
  imports: [CommonModule, NbAuthModule],
})
export class CommonBackendModule {
  static forRoot(): ModuleWithProviders<CommonBackendModule> {
    return <ModuleWithProviders>{
      ngModule: CommonBackendModule,
      providers: [
        ...API,
        ...SERVICES,
      ],
    };
  }
}
