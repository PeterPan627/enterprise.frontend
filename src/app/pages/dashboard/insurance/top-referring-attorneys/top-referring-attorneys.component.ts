import { Component, OnDestroy, Input } from '@angular/core';
import { TrafficBar } from '../../../../@core/interfaces/ecommerce/traffic-bar';
import { takeWhile } from 'rxjs/operators';
import { DashboardData, ReferrerData } from '../../../../@core/interfaces/common/dashboard';

@Component({
  selector: 'ngx-top-referring-attorneys',
  styleUrls: ['./top-referring-attorneys.component.scss'],
  templateUrl: './top-referring-attorneys.component.html',
})
export class TopReferringAttorneysComponent implements OnDestroy {

  private alive = true;

  referrerBarData: TrafficBar;
  referrerData: ReferrerData[];
  revealed = false;
  period: string = 'Week';
  @Input() label: string = 'Attorneys';

  constructor(private dashboardService: DashboardData) {
    this.getTopRefferData(this.period);
  }

  toggleView() {
    this.revealed = !this.revealed;
  }

  setPeriodAngGetData(value: string): void {
    this.period = value;
    this.getTopRefferData(value);
  }

  getTopRefferData(period: string) {
    this.dashboardService.getTopReferrers(new Date(), period)
    .pipe(takeWhile( () => this.alive ))
    .subscribe(referrerData => {
        this.referrerData = referrerData;
        this.referrerBarData = {
            data: referrerData.map(item => item.billed),
            labels: referrerData.map(item => item.company),
            formatter: '${c0} Billed',
        };
    }, (err) => {
      this.referrerData = [];
    });
  }


  ngOnDestroy() {
    this.alive = false;
  }
}
