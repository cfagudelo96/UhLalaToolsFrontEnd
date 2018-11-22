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

  createE2ETest(e2eTest: E2ETest): Observable<E2ETest> {
    return this.http.post<E2ETest>(this.e2eTestsUrl, e2eTest, httpOptions).pipe(
      catchError(this.errorHandlingService.handleError<E2ETest>('create the E2E Test'))
    );
  }
}
