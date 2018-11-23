import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomTestFormComponent } from './random-test-form/random-test-form.component';

import { WebApplicationResolverService } from '../applications/web-application-resolver.service';

const routes: Routes = [
  {
    path: 'web-applications/:id/random-test/new', component: RandomTestFormComponent, resolve: {
      webApplication: WebApplicationResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomTestRoutingModule { }
