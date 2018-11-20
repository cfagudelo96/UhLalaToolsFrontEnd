import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebApplicationService } from '../web-application.service';

import { Application } from '../shared/application.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-application-form',
  templateUrl: './web-application-form.component.html',
  styleUrls: ['./web-application-form.component.scss']
})
export class WebApplicationFormComponent implements OnInit {
  @Input() application: Application;

  webApplicationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private webApplicationService: WebApplicationService
  ) { }

  ngOnInit() {
    this.initializeWebApplicationForm();
  }

  private initializeWebApplicationForm() {
    this.webApplicationForm = this.formBuilder.group({
      application: [this.application._id, [Validators.required]],
      url: [null, [Validators.required]]
    });
  }

  get url() {
    return this.webApplicationForm.get('url');
  }

  onSubmit() {
    if (this.webApplicationForm.valid) {
      this.webApplicationService.createWebApplication(this.webApplicationForm.value).subscribe(webApplication => {
        if (webApplication) {
          this.router.navigate(['/applications', this.application._id]);
        }
      });
    }
  }
}
