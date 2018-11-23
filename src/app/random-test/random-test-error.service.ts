import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { ErrorHandlingService } from '../services/error-handling.service';
import { RandomTestError } from './shared/random-test-error.model';

@Injectable({
  providedIn: 'root'
})
export class RandomTestErrorService {
  private randomTestUrl = `${environment.apiUrl}/random-tests`;

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) { }

  getRandomTestErrorsFromRandomTest(randomTestId: string): Observable<RandomTestError[]> {
    return this.http.get<RandomTestError[]>(`${this.randomTestUrl}/${randomTestId}/errors`).pipe(
      catchError(this.errorHandlingService.handleError('get the random test errors', []))
    );
  }
}
