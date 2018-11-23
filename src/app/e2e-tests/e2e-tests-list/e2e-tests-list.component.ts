import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { WebApplication } from '../../applications/shared/web-application.model';
import { E2ETest } from '../shared/e2e-test.model';
import { E2ETestService } from '../e2e-test.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-e2e-tests-list',
  templateUrl: './e2e-tests-list.component.html',
  styleUrls: ['./e2e-tests-list.component.scss']
})
export class E2ETestsListComponent implements OnInit {
  @Input() webApplication: WebApplication;

  e2eTests: E2ETest[];

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private e2eTestService: E2ETestService) {
    this.e2eTests = [];
  }

  ngOnInit() {
    if (!this.webApplication) {
      throw new Error('Web application must be defined');
    }
    this.getE2ETests();
  }

  hasScriptsToGenerate(): boolean {
    return this.e2eTests.some(e2eTest => !e2eTest.generated);
  }

  allTestsExecuted(): boolean {
    return this.e2eTests.length > 0 && this.e2eTests.every(e2eTest => e2eTest.executed);
  }

  canExecuteScripts(): boolean {
    return !this.hasScriptsToGenerate() && !this.allTestsExecuted();
  }

  generateScripts() {
    const dialogRef = this.dialog.open(PickVersionDialogComponent, {
      width: '300px',
      data: { version: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.e2eTestService.generateE2ETestsScript(this.webApplication, result).subscribe(generationResult => {
          this.snackBar.open(generationResult.message, 'Ok', { duration: 3000 });
          this.getE2ETests();
        });
      }
    });
  }

  executeE2ETests() {
    this.e2eTestService.executeE2ETests(this.webApplication).subscribe(executionResult => {
      this.snackBar.open(executionResult.message, 'Ok', { duration: 3000 });
    });
  }

  getReportDownloadUrl() {
    return `${environment.apiUrl}/e2e-tests/reports?webApplication=${this.webApplication._id}`;
  }

  private getE2ETests() {
    this.e2eTestService.getE2ETestsFromWebApplication(this.webApplication).subscribe(e2eTests => this.e2eTests = e2eTests);
  }

  get newE2ETestFormUrl(): string {
    return `/web-applications/${this.webApplication._id}/e2e-tests/new`;
  }
}

@Component({
  selector: 'app-pick-version-dialog',
  template: `
    <h1 mat-dialog-title>Specify the script's version</h1>
    <div mat-dialog-content>
      <mat-form-field>
        <input matInput placeholder="Version" [(ngModel)]="data.version">
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="data.version" [disabled]="!data.version">Ok</button>
    </div>
  `
})
export class PickVersionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PickVersionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { version: string }) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
