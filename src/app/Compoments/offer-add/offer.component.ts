import { Component } from '@angular/core';
import { HotelOffer } from '../../Entity/HotelOffer'; // Import the interface
import { Router } from '@angular/router';
import { MyserviceService } from '../../service/myservice.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent {
  constructor(private router: Router, private myService: MyserviceService) {}
  offer: HotelOffer = {
    id: 0,
    name: '',
    image: '',
    description: '',
    price: 0,
    startDate: new Date(),
    endDate: new Date(),
    active: true,
  };
  selectedFile: File | null = null;

  // Method to handle form submission
  submitOffer() {
    if (!this.selectedFile) {
      console.log(this.selectedFile);
      alert('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    // First, upload the image
    this.myService.uploadImage(formData).subscribe(
      (response: any) => {
        console.log('Image uploaded successfully:', response);

        // Set the image path in the offer
        this.offer.image = response.fileName;

        // Now, create the offer
        this.myService.createHotelOffer(this.offer).subscribe(
          (offerResponse) => {
            console.log('Offer created successfully:', offerResponse);
            this.router.navigate(['/offer_tab']);
          },
          (error) => {
            console.error('Error creating offer:', error);
          }
        );
      },
      (error) => {
        console.error('Error uploading image:', error);
      }
    );
  }
  onImageSelect(event: any) {
    if (event.files && event.files.length > 0) {
      const file = event.files[0];
      this.selectedFile = file;
      console.log('Selected file:', this.selectedFile); // Debug: Check the selected file
    } else {
      console.log('No file selected');
    }
  }
  Cancel() {
    this.router.navigate(['/offer_tab']);
  }
}
