import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketService } from 'src/app/services/socket/socket.service';

@Component({
  selector: 'app-widget4',
  templateUrl: './widget4.component.html',
  styleUrls: ['./widget4.component.scss']
})
export class Widget4Component implements OnInit {

  chart: any;

  constructor(
    private socket: SocketService
  ) { }

  ngOnInit(): void {
    this.socket.listen('widget4').subscribe((res: any) => {
      // console.log('the response from server : ', res);
      this.chart.data.datasets[0].data = res[0];
      this.chart.update();
    });

    this.chart = new Chart('canvas4', {
      type: 'doughnut',
      data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America'],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9'],
            // data: [2478, 5267, 734, 784]
          }
        ]
      },
      options: {
        title: {
          display: false,
          text: 'Predicted world population (millions) in 2050'
        }
      }
  });
  }


}
