import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAccountComponent } from './add-account/add-account.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AccountComponent } from './account.component';
import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import { NbTabsetModule, NbAlertModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountDetailHeaderComponent } from './shared/account-detail-header/account-detail-header.component';



@NgModule({
  declarations: [
    AddAccountComponent,
    ViewDetailsComponent,
    AccountComponent,
    ListAccountsComponent,
    AccountDetailHeaderComponent,
  ],
  imports: [
    SharedModule,
    AccountRoutingModule,
    CommonModule,
    NbTabsetModule,
    NbAlertModule,
    ReactiveFormsModule,
  ],
})
export class AccountModule { }
