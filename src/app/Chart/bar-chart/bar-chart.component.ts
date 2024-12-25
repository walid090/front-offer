import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { MyserviceService } from '../../service/myservice.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements AfterViewInit {
  @ViewChild('myChart') chartRef: ElementRef | undefined;
  categories: string[] = [];
 
  chart: Chart | undefined;
  data: any;

  constructor(private myService: MyserviceService) {}

  ngAfterViewInit(): void {
    this.ReadData();
  }

  ReadData() {
    this.myService.CountReservationsbyStatus().subscribe((response) => {
      this.data = response;
      console.log(this.data.Padding); // Make sure 'Padding' exists in the response
      this.categories = [
        'Padding',
        'Refuse',
        'Accept',
      ]; // Example categories, update with actual data
      this.CreateChart();
    });
  }

  CreateChart() {
    if (this.chartRef?.nativeElement) {
      this.chart = new Chart(this.chartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: this.categories,
          datasets: [
            {
              label: 'Trend By Status',
              data: this.data,
              borderWidth: 1,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
             
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

              ],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    } else {
      console.error('Failed to find the canvas element');
    }
  }
}
