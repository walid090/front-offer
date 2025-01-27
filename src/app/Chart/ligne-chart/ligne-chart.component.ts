import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Chart } from 'chart.js/auto';
import { MyserviceService } from '../../service/myservice.service';

@Component({
  selector: 'app-ligne-chart',
  templateUrl: './ligne-chart.component.html',
  styleUrls: ['./ligne-chart.component.css'],
})
export class LigneChartComponent implements AfterViewInit {
  @ViewChild('myChart') chartRef: ElementRef | undefined;
  values: number[] = [];
  labels: string[] = [];
  data: any;

  constructor(private myService: MyserviceService) {}

  ngAfterViewInit(): void {
    this.GetData();
  }

  CreateChart() {
    if (this.chartRef?.nativeElement) {
      new Chart(this.chartRef.nativeElement, {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: 'Number of Reservations by Day',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              data: this.values,
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
                text: 'Date',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Number of Reservations',
              },
            },
          },
        },
      });
    }
  }

  GetData() {
    const currentMonth = new Date().getMonth()
    this.myService.CountReservationsbyByMonths(currentMonth).subscribe((response) => {
      this.data = response;
      console.log(this.data);

      // Process the data to extract labels (dates) and values (counts)
      // Extract the labels (dates) and format them to "YYYY-MM-DD"
      this.labels = Object.keys(this.data).map((dateStr) => {
        const date = new Date(dateStr); // Convert the date string to a Date object
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if necessary
        const day = date.getDate().toString().padStart(2, '0'); // Add leading zero if necessary
        return `${year}-${month}-${day}`; // Return formatted date
      });
      this.values = Object.values(this.data); // Counts

      // Now, create the chart with the processed data
      this.CreateChart();
    });
  }
}
