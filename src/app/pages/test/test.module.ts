import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [TestComponent],
  imports: [
    SharedModule,
    CommonModule,
  ],
})
export class TestModule { }
