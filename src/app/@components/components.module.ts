

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxValidationMessageComponent } from './validation-message/validation-message.component';
import { NbCardModule } from '@nebular/theme';

const COMPONENTS = [
  NgxValidationMessageComponent,
];

@NgModule({
  imports: [
    NbCardModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ComponentsModule {
}
