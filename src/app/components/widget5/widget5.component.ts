import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketService } from 'src/app/services/socket/socket.service';

@Component({
  selector: 'app-widget5',
  templateUrl: './widget5.component.html',
  styleUrls: ['./widget5.component.scss']
})
export class Widget5Component implements OnInit {

  chart: any;

  constructor(
    private socket: SocketService
  ) { }

  ngOnInit(): void {
    this.socket.listen('widget5').subscribe((res: any) => {
      // console.log('the response from server : ', res);
      this.chart.data.datasets[0].data = res[0];
      this.chart.data.datasets[1].data = res[1];
      this.chart.data.datasets[2].data = res[2];
      this.chart.data.datasets[3].data = res[3];
      this.chart.update();
    });

    this.chart = new Chart('canvas5', {
      type: 'bar',
      data: {
        labels: ['1900', '1950', '1999', '2050'],
        datasets: [{
            label: 'Europe',
            type: 'line',
            borderColor: '#8e5ea2',
            // data: [408, 547, 675, 734],
            // fill: false
          }, {
            label: 'Africa',
            type: 'line',
            borderColor: '#3e95cd',
            // data: [133, 221, 783, 2478],
            // fill: false
          }, {
            label: 'Europe',
            type: 'bar',
            backgroundColor: 'rgba(0,0,0,0.2)',
            // data: [408, 547, 675, 734],
          }, {
            label: 'Africa',
            type: 'bar',
            backgroundColor: 'rgba(0,0,0,0.2)',
            // data: [133, 221, 783, 2478]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Population growth (millions): Europe & Africa'
        },
        legend: { display: false }
      }
  });
  }

}
