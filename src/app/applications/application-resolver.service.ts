import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Application } from './shared/application.model';
import { ApplicationService } from './application.service';
import { Observable, EMPTY, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationResolverService implements Resolve<Observable<Application>> {

  constructor(private router: Router, private applicationService: ApplicationService) { }

  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<Application> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.applicationService.getApplication(id).pipe(
      mergeMap(application => {
        if (application) {
          return of(application);
        } else {
          this.router.navigate(['/applications']);
          return EMPTY;
        }
      })
    );
  }
}
