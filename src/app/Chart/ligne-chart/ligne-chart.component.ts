import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import { Chart } from 'chart.js/auto';
import { MyserviceService } from '../../service/myservice.service';
@Component({
  selector: 'app-ligne-chart',
  templateUrl: './ligne-chart.component.html',
  styleUrl: './ligne-chart.component.css',
})
export class LigneChartComponent implements OnInit {
  @ViewChild('myChart') chartRef: ElementRef | undefined;
  constructor(private myService: MyserviceService) {}
  ngOnInit(): void {
    this.CreateChart();
  }
  label: string[] = [];
  value: number[] = [];

  ngAfterViewInit(): void {
    this.CreateChart();
  }
  CreateChart() {
    this.GetData();
    if (this.chartRef?.nativeElement) {
      new Chart(this.chartRef.nativeElement, {
        type: 'line',

        data: {
          labels: this.getLastSixMonths(),
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
    const currentMonth = new Date().getMonth(); // Get current month (0-indexed)
    const lastSixMonths = [];

    for (let i = 0; i < 6; i++) {
      lastSixMonths.unshift(months[(currentMonth - i + 12) % 12]);
    }

    return lastSixMonths;
  }
  GetData() {
    this.getLastSixMonths().forEach((month) => {
      this.myService.GetRevenueByMonth(month).subscribe((response) => {
        this.value.push(response);
        console.log(this.value);
      });
    });
  }
}
