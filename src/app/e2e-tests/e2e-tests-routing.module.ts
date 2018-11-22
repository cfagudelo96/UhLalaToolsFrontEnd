import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E2ETestFormComponent } from './e2e-test-form/e2e-test-form.component';

const routes: Routes = [
  { path: 'web-applications/:id/e2e-tests/new', component: E2ETestFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class E2ETestsRoutingModule { }
