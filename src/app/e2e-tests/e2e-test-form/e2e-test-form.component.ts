import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { COMMAND_TYPES, COMMAND_TYPES_VALUE_REQUIRED, E2ETest, E2ETestCommand } from '../shared/e2e-test.model';
import { E2ETestService } from '../e2e-test.service';

@Component({
  selector: 'app-e2e-test-form',
  templateUrl: './e2e-test-form.component.html',
  styleUrls: ['./e2e-test-form.component.scss']
})
export class E2ETestFormComponent implements OnInit {
  commandTypes = COMMAND_TYPES;
  commandTypesValueRequired = COMMAND_TYPES_VALUE_REQUIRED;
  webApplicationId: string;
  newEndToEndTest: E2ETest;

  constructor(private router: Router, private route: ActivatedRoute, private e2eTestService: E2ETestService) { }

  ngOnInit() {
    this.webApplicationId = this.route.snapshot.paramMap.get('id');
    const commands: E2ETestCommand[] = [
      new E2ETestCommand('', COMMAND_TYPES[0])
    ];
    this.newEndToEndTest = {
      webApplication: this.webApplicationId,
      name: '',
      description: '',
      commands: commands
    };
  }

  onAddCommand() {
    this.newEndToEndTest.commands.push(new E2ETestCommand('', this.commandTypes[0]));
  }

  onRemoveCommand(index: number) {
    this.newEndToEndTest.commands.splice(index, 1);
  }

  onSubmit() {
    this.e2eTestService.createE2ETest(this.newEndToEndTest).subscribe(e2eTest => {
      if (e2eTest) {
        this.router.navigate(['/applications']);
      }
    });
  }
}
