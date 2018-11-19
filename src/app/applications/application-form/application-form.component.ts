import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApplicationService } from '../application.service';
import { Application } from '../shared/application.model';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {
  applicationForm: FormGroup;

  get name() {
    return this.applicationForm.get('name');
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private applicationService: ApplicationService
  ) { }

  ngOnInit() {
    this.initializeApplicationForm();
  }

  private initializeApplicationForm() {
    this.applicationForm = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null]
    });
  }

  onSubmit() {
    if (this.applicationForm.valid) {
      this.applicationService.createApplication(this.applicationForm.value).subscribe(application => {
        if (application) {
          this.router.navigate(['/applications']);
        }
      });
    }
  }

  getControlErrorMessage(formControlName: string): string {
    if (this.applicationForm.get(formControlName).hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }
}
