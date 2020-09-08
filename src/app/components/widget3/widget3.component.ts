import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketService } from 'src/app/services/socket/socket.service';

@Component({
  selector: 'app-widget3',
  templateUrl: './widget3.component.html',
  styleUrls: ['./widget3.component.scss']
})
export class Widget3Component implements OnInit {


  chart: any;

  constructor(
    private socket: SocketService
  ) { }

  ngOnInit(): void {
    this.socket.listen('widget3').subscribe((res: any) => {
      // console.log('the response from server : ', res);
      this.chart.data.datasets[0].data = res[0];
      this.chart.update();
    });

    this.chart = new Chart('canvas3', {
      type: 'polarArea',
      data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
            // data: [2478, 5267, 734, 784, 433]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
  });
  }

}
