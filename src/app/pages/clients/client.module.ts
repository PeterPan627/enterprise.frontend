import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { SharedModule } from '../shared/shared.module';
import { AddClientComponent } from './add-clients/add-client.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbAlertModule, NbTabsetModule } from '@nebular/theme';
import { ClientListComponent } from './list-clients/client-list.component';
import { NewClientsComponent } from './new-clients/new-clients.component';
import { ClientDetailHeaderComponent } from './shared/client-detail-header/client-detail-header.component';
import { ThemeModule } from '../../@theme/theme.module';
import { AgGridModule } from 'ag-grid-angular';
import { SetFilter, VirtualList, LicenseManager } from 'ag-grid-enterprise';
import { AdalamcourtTabComponent } from './shared/features/law/ada/ada-lamcourt/ada-lamcourt-tab.component';
import { ADALamFieldTabComponent } from './shared/features/law/ada/ada-lamfield/adafields-tab.component';
import { AFGAccountingTabComponent } from './shared/features/mortgage/afg-accounting/afg-accounting.component';
import { AFGPartiesTabComponent } from './shared/features/mortgage/afg-parties/afg-parties.component';
import { AFGPreApplicationTabComponent } from './shared/features/mortgage/afg-preapplication/afg-preapplication.component';
import { AFGProTabComponent } from './shared/features/mortgage/afg-pro/afg-pro-tab.component';
import { InsuranceTabComponent } from './shared/features/insurance/insurance/insurance-tab.component';
import { InsurSubmissTabComponent } from './shared/features/insurance/insur-submiss/insur-submiss-tab.component';
import { PiLamTabComponent } from './shared/features/law/personal-injury/pi-lam/pi-lam.component';
import { PiProcTabComponent } from './shared/features/law/personal-injury/pi-proc/pi-proc.component';
import { PrequalComponent } from './shared/features/mortgage/prequal/prequal.component';
import { Mortgage1003TabComponent } from './shared/features/mortgage/mortgage-1003/mortgage-1003.component';
import { AddPolicyComponent } from './shared/features/insurance/add-policy/add-policy.component';
import { DemandsTabComponent } from './shared/features/law/demands/demands-tab.component';
import { ComplaintProcessTabComponent } from './shared/features/law/complaint-process/complaint-process-tab.component';
import { LamviewTabComponent } from './shared/features/law/lam-view/lam-view-tab.component';
import { MLOdemandTabComponent } from './shared/features/law/mlo-demand/mlo-demand-tab.component';
import { PolicyGridComponent } from './shared/features/insurance/policy-grid/policy-grid.component';

//Features
const Law = [
  ComplaintProcessTabComponent,
  DemandsTabComponent,
  LamviewTabComponent,
  MLOdemandTabComponent,
];

const LawAda = [
  AdalamcourtTabComponent,
  ADALamFieldTabComponent,
];

const LawPi = [
  PiLamTabComponent,
  PiProcTabComponent,
];

const Insurance = [
  InsuranceTabComponent,
  InsurSubmissTabComponent,
  PolicyGridComponent,
  AddPolicyComponent,
];

const Mortgage = [
  AFGAccountingTabComponent,
  AFGPartiesTabComponent,
  AFGPreApplicationTabComponent,
  AFGProTabComponent,
  PrequalComponent,
  Mortgage1003TabComponent,
];

@NgModule({
  declarations: [
    ClientComponent,
    ClientListComponent,
    AddClientComponent,
    ViewDetailsComponent,
    NewClientsComponent,
    ClientDetailHeaderComponent,    
    ...Law,
    ...LawAda,
    ...LawPi,
    ...Insurance,
    ...Mortgage,
  ],
  imports: [
    AgGridModule.withComponents([
      SetFilter,
      VirtualList,
      LicenseManager.setLicenseKey(''),
    ]),
    ReactiveFormsModule,
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    NbAlertModule,
    NbTabsetModule,
    ThemeModule,
  ],
})
export class ClientModule { }