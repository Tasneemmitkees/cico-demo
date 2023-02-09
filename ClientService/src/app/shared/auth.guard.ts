import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BydConfigurationService } from '../views/app/configuration/byd-configration/byd-configuration.service';

const helper = new JwtHelperService();

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  //   canActivate(
  //     route: ActivatedRouteSnapshot,
  //     state: RouterStateSnapshot): boolean {
  //     console.log('AuthGuard#canActivate called');
  //     return true;
  //   }
  // }
  constructor(
    private authService: AuthService,
    private router: Router,
    private bydConfigurationService: BydConfigurationService
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const currentUser = await this.authService.getUser();
    // console.log(currentUser);
    // console.log(route.data);

    if (currentUser.token) {
      if (route.data && route.data.roles) {
        console.log(parseInt(currentUser.role));
        console.log(route.data.roles);
        if (route.data.roles.includes(parseInt(currentUser.role))) {
          let flag: any;
          const decodedToken = helper.decodeToken(currentUser.token);
          const expirationDate = helper.getTokenExpirationDate(
            currentUser.token
          );
          const isExpired = helper.isTokenExpired(currentUser.token);
          // console.log(decodedToken);
          // console.log(expirationDate);
          // console.log(isExpired);
          let BYD = JSON.parse(localStorage.getItem('BYD'));
          BYD.password = atob(BYD.password);

          this.bydConfigurationService
            .getUserUUID(decodedToken.bydesignUser, BYD)
            .subscribe((config) => {
              decodedToken.uuid = config.UUID
              console.log(decodedToken);
              localStorage.setItem('user', JSON.stringify(decodedToken));

              // this.config = config;
              // config.password = btoa(config.password);

              // localStorage.setItem('BYD', JSON.stringify(config));
            });

          return true;
        } else {
          this.router.navigate(['/unauthorized']);
          console.log('false2');
          return false;
        }
      } else {
        this.router.navigate(['/unauthorized']);
        console.log('false2');
        return false;
      }
    } else {
      console.log('false');
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
