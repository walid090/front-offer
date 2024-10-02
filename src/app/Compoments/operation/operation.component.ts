import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../../service/myservice.service';
import { Supplier } from '../../Entity/Supplier';
import { Customer } from '../../Entity/Customer';
import { Stock } from '../../Entity/Stock';
import { Product } from '../../Entity/Product';

import { forkJoin } from 'rxjs';
import { Console } from 'console';
@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css',
})
export class OperationComponent implements OnInit {
  constructor(private myService: MyserviceService, private router: Router) {}
  ngOnInit(): void {
    this.ReadData();
  }
  dataSupplier: Supplier[] = [];
  dataCustomer: Customer[] = [];
  customertab: Customer[] = [];
  suppliertab: Supplier[] = [];
  SupplierName: any = null;
  CustomerName: any = null;
  in: boolean = true;
  out: boolean = false;
  stockAction: string = '';
  product_id: number = 0;
  quantity: number = 0;
  data: any;
  product: any = 'Select Product Name';
  value: string = '';
  data1: Product[] = [];

  ReadData() {
    this.myService.getAllProducts().subscribe(
      (response) => {
        if (response) {
          console.log('Response from API', response);
          this.data1 = response;
        }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  ReadDataSupplier() {
    this.myService.GetAllSupplier().subscribe(
      (response) => {
        if (response) {
          console.log('Response from API', response);
          this.dataSupplier = response;
        }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  ReadDataCustomer() {
    this.myService.GetAllCustomer().subscribe(
      (response) => {
        if (response) {
          console.log('Response from API', response);
          this.dataCustomer = response;
        }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  handleStockChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;

    if (value === 'Add') {
      this.ReadDataSupplier();
      this.in = true;

      this.out = false;
    } else if (value === 'out') {
      console.log('Stock out');
      this.ReadDataCustomer();
      this.in = false;
      this.out = true;
    }
  }
  Cancel() {
    this.router.navigate(['/dashbord']);
  }

  addOperation() {
    if (this.in) {
      this.value = 'buy';
    }
    if (this.out) {
      this.value = 'sell';
    }
    this.data = {
      movement_type: this.value,
      id_prodcut: this.product?.id,
      id_customer: this.CustomerName?.id,
      id_supplier: this.SupplierName?.id,
      quantity: this.quantity,
    };
    console.log(this.data);

    this.myService.AddStock(this.data).subscribe(
      (response) => {
        if (response) {
          this.router.navigate(['/dashbord']);
        }
        console.log('Response from API', response);
      },
      (error) => {
        console.error('Error posting data', error);
      }
    );
  }
}
