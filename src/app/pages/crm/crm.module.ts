import { NgModule } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { NbCardModule, NbAlertModule, NbActionsModule, NbButtonModule, NbInputModule, NbTabsetModule, NbUserModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbSpinnerModule, NbDatepickerModule } from '@nebular/theme';
import { CrmComponent } from './crm.component';
import { CrmIndexComponent } from './index/crm-index.component';
import { CrmDetailsComponent } from './details/crm-details.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CRMRoutingModule } from './crm-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrmAddComponent } from './add/crm-add.component';
import { PatientsModule } from '../patients/patients.module';

const  NB_MODULES = [
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbSpinnerModule,
    NbDatepickerModule,
    NbInputModule,
  ];

@NgModule({
    imports: [
        CommonModule,
        NbCardModule,
        NbAlertModule,
        Ng2SmartTableModule,
        CRMRoutingModule,
        ReactiveFormsModule,
        PatientsModule,
        ...NB_MODULES,
    ],
    declarations: [
        CrmComponent,
        CrmAddComponent,
        CrmIndexComponent,
        CrmDetailsComponent,
    ],
})
export class CrmModule { }
