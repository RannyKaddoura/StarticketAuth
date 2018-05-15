import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { UserService } from "../shared/user.service";
import 'rxjs/add/operator/do';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const clonedreq = req.clone({
            withCredentials: true
        });
        
        return next.handle(clonedreq)
            .do(
                succ => { },
                err => {
                    if (err.status === 401 || err.status === 403)
                        this.router.navigateByUrl('/error');
                }
            );
    }
}