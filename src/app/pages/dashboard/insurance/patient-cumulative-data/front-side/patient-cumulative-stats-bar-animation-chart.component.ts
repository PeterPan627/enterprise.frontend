

import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { LayoutService } from '../../../../../@core/utils/layout.service';
import { ChartData } from '../../../../../@core/interfaces/common/chart';

@Component({
  selector: 'ngx-patient-cumulative-stats-bar-animation-chart',
  template: `
    <div echarts
         [options]="options"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
})
export class PatientsCumulativeStatsBarAnimationChartComponent implements AfterViewInit, OnDestroy {

  private alive = true;

  @Input() lines: ChartData;

  echartsIntance: any;
  options: any = {};

  constructor(private theme: NbThemeService,
    private layoutService: LayoutService) {
    this.layoutService.onChangeLayoutSize()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe(() => this.resizeChart());
  }

  ngAfterViewInit() {
    this.theme.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(config => {
        const profitBarAnimationEchart: any = config.variables.profitBarAnimationEchart;

        this.setChartOption(profitBarAnimationEchart);
      });
  }

  setChartOption(chartVariables) {
    this.options = {
      color: [
        chartVariables.firstAnimationBarColor,
        chartVariables.secondAnimationBarColor,
      ],
      grid: {
        left: '8%',
        top: '8%',
        right: '8%',
        bottom: '8%',
      },
      legend: {
        data: this.lines.legend,
        borderWidth: 0,
        borderRadius: 0,
        itemWidth: 15,
        itemHeight: 15,
        textStyle: {
          color: chartVariables.textColor,
        },
      },
      tooltip: {
        axisPointer: {
          type: 'shadow',
        },
        textStyle: {
          color: chartVariables.tooltipTextColor,
          fontWeight: chartVariables.tooltipFontWeight,
          fontSize: chartVariables.tooltipFontSize,
        },
        position: 'top',
        backgroundColor: chartVariables.tooltipBg,
        borderColor: chartVariables.tooltipBorderColor,
        borderWidth: chartVariables.tooltipBorderWidth,
        formatter: params => `${Math.round(parseInt(params.value, 10))} referrals`,
        extraCssText: chartVariables.tooltipExtraCss,
      },
      xAxis: [
        {
          data: this.lines.axisXLabels,
          silent: false,
          axisLine: {
            lineStyle: {
              color: chartVariables.firstAnimationBarColor,
            },
            show: true,
          },
          axisLabel: {
            show: true,
          },
          axisTick: {
            show: true,
          },
        },
      ],
      yAxis: [
        {
          axisLine: {
            lineStyle: {
              color: chartVariables.secondAnimationBarColor,
            },
            show: true,
          },
          axisLabel: {
            show: true,
          },
          axisTick: {
            show: true,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: chartVariables.splitLineStyleColor,
              opacity: chartVariables.splitLineStyleOpacity,
              width: chartVariables.splitLineStyleWidth,
            },
          },
        },
      ],
      series: [
        {
          name: 'daily patients',
          type: 'bar',
          data: this.lines.linesData[0],
          animationDelay: idx => idx * 10,
        },
        {
          name: 'cumulative patients',
          type: 'line',
          data: this.lines.linesData[1],
          animationDelay: idx => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5,
    };
  }

  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
    }
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
