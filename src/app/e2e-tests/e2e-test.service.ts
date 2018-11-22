import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { ErrorHandlingService } from '../services/error-handling.service';

import { WebApplication } from '../applications/shared/web-application.model';

import { E2ETest } from './shared/e2e-test.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class E2ETestService {
  private e2eTestsUrl = `${environment.apiUrl}/e2e-tests`;

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) { }

  getE2ETestsFromWebApplication(webApplication: WebApplication): Observable<E2ETest[]> {
    return this.http.get<E2ETest[]>(this.e2eTestsUrl, { params: { webApplication: webApplication._id } }).pipe(
      catchError(this.errorHandlingService.handleError<E2ETest[]>('get the E2E tests', []))
    );
  }

  generateE2ETestsScript(webApplication: WebApplication, version: string): Observable<{ message: string }> {
    const url = `${environment.apiUrl}/web-applications/${webApplication._id}/e2e-tests/generate-scripts`;
    return this.http.patch<{ message: string }>(url, { version: version }, httpOptions).pipe(
      catchError(this.errorHandlingService.handleError<{ message: string }>('generate the E2E tests scripts'))
    );
  }

  executeE2ETests(webApplication): Observable<{ message: string }> {
    const url = `${environment.apiUrl}/web-applications/${webApplication._id}/e2e-tests/execute-scripts`;
    return this.http.patch<{ message: string }>(url, null, httpOptions).pipe(
      catchError(this.errorHandlingService.handleError<{ message: string }>('execute the E2E tests scripts'))
    );
  }

  createE2ETest(e2eTest: E2ETest): Observable<E2ETest> {
    return this.http.post<E2ETest>(this.e2eTestsUrl, e2eTest, httpOptions).pipe(
      catchError(this.errorHandlingService.handleError<E2ETest>('create the E2E Test'))
    );
  }
}
