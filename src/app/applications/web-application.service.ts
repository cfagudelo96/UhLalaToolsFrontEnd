import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { ErrorHandlingService } from '../services/error-handling.service';
import { WebApplication } from './shared/web-application.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WebApplicationService {
  private webApplicationsUrl = `${environment.apiUrl}/web-applications`;

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) { }

  getWebApplications(): Observable<WebApplication[]> {
    return this.http.get<WebApplication[]>(this.webApplicationsUrl).pipe(
      catchError(this.errorHandlingService.handleError<WebApplication[]>('get web applications', []))
    );
  }

  getWebApplication(id: string): Observable<WebApplication> {
    return this.http.get<WebApplication>(`${this.webApplicationsUrl}/${id}`).pipe(
      catchError(this.errorHandlingService.handleError<WebApplication>('get the application'))
    );
  }

  createWebApplication(webApplication: WebApplication): Observable<WebApplication> {
    return this.http.post<WebApplication>(this.webApplicationsUrl, webApplication, httpOptions).pipe(
      catchError(this.errorHandlingService.handleError<WebApplication>('create the application'))
    );
  }
}
