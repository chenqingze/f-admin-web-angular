import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // token: string;
    //
    // register(): Observable<User> {
    //
    // }
    //
    // login(loginContext: LoginContextInterface): Observable<User> {
    //
    //
    //     return throwError('Invalid username or password');
    // }

    logout(): Observable<boolean> {
        return of(false);
    }
}
