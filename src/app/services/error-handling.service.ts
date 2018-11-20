import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor(private snackbarService: MatSnackBar) { }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.snackbarService.open(`Error trying to ${operation}: ${error.error.message}`, 'Close', {
        duration: 3000
      });
      return of(result as T);
    };
  }
}
