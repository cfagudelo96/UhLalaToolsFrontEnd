import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Application } from '../shared/application.model';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss']
})
export class ApplicationDetailComponent implements OnInit {
  application: Application;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.application = this.route.snapshot.data.application as Application;
  }
}
