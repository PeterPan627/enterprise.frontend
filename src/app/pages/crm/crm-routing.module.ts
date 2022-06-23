import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrmComponent } from './crm.component';
import { CrmIndexComponent } from './index/crm-index.component';
import { CrmDetailsComponent } from './details/crm-details.component';
import { CrmAddComponent } from './add/crm-add.component';

const routes: Routes = [{
    path: '',
    component: CrmComponent,
    children: [
      {
        path: 'add',
        component: CrmAddComponent,
      },
      {
        path: 'list',
        component: CrmIndexComponent,
      },
      {
        path: 'details/:id',
        component: CrmDetailsComponent,
      },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CRMRoutingModule { }
