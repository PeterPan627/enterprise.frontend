import { NgModule } from '@angular/core';
import { AngularDraggableModule } from 'angular2-draggable';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import {
  NbCardModule,
  NbInputModule,
  NbDatepickerModule,
  NbSelectModule,
  NbCheckboxModule,
  NbButtonModule,
  NbIconModule,
  NbTabsetModule,
  NbChatModule,
  NbAccordionModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StageSubPageComponent } from './stage-subpage/stage-subpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttachmentsTabComponent } from './tabs/attachments/attachments-tab.component';
import { StageSubPageContactComponent } from './stage-subpage-contact/stage-subpage-contact.component';
import { NotesHistoryTabComponent } from './tabs/notes-history/notes-history-tab.component';
import { ThemeModule } from '../../@theme/theme.module';
import { PhoneControlComponent } from './components/phone-control/phone-control.component';
import { SmsPopOutComponent } from './components/phone-control/sms-popout/sms-popout.component';
import { CallPopOutComponent } from './components/phone-control/call-popout/call-popout.component';
import { IncomingCallComponent } from './components/incoming-call/incoming-call.component';
import { ConnectedCallComponent } from './components/connected-call/connected-call.component';
import { EmailControlComponent } from './components/email-control/email-control.component';
import { SettlementTabComponent } from './tabs/settlement/settlement-tab.component';
import { EmailPopOutComponent } from './components/email-control/email-popout/email-popout.component';
import { AccountingTabComponent } from './tabs/accounting/accounting-tab.component';
import { SalesComComponent } from './tabs/sales-com/sales-com.component';
import { AttachmentsDropboxComponent } from './tabs/attachments-dropbox/attachments-dropbox.component';
import { DemandsWebComponent } from '../clients/shared/features/law/demands-web/demands-web.component';
import { ProcP65 } from '../clients/shared/features/law/processing-p65/processing-p65.component';
import { P65DemandTabComponent } from '../clients/shared/features/law/p65/p65-demand/p65-demand.component';
import { P65SettlementTabComponent } from '../clients/shared/features/law/p65/p65-settlement/p65-settlement.component';
import { P65LamTabComponent } from '../clients/shared/features/law/p65/p65-lam/p65-lam.component';
import { LawCourtTabComponent } from './tabs/law-court/law-court.component';
import { PiAEInsureComponent } from '../clients/shared/features/law/personal-injury/pi-ae-insure/pi-ae-insure.component';
import { StageSubPageAdaComponent } from './stage-subpage-ada/stage-subpage-ada.component';
import { StageSubPagePiComponent } from './stage-subpage-pi/stage-subpage-pi.component';
import { StageSubPageP65Component } from './stage-subpage-p65/stage-subpage-p65.component';
import { PiAEProviderComponent } from '../clients/shared/features/law/personal-injury/pi-ae-provider/pi-ae-provider.component';
import { PiAccountingTabComponent } from '../clients/shared/features/law/personal-injury/pi-accounting/pi-accounting.component';



@NgModule({
  declarations: [
    PiAccountingTabComponent,
    PiAEProviderComponent,
    StageSubPageP65Component,
    StageSubPagePiComponent,
    PiAEInsureComponent,
    LawCourtTabComponent,
    P65LamTabComponent,
    P65SettlementTabComponent,
    P65DemandTabComponent,
    ProcP65,
    DemandsWebComponent,
    SalesComComponent,
    AccountingTabComponent,
    SettlementTabComponent,
    AttachmentsTabComponent,
    StageSubPageAdaComponent,
    StageSubPageComponent,
    StageSubPageContactComponent,
    NotesHistoryTabComponent,
    PhoneControlComponent,
    EmailPopOutComponent,
    SmsPopOutComponent,
    CallPopOutComponent,
    IncomingCallComponent,
    ConnectedCallComponent,
    EmailControlComponent,
    AttachmentsDropboxComponent,
  ],
  imports: [
    QuillModule.forRoot(),
    FormsModule,
    NbAccordionModule,
    AngularDraggableModule,
    CommonModule,
    NbCardModule,
    NbChatModule,
    NbTabsetModule,
    NbInputModule,
    NbDatepickerModule,
    NbSelectModule,
    Ng2SmartTableModule,
    NbCheckboxModule,
    NbButtonModule,
    NbIconModule,
    ReactiveFormsModule,
    ThemeModule,
  ],
  exports: [
    PiAccountingTabComponent,
    PiAEProviderComponent,
    StageSubPageP65Component,
    StageSubPagePiComponent,
    StageSubPageAdaComponent,
    PiAEInsureComponent,
    LawCourtTabComponent,
    P65LamTabComponent,
    P65SettlementTabComponent,
    P65DemandTabComponent,
    ProcP65,
    DemandsWebComponent,
    SalesComComponent,
    AccountingTabComponent,
    SettlementTabComponent,
    NbAccordionModule,
    ReactiveFormsModule,
    NbCardModule,
    NbInputModule,
    NbDatepickerModule,
    NbSelectModule,
    Ng2SmartTableModule,
    NbCheckboxModule,
    NbButtonModule,
    NbIconModule,
    AttachmentsTabComponent,
    StageSubPageComponent,
    StageSubPageContactComponent,
    NotesHistoryTabComponent,
    PhoneControlComponent,
    EmailControlComponent,
    IncomingCallComponent,
    ConnectedCallComponent,
    AttachmentsDropboxComponent,
  ],
  entryComponents: [
    IncomingCallComponent,
    ConnectedCallComponent,
  ],
})
export class SharedModule { }
