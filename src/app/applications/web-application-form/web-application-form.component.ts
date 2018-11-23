import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { Application } from '../shared/application.model';
import { WebApplication } from '../shared/web-application.model';

@Component({
  selector: 'app-web-application-form',
  templateUrl: './web-application-form.component.html',
  styleUrls: ['./web-application-form.component.scss']
})
export class WebApplicationFormComponent implements OnInit {
  WINDOW_SIZES = [
    { value: '--window-size=800,600', display: '800x600' },
    { value: '--window-size=1366,768', display: '1366x768' },
    { value: '--window-size=1440,900', display: '1440x900' },
    { value: '--window-size=1600,900', display: '1600x900' },
    { value: '--window-size=1024,768', display: '1024x768' },
    { value: '--window-size=1920,1080', display: '1920x1080' },
  ];

  @Input() application: Application;

  @Output() webApplicationSubmitted: EventEmitter<WebApplication> = new EventEmitter();

  webApplicationForm: FormGroup;

  chromeCapabilitiesForm: FormGroup;

  firefoxCapabilitiesForm: FormGroup;

  chromeCapabilitiesDefined = false;

  firefoxCapabilitiesDefined = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeWebApplicationForm();
  }

  private initializeWebApplicationForm() {
    this.webApplicationForm = this.formBuilder.group({
      application: [this.application._id, [Validators.required]],
      url: [null, [Validators.required]],
      browserCapabilities: this.formBuilder.array([])
    });
  }

  get url() {
    return this.webApplicationForm.get('url');
  }

  get browserCapabilities() {
    return this.webApplicationForm.get('browserCapabilities') as FormArray;
  }

  addChromeCapabilities() {
    this.chromeCapabilitiesDefined = true;
    this.chromeCapabilitiesForm = this.formBuilder.group({
      maxInstances: [3, [Validators.min(1), Validators.max(5), Validators.required]],
      browserName: ['chrome'],
      chromeOptions: this.formBuilder.group({
        args: this.formBuilder.group({
          windowSize: [this.WINDOW_SIZES[0].value],
          headless: [false],
          disableExtensions: [false],
          disablePopups: [false],
          disableInfobars: [false]
        })
      })
    });
    this.browserCapabilities.push(this.chromeCapabilitiesForm);
  }

  addFirefoxCapabilities() {
    this.firefoxCapabilitiesDefined = true;
    this.firefoxCapabilitiesForm = this.formBuilder.group({
      maxInstances: [3, [Validators.min(1), Validators.max(5), Validators.required]],
      browserName: ['firefox'],
      firefoxOptions: this.formBuilder.group({
        args: this.formBuilder.group({
          windowSize: [this.WINDOW_SIZES[0].value],
          headless: [false]
        })
      })
    });
    this.browserCapabilities.push(this.firefoxCapabilitiesForm);
  }

  onSubmit() {
    if (this.webApplicationForm.valid) {
      const { value } = this.webApplicationForm;
      const webApplication: WebApplication = {
        application: value.application,
        url: value.url
      };
      console.log(value);
      if (value.browserCapabilities.length > 0) {
        value.browserCapabilities.forEach(browserCapability => {
          if (browserCapability.chromeOptions) {
            browserCapability.chromeOptions.args = this.argsToArray(browserCapability.chromeOptions.args);
          } else if (browserCapability.firefoxOptions) {
            browserCapability.firefoxOptions.args = this.argsToArray(browserCapability.firefoxOptions.args);
          }
        });
        webApplication.browserCapabilities = value.browserCapabilities;
      }
      this.webApplicationSubmitted.emit(this.webApplicationForm.value);
    }
  }

  private argsToArray(args: any): string[] {
    const result = [];
    if (args.headless) {
      result.push('--headless');
    }
    if (args.disableExtensions) {
      result.push('--disable-extensions');
    }
    if (args.disableInfobars) {
      result.push('--disable-infobars');
    }
    if (args.disablePopups) {
      result.push('--disable-popup-blocking');
    }
    result.push(args.windowSize);
    return result;
  }

  getControlErrorMessage(formControlName: string): string {
    if (this.webApplicationForm.get(formControlName).hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }
}
