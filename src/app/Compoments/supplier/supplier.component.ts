 
import { Component } from '@angular/core';
import { Product } from '../../Entity/Product';
import { MyserviceService } from '../../service/myservice.service';
import { Customer } from '../../Entity/Customer';
import { Supplier } from '../../Entity/Supplier';
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.css'
})
export class SupplierComponent {
  data: Supplier[] = [];
  page: number = 1;
count: number = 0;
tableSize: number = 5;
tableSizes: any = [5, 10, 15, 20];

  constructor(private myService: MyserviceService) {}

  ngOnInit(): void {
    this.ReadData();
  }

  ReadData() {
    this.myService.GetAllSupplier().subscribe(
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
    this.myService.DeleteSupplier(id).subscribe(
      (response) => {
        console.log('Response from API', response);
        this.data = this.data.filter((supplier) => supplier.id !== id);
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
