import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppState } from "../reducers/index.1";
import { isLoggedIn } from "./auth.selectors";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    //| Promise<boolean> | boolean {
    return this.store.pipe(
      select(isLoggedIn),
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigateByUrl("/login");
        }
      })
    );
  }
}
