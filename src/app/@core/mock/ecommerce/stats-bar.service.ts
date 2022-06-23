

import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { StatsBarData } from '../../interfaces/ecommerce/stats-bar';
import { AggregatedChartData } from '../../interfaces/common/chart';

@Injectable()
export class StatsBarService extends StatsBarData {

  private statsBarData: AggregatedChartData = {
    chartLabel: '$',
    axisXLabels: [],
    linesData: [[300, 520, 435, 530], [730, 620, 660, 860]],
    legend: [],
    aggregatedData: [{
      title: 'Jun 1 - Jun 30',
      value: 300,
    }, {
      title: 'Jul 1 - Jul 31',
      value: 800,
    }],
  };

  getStatsBarData(): Observable<AggregatedChartData> {
    return observableOf(this.statsBarData);
  }
}
