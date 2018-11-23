import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { WebApplication } from '../../applications/shared/web-application.model';

import { RandomTest } from '../shared/random-test.model';
import { RandomTestService } from '../random-test.service';

@Component({
  selector: 'app-random-test',
  templateUrl: './random-test.component.html',
  styleUrls: ['./random-test.component.scss']
})
export class RandomTestComponent implements OnInit {
  @Input() webApplication: WebApplication;

  randomTest: RandomTest;

  randomTestLoaded = false;

  constructor(public snackBar: MatSnackBar, private randomTestService: RandomTestService) { }

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
    });
  }
}
