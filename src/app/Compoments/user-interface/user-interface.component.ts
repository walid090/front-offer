import { Component } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';
import { Reservation } from '../../Entity/Reservation';
import { HotelOffer } from '../../Entity/HotelOffer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrl: './user-interface.component.css',
})
export class UserInterfaceComponent {
  constructor(private myService: MyserviceService, private router: Router) {}
  data: HotelOffer[] = [];

  ngOnInit(): void {
    this.ReadData();
  }
  logout() {
    localStorage.removeItem('id');
    this.router.navigate(['']);
  }
  ReadData() {
    this.myService.getAllHotelOffers().subscribe(
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
}
