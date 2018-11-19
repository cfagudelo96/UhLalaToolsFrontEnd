import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';

const routes: Routes = [
  { path: 'applications', component: ApplicationsListComponent },
  { path: 'applications/new', component: ApplicationFormComponent },
  { path: 'applications/:id', component: ApplicationDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
