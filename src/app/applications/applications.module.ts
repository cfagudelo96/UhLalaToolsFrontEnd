import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ApplicationCardComponent } from './application-card/application-card.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';

@NgModule({
  declarations: [
    ApplicationsListComponent,
    ApplicationFormComponent,
    ApplicationCardComponent,
    ApplicationDetailComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule { }
