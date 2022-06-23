import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients.component';
import { PatientsIndexComponent } from './index/patients-index.component';
import { PatientsDetailsComponent } from './details/patients-details.component';
import { PatientsAddComponent } from './add/patients-add.component';

const routes: Routes = [{
    path: '',
    component: PatientsComponent,
    children: [
      {
        path: 'list',
        component: PatientsIndexComponent,
      },
      {
        path: 'details/:id',
        component: PatientsDetailsComponent,
      },
      {
        path: 'add',
        component: PatientsAddComponent,
      },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PatientsRoutingModule { }
