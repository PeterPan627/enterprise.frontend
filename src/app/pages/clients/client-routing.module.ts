import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { AddClientComponent } from './add-clients/add-client.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { NewClientsComponent } from './new-clients/new-clients.component';

const routes: Routes = [
  { path: 'new', component: NewClientsComponent },
  { path: 'list', component: ClientComponent },
  { path: 'add', component: AddClientComponent },
  { path: 'details/:id', component: ViewDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule { }
