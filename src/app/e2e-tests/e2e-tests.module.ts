import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { E2ETestsRoutingModule } from './e2e-tests-routing.module';
import { E2ETestListElementComponent } from './e2e-test-list-element/e2e-test-list-element.component';
import { E2ETestsListComponent } from './e2e-tests-list/e2e-tests-list.component';
import { E2ETestFormComponent } from './e2e-test-form/e2e-test-form.component';

@NgModule({
  declarations: [E2ETestListElementComponent, E2ETestsListComponent, E2ETestFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    E2ETestsRoutingModule,
    SharedModule
  ],
  exports: [E2ETestsListComponent]
})
export class E2ETestsModule { }
