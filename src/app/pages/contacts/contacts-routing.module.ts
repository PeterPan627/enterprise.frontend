import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactsComponent } from './contacts.component';
import { ViewContactDetailsComponent } from './view-details/view-details.component';


const routes: Routes = [
  { path: 'list', component: ContactsComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'details/:id', component: ViewContactDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule { }
