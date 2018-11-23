import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { ErrorHandlingService } from '../services/error-handling.service';

import { RandomTest } from './shared/random-test.model';
import { WebApplication } from '../applications/shared/web-application.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RandomTestService {
  private randomTestUrl = `${environment.apiUrl}/random-tests`;

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) { }

  getRandomTestByWebApplication(webApplicationId: string): Observable<RandomTest> {
    return this.http.get<RandomTest>(`${this.randomTestUrl}/by-web-application/${webApplicationId}`).pipe(
      catchError(this.errorHandlingService.handleError<RandomTest>('get the random test', ))
    );
  }

  createRandomTest(randomTest: RandomTest): Observable<RandomTest> {
    return this.http.post<RandomTest>(this.randomTestUrl, randomTest, httpOptions).pipe(
      catchError(this.errorHandlingService.handleError<RandomTest>('create the random test'))
    );
  }

  generateRandomTestScript(randomTestId: string): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(`${this.randomTestUrl}/${randomTestId}/generate-script`, null, httpOptions).pipe(
      catchError(this.errorHandlingService.handleError<{ message: string }>('generate the random test script'))
    );
  }

  executeRandomTest(randomTestId: string): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(`${this.randomTestUrl}/${randomTestId}/execute`, null, httpOptions).pipe(
      catchError(this.errorHandlingService.handleError<{ message: string }>('execute the random test'))
    );
  }
}
