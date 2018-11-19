import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Application } from './shared/application.model';
import { ErrorHandlingService } from '../services/error-handling.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private applicationsUrl = `${environment.apiUrl}/applications`;

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) { }

  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.applicationsUrl).pipe(
      catchError(this.errorHandlingService.handleError<Application[]>('get applications', []))
    );
  }

  getApplication(id: string): Observable<Application> {
    return this.http.get<Application>(`${this.applicationsUrl}/${id}`).pipe(
      catchError(this.errorHandlingService.handleError<Application>('get the application'))
    );
  }

  createApplication(application: Application): Observable<Application> {
    return this.http.post<Application>(this.applicationsUrl, application, httpOptions).pipe(
      catchError(this.errorHandlingService.handleError<Application>('create the application'))
    );
  }
}
