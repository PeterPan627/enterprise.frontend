

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { UsersRoutingModule } from './users-routing.module';
import { AuthModule } from '../../@auth/auth.module';

// components
import { UsersComponent } from './users.component';
import { ComponentsModule } from '../../@components/components.module';
// components

import {
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
} from '@nebular/theme';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserEditPageComponent } from './user-edit-page/user-edit-page.component';
import { SharedModule } from '../shared/shared.module';


const NB_MODULES = [
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
    ThemeModule,
    AuthModule,
    Ng2SmartTableModule,
    UsersRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    SharedModule,
    ...NB_MODULES,
  ],
  declarations: [
    UsersTableComponent,
    UsersComponent,
    UserEditPageComponent,
  ],
  entryComponents: [
  ],
  providers: [],
})
export class UsersModule { }
