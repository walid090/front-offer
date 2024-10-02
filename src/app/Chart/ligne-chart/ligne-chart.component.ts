import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { MyserviceService } from '../../service/myservice.service';

@Component({
  selector: 'app-ligne-chart',
  templateUrl: './ligne-chart.component.html',
  styleUrls: ['./ligne-chart.component.css'],
})
export class LigneChartComponent implements OnInit {
  @ViewChild('myChart') chartRef: ElementRef | undefined;
  value: number[] = [];
  months: string[] = [];

  constructor(private myService: MyserviceService) {}

  ngOnInit(): void {
    this.months = this.getLastSixMonths();
    this.GetData();
  }

  CreateChart() {
    if (this.chartRef?.nativeElement) {
      new Chart(this.chartRef.nativeElement, {
        type: 'line',
        data: {
          labels: this.months,
          datasets: [
            {
              label: 'Revenue By Month',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              data: this.value,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Month',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Value In DT',
              },
            },
          },
        },
      });
    }
  }

  getLastSixMonths(): string[] {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const currentMonth = new Date().getMonth();
    const lastSixMonths = [];

    for (let i = 0; i < 6; i++) {
      lastSixMonths.unshift(months[(currentMonth - i + 12) % 12]);
    }

    return lastSixMonths;
  }

  GetData() {
    const dataObservables = this.months.map((month) =>
      this.myService.GetRevenueByMonth(month).toPromise()
    );

    Promise.all(dataObservables).then((responses) => {
      this.value = responses.filter((response): response is number => response !== undefined);
      this.CreateChart();
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }
}
