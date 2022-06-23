import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactDetailsComponent } from './view-details/view-details.component';
import { ContactsComponent } from './contacts.component';
import { SharedModule } from '../shared/shared.module';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { NbTabsetModule, NbAlertModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactDetailHeaderComponent } from './shared/contact-detail-header/contact-detail-header.component';


@NgModule({
  declarations: [
    AddContactComponent,
    ViewContactDetailsComponent,
    ContactsComponent,
    ListContactsComponent,
    ContactDetailHeaderComponent,
  ],
  imports: [
    NbAlertModule,
    NbTabsetModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ContactsRoutingModule,
  ],
})
export class ContactsModule { }
