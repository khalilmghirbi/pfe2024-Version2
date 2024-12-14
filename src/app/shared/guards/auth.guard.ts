import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let isauthenticated = inject(AuthService).isAuthenticated();
  let router = inject(Router);
  const isLoginRoute = route.routeConfig?.path === 'login';
  if (isauthenticated) {
    isLoginRoute && router.navigate(['/inquiries'])
    return true;
  }
  if (!isLoginRoute) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
