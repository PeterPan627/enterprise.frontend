

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
//import { UserComponent } from './user/user.component';
import { AdminGuard } from '../../@auth/guards/admin.guard';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserEditPageComponent } from './user-edit-page/user-edit-page.component';

const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [
    {
      path: 'list',
      canActivate: [AdminGuard],
      component: UsersTableComponent,
    },
    {
      path: 'edit/:id',
      canActivate: [AdminGuard],
      component: UserEditPageComponent,
    },
    {
      path: 'current',
      component: UserEditPageComponent,
    },
    {
      path: 'add',
      canActivate: [AdminGuard],
      component: UserEditPageComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {

}
