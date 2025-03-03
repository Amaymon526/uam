import { map } from 'rxjs/operators';
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        const requiredRole = route.data['role'];
        return this.authService.getUser().pipe(
            map(user => {
                if (user && user.roles.includes(requiredRole)) {
                    return true;
                }
                this.router.navigate(['/landing']);
                return false;
            })
        );
    }
}
