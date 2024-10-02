import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MyserviceService } from '../../service/myservice.service';
import { Customer } from '../../Entity/Customer';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrl: './update-supplier.component.css'
})
export class UpdateSupplierComponent {
  newSupplier: Customer = {
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
    this.myService.GetSupplierById(Number(id)).subscribe(
      (response) => {
        if (response) {
          console.log('Response from API update', response);
          this.newSupplier = response;
        }
      },
      (error) => {
        console.error('Error posting data', error);
      }
    );
  }

  updateCustomer() {
    this.myService.UpdateSupplier(this.newSupplier).subscribe(
      (response) => {
        if (response) {
          console.log('Response from API', response);
          this.router.navigate(['/supplier-tab']);
        }
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
