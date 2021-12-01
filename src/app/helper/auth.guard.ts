import { Injectable } from '@angular/core';
import {
    Router, CanActivate,
    ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const storage = localStorage.getItem("auth");
        const auth = JSON.parse(JSON.stringify(storage))

        if (auth !== null && auth?.token != '') {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}