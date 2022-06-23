import { Pipe, PipeTransform, Injector, ChangeDetectorRef, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { AsyncPipe } from '@angular/common';
import { of, Observable, Observer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

// tslint:disable-next-line: use-pipe-transform-interface
@Pipe({ name: 'ngxMomentsAgo', pure: false})
export class MomentsAgoPipe implements PipeTransform,  OnDestroy {
  private asyncPipe: AsyncPipe;

  constructor(private injector: Injector) {
    this.asyncPipe = new AsyncPipe(this.injector.get(ChangeDetectorRef));
  }

  transform(date: moment.MomentInput ): string  {

    return this.asyncPipe.transform(this.getObservable(date));
  }

  ngOnDestroy() {
    this.asyncPipe.ngOnDestroy();
 }

  getObservable(date: moment.MomentInput): Observable<string> {
    return of(moment(date).fromNow());
  }
}
