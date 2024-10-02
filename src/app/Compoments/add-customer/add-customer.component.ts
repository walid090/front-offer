import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MyserviceService } from '../../service/myservice.service';
import { Customer } from '../../Entity/Customer';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css',
})
export class AddCustomerComponent {
  
  newCustomer: Customer = {
    id: 0,
    name: '',
    address: '',
    phone: '',
    email: '',
  };
  ngOnInit(): void {}
  constructor(private myService: MyserviceService, private router: Router) {}
  addProduct() {
    console.log(this.newCustomer);
    this.myService.AddCustomer(this.newCustomer).subscribe(
      (response) => {
        if (response) {
          this.router.navigate(['/customer-tab']);
        }
        console.log('Response from API', response);
      },
      (error) => {
        console.error('Error posting data', error);
      }
    );
  }
  Cancel() {
    this.router.navigate(['/customer-tab']);
  }
}
