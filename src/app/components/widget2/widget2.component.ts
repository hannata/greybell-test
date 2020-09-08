import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketService } from 'src/app/services/socket/socket.service';

@Component({
  selector: 'app-widget2',
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.scss']
})
export class Widget2Component implements OnInit {


  chart: any;

  constructor(
    private socket: SocketService
  ) { }

  ngOnInit(): void {
    this.socket.listen('widget2').subscribe((res: any) => {
      // console.log('the response from server : ', res);
      this.chart.data.datasets[0].data = res[0];
      this.chart.data.datasets[1].data = res[1];
      this.chart.update();
    });

    this.chart = new Chart('canvas2', {
      type: 'radar',
      data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: '1950',
            fill: true,
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            // data: [8.77, 55.61, 21.69, 6.62, 6.82]
          }, {
            label: '2050',
            fill: false,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            // data: [25.48, 54.16, 7.61, 8.06, 4.45]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Distribution in % of world population'
        }
      }
  });
  }
}
