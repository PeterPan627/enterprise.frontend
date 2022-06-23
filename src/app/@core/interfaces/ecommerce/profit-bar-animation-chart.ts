

import { Observable } from 'rxjs';
import { ChartData } from '../common/chart';

export abstract class ProfitBarAnimationChartData {
  abstract getChartData(): Observable<ChartData>;
}
