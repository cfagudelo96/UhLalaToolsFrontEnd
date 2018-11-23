import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { WebApplication } from '../../applications/shared/web-application.model';
import { RandomTestService } from '../random-test.service';

@Component({
  selector: 'app-random-test-form',
  templateUrl: './random-test-form.component.html',
  styleUrls: ['./random-test-form.component.scss']
})
export class RandomTestFormComponent implements OnInit {
  webApplication: WebApplication;

  randomTestForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder,
    private randomTestService: RandomTestService) { }

  ngOnInit() {
    this.webApplication = this.route.snapshot.data.webApplication as WebApplication;
    this.randomTestForm = this.formBuilder.group({
      webApplication: [this.webApplication._id],
      timeToLive: [50000],
      seed: [1234],
      numRuns: [1],
      numGremlins: [10]
    });
  }

  onSubmit() {
    if (this.randomTestForm.valid) {
      this.randomTestService.createRandomTest(this.randomTestForm.value).subscribe(_ => {
        this.router.navigate([`applications/${this.webApplication.application}`]);
      });
    }
  }
}
