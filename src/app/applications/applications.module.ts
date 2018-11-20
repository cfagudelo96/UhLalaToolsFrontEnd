import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule { }
