import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigResolveService implements Resolve<ConfigService> {

  constructor(
    private router: Router
  ) { }
  
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<any> | Promise<any> | any {
    return this.tasksBeforeRouting();
  }

  public tasksBeforeRouting(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        //turn off loader
      } else if ( event instanceof NavigationStart){
        //turn on loader
      }
    });
    return ConfigService.getInstance().getConfigData();
  }
}
