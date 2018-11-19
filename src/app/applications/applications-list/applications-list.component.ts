import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { Application } from '../shared/application.model';

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.scss']
})
export class ApplicationsListComponent implements OnInit {
  applications: Application[];

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this.applications = [];
    this.getApplications();
  }

  private getApplications() {
    this.applicationService.getApplications().subscribe(applications => {
      this.applications = applications;
    });
  }
}
