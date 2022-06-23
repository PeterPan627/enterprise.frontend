

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { LawAdaDashboardComponent } from './dashboard/law-ada/law-ada-dashboard.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { InsuranceDashboardComponent } from './dashboard/insurance/insurance-dashboard.component';
import { TestComponent } from './test/test.component';
import { DevGuard } from '../@auth/guards/dev.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'insurance-dashboard',
      component: InsuranceDashboardComponent,
    },
    {
      path: 'law-ada-dashboard',
      component: LawAdaDashboardComponent,
    },
    {
      path: 'accounts',
      loadChildren: () => import('./account/account.module')
        .then(m => m.AccountModule),
    },
    {
      path: 'patients',
      loadChildren: () => import('./patients/patients.module')
        .then(m => m.PatientsModule),
    },
    {
      path: 'contacts',
      loadChildren: () => import('./contacts/contacts.module')
        .then(m => m.ContactsModule),
    },
    {
      path: 'sales-library',
      loadChildren: () => import('./sales-library/sales-library.module')
        .then(m => m.SalesLibraryModule),
    },
    {
      path: 'clients',
      loadChildren: () => import('./clients/client.module')
        .then(m => m.ClientModule),
    },

    {
      path: 'crm',
      loadChildren: () => import('./crm/crm.module')
        .then(m => m.CrmModule),
    },
    {
      path: 'users',
      loadChildren: () => import('./users/users.module')
        .then(m => m.UsersModule),
    },
    {
      path: 'test',
      component: TestComponent,
      canActivate: [DevGuard],
    },
    {
      path: 'error',
      loadChildren: () => import('./error/error.module')
        .then(m => m.ErrorModule),
    },
    {
      path: '',
      redirectTo: 'insurance-dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
