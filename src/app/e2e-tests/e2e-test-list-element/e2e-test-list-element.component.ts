import { Component, OnInit, Input } from '@angular/core';
import { E2ETest } from '../shared/e2e-test.model';

@Component({
  selector: 'app-e2e-test-list-element',
  templateUrl: './e2e-test-list-element.component.html',
  styleUrls: ['./e2e-test-list-element.component.scss']
})
export class E2ETestListElementComponent implements OnInit {
  @Input() e2eTest: E2ETest;

  constructor() { }

  ngOnInit() {
  }

}
