import { NgModule } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { NbCardModule, NbAlertModule, NbActionsModule, NbButtonModule, NbInputModule, NbTabsetModule, NbUserModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbSpinnerModule, NbDatepickerModule } from '@nebular/theme';
import { PatientsComponent } from './patients.component';
import { PatientsIndexComponent } from './index/patients-index.component';
import { PatientsDetailsComponent } from './details/patients-details.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PatientsRoutingModule } from './patients-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PatientsAddComponent } from './add/patients-add.component';
import { AppointmentsIndexComponent } from './details/appointments/index/appointments-index.component';
import { AppointmentsDetailsComponent } from './details/appointments/details/appointments-details.component';

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
        PatientsRoutingModule,
        ReactiveFormsModule,
        ...NB_MODULES,
    ],
    declarations: [
        PatientsComponent,
        PatientsAddComponent,
        PatientsIndexComponent,
        PatientsDetailsComponent,
        AppointmentsIndexComponent,
        AppointmentsDetailsComponent,
    ],
    exports: [
        PatientsIndexComponent,
    ],
})
export class PatientsModule { }
