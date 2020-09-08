import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/services/socket/socket.service';

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.scss']
})
export class Widget1Component implements OnInit {

  chart: Chart;
  widget1Sub$: Subscription;

  constructor(
    private socket: SocketService
  ) { }

  ngOnInit(): void {
    this.socket.listen('widget1').subscribe((res: any) => {
      // console.log('the response from server : ', res);
      this.chart.data.datasets[0].data = res[0];
      this.chart.update();
    });

    this.chart = new Chart('canvas1', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: false,
          text: 'realtime charts'
        },
      },
      data: {
        labels: ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'august'],
        datasets: [
          {
            type: 'bar',
            label: 'test chart',
            // data: [10, 3, 6, 11, 38, 5, 6, 17],
            backgroundColor: '#009cde',
            fill: false,
            // hidden: true
          }
        ]
      }
    });
  }

}
