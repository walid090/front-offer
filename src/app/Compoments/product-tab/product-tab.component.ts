import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';
import { Product } from '../../Entity/Product';

@Component({
  selector: 'app-product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.css'],
})
export class ProductTabComponent implements OnInit {
  data: Product[] = [];
  page: number = 1;
count: number = 0;
tableSize: number = 5;
tableSizes: any = [5, 10, 15, 20];

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

  Delete(id: number) {
    this.myService.DeleteProduct(id).subscribe(
      (response) => {
        console.log('Response from API', response);
        this.data = this.data.filter((product) => product.id !== id);
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
