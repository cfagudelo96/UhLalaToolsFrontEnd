import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { WebApplication } from './shared/web-application.model';
import { WebApplicationService } from './web-application.service';

@Injectable({
  providedIn: 'root'
})
export class WebApplicationResolverService implements Resolve<Observable<WebApplication>> {

  constructor(private router: Router, private webApplicationService: WebApplicationService) { }

  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<WebApplication> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.webApplicationService.getWebApplication(id).pipe(
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
