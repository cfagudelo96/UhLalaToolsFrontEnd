import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { WebApplication } from '../../applications/shared/web-application.model';

import { RandomTest } from '../shared/random-test.model';
import { RandomTestService } from '../random-test.service';
import { RandomTestError } from '../shared/random-test-error.model';
import { RandomTestErrorService } from '../random-test-error.service';

@Component({
  selector: 'app-random-test',
  templateUrl: './random-test.component.html',
  styleUrls: ['./random-test.component.scss']
})
export class RandomTestComponent implements OnInit {
  @Input() webApplication: WebApplication;

  randomTest: RandomTest;

  randomTestLoaded = false;

  randomTestExecutionSent = false;

  randomTestErrors: RandomTestError[];

  constructor(public snackBar: MatSnackBar, private randomTestService: RandomTestService,
    private randomTestErrorService: RandomTestErrorService) {
    this.randomTestErrors = [];
  }

  ngOnInit() {
    this.getRandomTest();
  }

  generateScript() {
    this.randomTestService.generateRandomTestScript(this.randomTest._id).subscribe(message => {
      this.snackBar.open(message.message, 'Close', { duration: 3000 });
      this.getRandomTest();
    });
  }

  executeRandomTest() {
    this.randomTestExecutionSent = true;
    this.randomTestService.executeRandomTest(this.randomTest._id).subscribe(message => {
      this.snackBar.open(message.message, 'Close', { duration: 3000 });
      this.getRandomTest();
    });
  }

  get newRandomTestFormUrl() {
    return `/web-applications/${this.webApplication._id}/random-test/new`;
  }

  private getRandomTest() {
    this.randomTestService.getRandomTestByWebApplication(this.webApplication._id).subscribe(randomTest => {
      this.randomTest = randomTest;
      this.randomTestLoaded = true;
      if (this.randomTest.executed) {
        this.randomTestErrorService.getRandomTestErrorsFromRandomTest(this.randomTest._id).subscribe(
          randomTestErrors => this.randomTestErrors = randomTestErrors
        );
      }
    });
  }
}
