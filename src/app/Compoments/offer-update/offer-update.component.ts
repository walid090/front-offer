import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../../service/myservice.service';
import { HotelOffer } from '../../Entity/HotelOffer';
@Component({
  selector: 'app-offer-update',
  templateUrl: './offer-update.component.html',
  styleUrl: './offer-update.component.css',
})
export class OfferUpdateComponent implements OnInit {
  constructor(
    private router: Router,
    private myService: MyserviceService,
    private route: ActivatedRoute
  ) {}

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
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.ReadData(id); // Use the parameter as needed
    });
  }

  ReadData(id: any) {
    this.myService.getHotelOfferById(Number(id)).subscribe(
      (response) => {
        if (response) {
          console.log('Response from API update', response);
          this.offer = response;
          this.offer.startDate = new Date(this.offer.startDate);
          this.offer.endDate = new Date(this.offer.endDate);
        }
      },
      (error) => {
        console.error('Error posting data', error);
      }
    );
  }

  submitOffer() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // First, upload the image
      this.myService.uploadImage(formData).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);

          // Set the image path in the offer
          this.offer.image = response.fileName;
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    }

    // Now, create the offer
    this.myService.updateHotelOffer(this.offer).subscribe(
      (offerResponse) => {
        console.log('Offer update successfully:', offerResponse);
        this.router.navigate(['/offer_tab']);
      },
      (error) => {
        console.error('Error creating offer:', error);
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
