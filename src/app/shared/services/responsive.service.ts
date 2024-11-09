import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService implements OnDestroy{

 
  private currentBreakpoint$ = new BehaviorSubject<string>(Breakpoints.Medium);
  private subscription!: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.listenOnBreakpointsChanges();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  get currentBreakpoint(): Observable<string> {
    return this.currentBreakpoint$.asObservable();
  }

  listenOnBreakpointsChanges(): void {
    this.subscription = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ])
    .subscribe((breakpointState: BreakpointState) => {
      for (const key of Object.keys(breakpointState.breakpoints)) {
        if (breakpointState.breakpoints[key]) {
          console.log(key);
          this.currentBreakpoint$.next(key);
          return;
        }
      }
    });
  }

}
