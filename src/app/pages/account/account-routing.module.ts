import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
    { path: 'list', component: AccountComponent },
    { path: 'add', component: AddAccountComponent },
    { path: 'details/:id', component: ViewDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountRoutingModule { }
