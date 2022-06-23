

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserData } from '../../interfaces/common/users';
import { SmartTableData } from '../../interfaces/common/smart-table';
import { SalesLibraryData } from '../../interfaces/common/sales-library';

import { UsersService } from './users.service';
import { SmartTableService } from './smart-table.service';
import { PeriodsService } from './periods.service';
import { SettingsData } from '../../interfaces/common/settings';
import { SettingsService } from './settings.service';
import { SalesLibraryService } from './sales-library.service';
import { DropBoxAttachmentData } from '../../interfaces/common/dropbox-attachment.data';
import { DropBoxAttachmentService } from '../../backend/common/services/dropbox-attachment.service';

const SERVICES = [
  { provide: UserData, useClass: UsersService },
  { provide: SmartTableData, useClass: SmartTableService },
  { provide: PeriodsService, useClass: PeriodsService },
  { provide: SettingsData, useClass: SettingsService },
  { provide: SalesLibraryData, useClass: SalesLibraryService },
  { provide: DropBoxAttachmentData, useClass: DropBoxAttachmentService },
];

@NgModule({
  imports: [CommonModule],
})
export class CommonMockModule {
  static forRoot(): ModuleWithProviders<CommonMockModule> {
    return <ModuleWithProviders>{
      ngModule: CommonMockModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
