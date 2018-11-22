import { Component, OnInit, Input } from '@angular/core';

import { WebApplication } from '../../applications/shared/web-application.model';
import { E2ETest } from '../shared/e2e-test.model';
import { E2ETestService } from '../e2e-test.service';

@Component({
  selector: 'app-e2e-tests-list',
  templateUrl: './e2e-tests-list.component.html',
  styleUrls: ['./e2e-tests-list.component.scss']
})
export class E2ETestsListComponent implements OnInit {
  @Input() webApplication: WebApplication;

  e2eTests: E2ETest[];

  constructor(private e2eTestService: E2ETestService) {
    this.e2eTests = [];
  }

  ngOnInit() {
    if (!this.webApplication) {
      throw new Error('Web application must be defined');
    }
    this.getE2ETests();
  }

  private getE2ETests() {
    this.e2eTestService.getE2ETestsFromWebApplication(this.webApplication).subscribe(e2eTests => this.e2eTests = e2eTests);
  }

  get newE2ETestFormUrl(): string {
    return `/web-applications/${this.webApplication._id}/e2e-tests/new`;
  }
}
