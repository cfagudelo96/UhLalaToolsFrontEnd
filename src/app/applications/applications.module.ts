import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { E2ETestsModule } from '../e2e-tests/e2e-tests.module';
import { RandomTestModule } from '../random-test/random-test.module';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ApplicationCardComponent } from './application-card/application-card.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { WebApplicationCardComponent } from './web-application-card/web-application-card.component';
import { WebApplicationFormComponent } from './web-application-form/web-application-form.component';

@NgModule({
  declarations: [
    ApplicationsListComponent,
    ApplicationFormComponent,
    ApplicationCardComponent,
    ApplicationDetailComponent,
    WebApplicationCardComponent,
    WebApplicationFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    E2ETestsModule,
    RandomTestModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule { }
