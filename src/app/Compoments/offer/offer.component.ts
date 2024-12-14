import { Component } from '@angular/core';
import { HotelOffer } from '../../Entity/HotelOffer'; // Import the interface
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent {
  constructor( private router: Router){}
  offer: HotelOffer = {
    id: 0,
    name: '',
    image: {} as File,
    description: '',
    price: 0,
    startDate: new Date(),
    endDate: new Date(),
    isActive: false,
  };

  // Method to handle form submission
  submitOffer() {
    if (this.offer.name && this.offer.description && this.offer.price > 0) {
      alert('Offer Submitted!');
      console.log(this.offer);
    } else {
      alert('Please fill in all required fields!');
    }
  }
  onImageSelect(event: any) {
    const file = event.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.offer.image = e.target.result; // Base64 image data
      };
      reader.readAsDataURL(file);
    }
  }
  Cancel() {
    this.router.navigate(['/offer_tab']);
  }
}
