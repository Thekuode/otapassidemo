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
    labels: ['Raha'],
    datasets: [
      {
        data: [] as number[],
        backgroundColor: ['#22c55e', '#e5e7eb']
      }
    ]
  };

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(private rahaService: RahaService) {}

  ngOnInit() {
  this.rahaService.raha$.subscribe(value => {
    this.raha = value;
    this.pieChartData.datasets[0].data[0] = value;
    this.chart?.update();
  });
  }
}
