

import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../../@theme/theme.module';

import { ChartModule } from 'angular2-chartjs';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { InsuranceDashboardComponent } from './insurance-dashboard.component';
import { TopPerformingAttorneysComponent } from './top-performing-attorneys/top-performing-attorneys.component';
import { TopPerformingAttorneysFrontComponent } from './top-performing-attorneys/front-side/top-performing-attorneys-front.component';
import { TopPerformingAttorneysBackComponent } from './top-performing-attorneys/back-side/top-performing-attorneys-back.component';
import { TopReferringAttorneysComponent } from './top-referring-attorneys/top-referring-attorneys.component';
import { TopReferringAttorneysFrontComponent } from './top-referring-attorneys/front-side/top-referring-attorneys-front.component';
import { TopReferringAttorneysHeaderComponent } from './top-referring-attorneys/header/top-referring-attorneys-header.component';
import { TopReferringAttorneysBackComponent } from './top-referring-attorneys/back-side/top-referring-attorneys-back.component';
import { TopReferringAttorneysBarChartComponent } from './top-referring-attorneys/back-side/top-referring-attorneys-chart.component';
import { PatientsCumulativeStatsBarAnimationChartComponent } from './patient-cumulative-data/front-side/patient-cumulative-stats-bar-animation-chart.component';
import { PatientsCumulativeStatsCardFrontComponent } from './patient-cumulative-data/front-side/patient-cumulative-stats-card-front.component';
import { PatientCumulativeDataComponent } from './patient-cumulative-data/patient-cumulative-data.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbSpinnerModule,
    LeafletModule,
  ],
  declarations: [
    InsuranceDashboardComponent,
    TopPerformingAttorneysComponent,
    TopPerformingAttorneysFrontComponent,
    TopPerformingAttorneysBackComponent,
    TopReferringAttorneysComponent,
    TopReferringAttorneysFrontComponent,
    TopReferringAttorneysHeaderComponent,
    TopReferringAttorneysBackComponent,
    TopReferringAttorneysBarChartComponent,
    PatientsCumulativeStatsBarAnimationChartComponent,
    PatientsCumulativeStatsCardFrontComponent,
    PatientCumulativeDataComponent,
  ],
  providers: [
  ],
})
export class InsuranceDashboardModule { }
