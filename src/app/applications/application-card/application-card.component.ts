import { Component, OnInit, Input } from '@angular/core';

import { Application } from '../shared/application.model';

@Component({
  selector: 'app-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.scss']
})
export class ApplicationCardComponent implements OnInit {
  @Input() application: Application;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
