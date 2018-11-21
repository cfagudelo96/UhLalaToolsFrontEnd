import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Application } from '../shared/application.model';
import { WebApplication } from '../shared/web-application.model';
import { ApplicationService } from '../application.service';
import { WebApplicationService } from '../web-application.service';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss']
})
export class ApplicationDetailComponent implements OnInit {
  application: Application;

  webApplication: WebApplication;

  private gotWebApplicationResponse;

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService,
    private webApplicationService: WebApplicationService
  ) { }

  ngOnInit() {
    this.webApplication = null;
    this.gotWebApplicationResponse = false;
    this.application = this.route.snapshot.data.application as Application;
    this.applicationService.getWebApplicationFromApplication(this.application._id)
      .subscribe(webApplication => {
        this.webApplication = webApplication;
        this.gotWebApplicationResponse = true;
      });
  }

  hasWebApplication(): boolean {
    return this.gotWebApplicationResponse && this.webApplication != null;
  }

  canCreateWebApplication(): boolean {
    return this.gotWebApplicationResponse && !this.webApplication;
  }

  onWebApplicationSubmitted(webApplication: WebApplication) {
    this.gotWebApplicationResponse = false;
    this.webApplicationService.createWebApplication(webApplication).subscribe(createdWebApplication => {
      this.webApplication = createdWebApplication;
      this.gotWebApplicationResponse = true;
    });
  }
}
