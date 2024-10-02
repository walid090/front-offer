import { Component } from '@angular/core';
import { Product } from '../../Entity/Product';
import { MyserviceService } from '../../service/myservice.service';
import { Customer } from '../../Entity/Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  data: Customer[] = [];
  page: number = 1;
count: number = 0;
tableSize: number = 5;
tableSizes: any = [5, 10, 15, 20];

  constructor(private myService: MyserviceService) {}

  ngOnInit(): void {
    this.ReadData();
  }

  ReadData() {
    this.myService.GetAllCustomer().subscribe(
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

  Delete(id: number) {
    this.myService.DeleteCustomer(id).subscribe(
      (response) => {
        console.log('Response from API', response);
        this.data = this.data.filter((customer) => customer.id !== id);
        location.reload();
      },
      (error) => {
        console.error('Error deleting data', error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.ReadData();
    }
    TableSizeChange (event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ReadData();
    }
}
