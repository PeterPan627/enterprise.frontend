import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesLibraryRoutingModule } from './sales-library-routing.module';
import { SalesLibraryComponent } from './sales-library.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbTabsetModule, NbAlertModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SalesLibraryComponent],
  imports: [
    CommonModule,
    SalesLibraryRoutingModule,
    ReactiveFormsModule,
    NbTabsetModule,
    NbAlertModule,
    SharedModule,
  ],
})
export class SalesLibraryModule { }
