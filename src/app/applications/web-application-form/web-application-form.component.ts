import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Application } from '../shared/application.model';
import { WebApplication } from '../shared/web-application.model';

@Component({
  selector: 'app-web-application-form',
  templateUrl: './web-application-form.component.html',
  styleUrls: ['./web-application-form.component.scss']
})
export class WebApplicationFormComponent implements OnInit {
  @Input() application: Application;

  @Output() webApplicationSubmitted: EventEmitter<WebApplication> = new EventEmitter();

  webApplicationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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
      this.webApplicationSubmitted.emit(this.webApplicationForm.value);
    }
  }

  getControlErrorMessage(formControlName: string): string {
    if (this.webApplicationForm.get(formControlName).hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }
}
