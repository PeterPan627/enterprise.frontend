
import { Component, Input, OnDestroy } from '@angular/core';
import { ReferrerData } from '../../../../../@core/interfaces/common/dashboard';

@Component({
  selector: 'ngx-top-referring-attorneys-front',
  styleUrls: ['./top-referring-attorneys-front.component.scss'],
  templateUrl: './top-referring-attorneys-front.component.html',
})
export class TopReferringAttorneysFrontComponent implements OnDestroy {

  @Input() frontCardData: ReferrerData;

  currentTheme: string;

  constructor() {
    /*
  this.themeService.getJsTheme()
    .pipe(takeWhile(() => this.alive))
    .subscribe(theme => {
      this.currentTheme = theme.name;
  });*/
  }
  /*
    trackByDate(_, item) {
      return item.date;
    }*/

  getPaidBilledRatio(billed, paid) {
    if (paid === 0 || billed === 0) {
      return '0%';
    }

    return `${(paid / billed) * 100}%`;
  }

  ngOnDestroy() {
  }
}
