import { Component, OnInit } from '@angular/core';
import { Product } from '../../Entity/Product';
import { Router } from '@angular/router';
import { MyserviceService } from '../../service/myservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  categories: string[] = [];
  newProduct: Product = {
    id: 0, // Assuming the backend will handle the ID
    name: '',
    description: '',
    price: 0,
    category: '',
    quantity: 0,
    available: true,
    dateAdded: new Date(),
  };
  ngOnInit(): void {
    this.myService.getCategories().subscribe((data: string[]) => {
      this.categories = data;
      this.newProduct.category = this.categories[0]; // Fallback to the first category if default is invalid
    });
  }
  constructor(private myService: MyserviceService, private router: Router) {}
  addProduct() {
    console.log(this.newProduct);
    this.myService.AddProduct(this.newProduct).subscribe(
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
  Cancel() {
    this.router.navigate(['/dashbord']);
  }
}
