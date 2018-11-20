import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';

import { ApplicationResolverService } from './application-resolver.service';
import { WebApplicationFormComponent } from './web-application-form/web-application-form.component';

const routes: Routes = [
  { path: 'applications', component: ApplicationsListComponent },
  { path: 'applications/new', component: ApplicationFormComponent },
  {
    path: 'applications/:id', component: ApplicationDetailComponent, resolve: {
      application: ApplicationResolverService
    }
  },
  { path: 'applications/:id/web-application/new', component: WebApplicationFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
