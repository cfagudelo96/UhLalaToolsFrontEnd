import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { RandomTestRoutingModule } from './random-test-routing.module';
import { RandomTestComponent } from './random-test/random-test.component';
import { RandomTestFormComponent } from './random-test-form/random-test-form.component';

@NgModule({
  declarations: [RandomTestComponent, RandomTestFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RandomTestRoutingModule
  ],
  exports: [RandomTestComponent]
})
export class RandomTestModule { }
