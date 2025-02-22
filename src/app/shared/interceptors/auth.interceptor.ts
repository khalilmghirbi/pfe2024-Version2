import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.token) {
      const requestWithAuth = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.token}`
        }
      });
      return next.handle(requestWithAuth);
    }
    return next.handle(request);
  }
}
