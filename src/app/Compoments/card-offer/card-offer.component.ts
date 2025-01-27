import { Component, Input } from '@angular/core';
import { HotelOffer } from '../../Entity/HotelOffer';
import { Reservation } from '../../Entity/Reservation';
import { User } from '../../Entity/user';
import { MyserviceService } from '../../service/myservice.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-card-offer',
  templateUrl: './card-offer.component.html',
  styleUrl: './card-offer.component.css',
})
export class CardOfferComponent {
  constructor(private myService: MyserviceService) {}
  imageName: string = '1734948901980_Booking-Symbole.jpg';
  display: boolean = false;

  showDialog() {
    this.display = true;
  }
  onSuccess(id_offer: number) {
    this.createResarvation(id_offer);
    this.display = false;
  }

  onCancel() {
    this.display = false;
  }

  @Input() offer: HotelOffer = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    startDate: new Date(),
    endDate: new Date(),
    image: '',
    active: false,
  };

  createResarvation(id_offer: number) {
    const user: User = {
      id: Number(localStorage.getItem('id')),
      username: '',
      email: '',
      password: '',
      phone_number: '',
      role: '',
    };

    const hotelOffer: HotelOffer = {
      id: id_offer,
      price: 0,
      name: '',
      description: '',
      startDate: new Date(),
      endDate: new Date(),
      image: '',
      active: false,
    };
    let resv: Reservation = {
      id: 0,
      user_id: Number(localStorage.getItem('id')),
      hotel_offer_id: id_offer,
      statut: 'Padding',
      date: new Date(),
      hotelOffer: hotelOffer,
      user: user,
    };
    this.myService.createReservation(resv).subscribe(
      (response) => {
        if (response) {
          console.log('Response from API', response);
        }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
