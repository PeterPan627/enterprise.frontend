

import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { ChartData } from '../../../../../@core/interfaces/common/chart';
import { DashboardData } from '../../../../../@core/interfaces/common/dashboard';

@Component({
  selector: 'ngx-patient-cumulative-stats-card-front',
  styleUrls: ['./patient-cumulative-stats-card-front.component.scss'],
  templateUrl: './patient-cumulative-stats-card-front.component.html',
})
export class PatientsCumulativeStatsCardFrontComponent implements OnDestroy {

  private alive = true;

  chartData: ChartData;

  constructor(private dashboardService: DashboardData) {
    this.dashboardService.getPatientCumulativeData(new Date(), 'M')
    .pipe(takeWhile(() => this.alive))
    .subscribe((patientData) => {
      this.chartData = {
        chartLabel: 'Referrals',
        legend: ['daily', 'cumulative'],
        axisXLabels: patientData.map(c => {
          const d = new Date(c.date);
          const year  = d.getFullYear();
          const month = d.getMonth() + 1;
          const day = d.getDate();
          const dateString = `${year}-${month}-${day}`;
          return dateString;
        }),
        linesData: (((d) => {
          const daily = d.map(a => a.dayTotal);
          const cumulative = d.map(a => a.runningTotal);
          const ret = [
            daily,
            cumulative,
          ];
          return ret;
        })(patientData)),
      };

    });
    /*this.profitBarAnimationChartService.getChartData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((chartData) => {
        this.chartData = chartData;
      });*/
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
