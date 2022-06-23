

import { Observable } from 'rxjs';
import { ChartData, ChartSummary } from '../common/chart';

export interface Month {
  month: string;
  delta: string;
  down: boolean;
  kWatts: string;
  cost: string;
}

export interface Electricity {
  title: string;
  active?: boolean;
  months: Month[];
}

export interface ElectricityChart {
  chart: ChartData;
  consumed: ChartSummary;
  spent: ChartSummary;
}

export abstract class ElectricityData {
  abstract getListData(yearsCount: number): Observable<Electricity[]>;
  abstract getChartData(period: string): Observable<ElectricityChart>;
}
