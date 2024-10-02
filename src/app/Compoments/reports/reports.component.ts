import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';
import { Product } from '../../Entity/Product';
import { Stock } from '../../Entity/Stock';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent {
  data: Product[] = [];
  data1: Stock[] = [];

  dataSend: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];
  product: any = 'Select Product Name';
  Transaction_type: any = 'Select Transaction Type';
  constructor(private myService: MyserviceService) {}

  ngOnInit(): void {
    this.ReadData();
  }

  ReadData() {
    this.myService.getAllProducts().subscribe(
      (response) => {
        if (response) {
          console.log('Response from API', response);
          this.data = response;
        }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.search();
  }
  TableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.search();
  }
  search() {
    this.dataSend = {
      id: this.product?.id,
      type: this.Transaction_type,
    };
    this.myService.GetStockByProductIdAndType(this.dataSend).subscribe(
      (response) => {
        if (response) {
          console.log('Response from API', response);
          this.data1 = response;
          console.log(this.data1);
        }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
