import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketService } from 'src/app/services/socket/socket.service';

@Component({
  selector: 'app-widget6',
  templateUrl: './widget6.component.html',
  styleUrls: ['./widget6.component.scss']
})
export class Widget6Component implements OnInit {

  chart: any;

  constructor(
    private socket: SocketService
  ) { }

  ngOnInit(): void {
    this.socket.listen('widget6').subscribe((res: any) => {
      // console.log('the response from server : ', res);
      this.chart.data.datasets[0].data = res[0];
      this.chart.update();
    });

    this.chart = new Chart('canvas6', {
      type: 'horizontalBar',
      data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
            data: [2478, 5267, 734, 784, 433]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
  });
  }

}
