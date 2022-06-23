import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'ngx-top-referring-attorneys-back',
  styleUrls: ['./top-referring-attorneys-back.component.scss'],
  templateUrl: './top-referring-attorneys-back.component.html',
})
export class TopReferringAttorneysBackComponent implements OnDestroy {

  @Input() referrerBarData: any;

  constructor() {
  }

  ngOnDestroy() {
  }
}
