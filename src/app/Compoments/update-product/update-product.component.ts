import { Component, OnInit } from '@angular/core';
import { Product } from '../../Entity/Product';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { MyserviceService } from '../../service/myservice.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css',
})
export class UpdateProductComponent implements OnInit {
  categories: string[] = [];

  ngOnInit(): void {
    this.myService.getCategories().subscribe((data: string[]) => {
      this.categories = data;
      //this.newProduct.category = this.categories[0]; // Fallback to the first category if default is invalid
    });
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(id);
      this.ReadData(id); // Use the parameter as needed
    });
  }

  newProduct: Product = {
    id: 0, // Assuming the backend will handle the ID
    name: '',
    description: '',
    price: 0,
    category: '',
    quantity: 0,
    available: true,
    dateAdded:new Date()
  };
  constructor(
    private myService: MyserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ReadData(id: any) {
    this.myService.GetProductById(Number(id)).subscribe(
      (response) => {
        if (response) {
          console.log('Response from API', response);
          this.newProduct = response;
        }
      },
      (error) => {
        console.error('Error posting data', error);
      }
    );
  }

  UpdateProduct() {
    this.myService.UpdateProduct(this.newProduct).subscribe(
      (response) => {
        if (response) {
          console.log('Response from API', response);
          this.router.navigate(['/dashbord']);
        }
      },
      (error) => {
        console.error('Error posting data', error);
      }
    );
  }
  Cancel() {
    this.router.navigate(['/dashbord']);
  }
}
