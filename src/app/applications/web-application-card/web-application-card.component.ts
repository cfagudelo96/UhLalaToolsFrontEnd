import { Component, OnInit, Input } from '@angular/core';

import { WebApplication } from '../shared/web-application.model';

@Component({
  selector: 'app-web-application-card',
  templateUrl: './web-application-card.component.html',
  styleUrls: ['./web-application-card.component.scss']
})
export class WebApplicationCardComponent implements OnInit {
  @Input() webApplication: WebApplication;

  randomNumberForImage = (Math.floor(Math.random() * 8));

  constructor() { }

  ngOnInit() {
  }
}
