import { Component, ViewChild } from '@angular/core';
import { RahaService } from '../../service/raha';
import { firstValueFrom } from 'rxjs';
import { BaseChartDirective  } from 'ng2-charts';

@Component({
  selector: 'app-keskialue',
  imports: [BaseChartDirective],
  templateUrl: './keskialue.component.html',
  styleUrls: ['./keskialue.component.css']
})
export class KeskialueComponent {
  raha: number | undefined;

  pieChartData = {
    labels: ['Raha',],
    datasets: [
      {
        data: [] as number[],
        backgroundColor: ['#22c55e', '#e5e7eb', '#fbbf24', '#ef4444', '#6366f1']
      }
    ]
  };

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(private rahaService: RahaService) {}

  ngOnInit() {
  this.rahaService.raha$.subscribe(value => {
    this.raha = value;
    this.paivitaKaavio();
  });
}

  paivitaKaavio() {
    const tapahtumat = this.rahaService.getTapahtumat();
    this.pieChartData.labels = ['Raha', ...Object.keys(tapahtumat)];
    this.pieChartData.datasets[0].data = [
      this.raha ?? 0,
      ...Object.values(tapahtumat)
    ];
    this.chart?.update();
  }
}
