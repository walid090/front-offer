import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MyserviceService } from '../../service/myservice.service';
import { Supplier } from '../../Entity/Supplier';


@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrl: './add-supplier.component.css'
})
export class AddSupplierComponent {
 
  newSupllier: Supplier = {
    id: 0,
    name: '',
    address: '',
    phone: '',
    email: '',
  };
  ngOnInit(): void {}
  constructor(private myService: MyserviceService, private router: Router) {}
  addSupplier() {
    console.log(this.newSupllier);
    this.myService.AddSupplier(this.newSupllier).subscribe(
      (response) => {
        if (response) {
          this.router.navigate(['/supplier-tab']);
        }
        console.log('Response from API', response);
      },
      (error) => {
        console.error('Error posting data', error);
      }
    );
  }
  Cancel() {
    this.router.navigate(['/supplier-tab']);
  }
}
