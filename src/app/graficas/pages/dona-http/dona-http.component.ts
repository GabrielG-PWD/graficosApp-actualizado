import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: ``
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [],
  };
  public doughnutChartType: ChartType = 'doughnut';


  constructor(private graficasService: GraficasService) { }


  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSociales()
      .subscribe(data => {
        this.graficasService.getUsuariosParaTabla().subscribe(data => this.doughnutChartData = data)
      })
  }



}
