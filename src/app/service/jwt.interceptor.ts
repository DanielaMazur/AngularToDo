import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.getAccessToken();
    const isAuth: boolean = this.isAuthRoute(req.url);

    if (!accessToken && !isAuth) {
      this.navigateToRoot();
      return;
    }

    if (!isAuth) {
      req.headers.set('Authorization', this.getAccessToken());

      req = req.clone({
        setHeaders: {
          Autorization: `Bearer ${this.getAccessToken()}`,
        },
      });
    }

    return next.handle(req);
  }

  private isAuthRoute(route: string): boolean {
    return route.includes('auth');
  }

  private navigateToRoot(): void {
    this.router.navigate(['/']);
  }

  private getAccessToken(): string {
    const ACCESS_TOKEN_STORAGE_NAME = '[anulgar-todo][access-token]';
    return localStorage.getItem(ACCESS_TOKEN_STORAGE_NAME);
  }
}
