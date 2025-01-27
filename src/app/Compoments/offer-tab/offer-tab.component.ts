import { Component } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';
import { HotelOffer } from '../../Entity/HotelOffer';
@Component({
  selector: 'app-offer-tab',
  templateUrl: './offer-tab.component.html',
  styleUrl: './offer-tab.component.css',
})
export class OfferTabComponent {
  data: HotelOffer[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];
  old_image: any = '';
  constructor(private myService: MyserviceService) {}

  ngOnInit(): void {
    this.ReadData();
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

  onTableDataChange(event: any) {
    this.page = event;
    this.ReadData();
  }
  TableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ReadData();
  }

  Delete(id: number) {
    this.myService.getHotelOfferById(id).subscribe((response) => {
      this.old_image = response.image;
    });
    this.myService.deleteImage(this.old_image).subscribe(
      (response) => {
        console.log('Response from API Image', response);
      },
      (error) => {
        console.error('Error deleting data', error);
      }
    );

    this.myService.deleteHotelOffer(id).subscribe(
      (response) => {
        console.log('Response from API', response);
        this.data = this.data.filter((offer) => offer.id !== id);
        location.reload();
      },
      (error) => {
        console.error('Error deleting data', error);
      }
    );
  }
}
