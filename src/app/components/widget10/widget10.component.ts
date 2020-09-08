import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketService } from 'src/app/services/socket/socket.service';

@Component({
  selector: 'app-widget10',
  templateUrl: './widget10.component.html',
  styleUrls: ['./widget10.component.scss']
})
export class Widget10Component implements OnInit {


  chart: any;

  constructor(
    private socket: SocketService
  ) { }

  ngOnInit(): void {
    this.socket.listen('widget10').subscribe((res: number[]) => {
      // console.log('the response from server : ', res);
      this.chart.data.datasets[0].data = res[0];
      this.chart.data.datasets[1].data = res[1];
      this.chart.data.datasets[2].data = res[2];
      this.chart.update();
    });

    this.chart = new Chart('canvas10', {
      type: 'line',
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 2000],
        datasets: [{
            // data: [0, 10, 5, 2, 20, 30, 45, 12],
            label: 'Africa',
            borderColor: '#3e95cd',
            fill: false
          }, {
            // data: [10, 15, 5, 2, 24, 13, 32],
            label: 'Asia',
            borderColor: '#8e5ea2',
            fill: false
          }, {
            // data: [0, 6, 34, 21, 32, 43, 12],
            label: 'Europe',
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'World population per region (in millions)'
        }
      }
    });
  }

}
