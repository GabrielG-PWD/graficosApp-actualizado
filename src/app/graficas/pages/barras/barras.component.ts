import { Component, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: ``
})
export class BarrasComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#FF8FD6', hoverBackgroundColor: '#460350' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#FF595F', hoverBackgroundColor: '#460350' },
    ],
  };


  constructor() { }


  public randomize(): void {

    this.barChartData.datasets.forEach((set, i) => {
      set.data.forEach((d, j) => {
        d = Math.round(Math.random() * 100);
        this.barChartData.datasets[i].data[j] = d
      })
    })
    this.chart?.update();
  }
}
