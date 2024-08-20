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
  value:number[]=[]
  constructor(private myService: MyserviceService) {}

  ngAfterViewInit(): void {
    this.ReadData();
    this.CreateChart();
  }

  ReadData() {
    this.myService.getCategories().subscribe((data: string[]) => {
      this.categories = data;
      this.FillData();
    });
  }
  FillData() {
    this.categories.forEach(category => {
      this.myService.GetStockByCategory(category).subscribe(response => {
        this.value.push(response);
        //console.log(this.value)
      });
    });
   
  }

  CreateChart() {
    if (this.chartRef?.nativeElement) {
      new Chart(this.chartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: this.categories,
          datasets: [
            {
              label: 'Stock By Category',
              data: this.value,
              borderWidth: 1,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
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
