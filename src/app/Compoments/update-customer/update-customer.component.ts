import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MyserviceService } from '../../service/myservice.service';
import { Customer } from '../../Entity/Customer';
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css',
})
export class UpdateCustomerComponent implements OnInit {
  newCustomer: Customer = {
    id: 0,
    name: '',
    address: '',
    phone: '',
    email: '',
  };
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      //console.log(id);
      this.ReadData(id); // Use the parameter as needed
    });
  }

  constructor(
    private myService: MyserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ReadData(id: any) {
    this.myService.GetCustomerById(Number(id)).subscribe(
      (response) => {
        if (response) {
          console.log('Response from API update', response);
          this.newCustomer = response;
        }
      },
      (error) => {
        console.error('Error posting data', error);
      }
    );
  }

  updateCustomer() {
    this.myService.UpdateCustomer(this.newCustomer).subscribe(
      (response) => {
        if (response) {
          console.log('Response from API', response);
          this.router.navigate(['/customer-tab']);
        }
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
