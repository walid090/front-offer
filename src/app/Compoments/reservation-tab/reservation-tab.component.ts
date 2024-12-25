import { Component } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';
import { HotelOffer } from '../../Entity/HotelOffer';
import { Reservation } from '../../Entity/Reservation';
@Component({
  selector: 'app-reservation-tab',
  templateUrl: './reservation-tab.component.html',
  styleUrl: './reservation-tab.component.css',
})
export class ReservationTabComponent {
  data: Reservation[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];

  constructor(private myService: MyserviceService) {}

  ngOnInit(): void {
    this.ReadData();
  }
  ReadData() {
    this.myService.GetAllResrvations().subscribe(
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
  UpdateStatut(s: string, res: Reservation) {
    res.statut = s;
    this.myService.UpdateReservation(res).subscribe(
      (Response) => {
        console.log('Reservation update successfully:', Response);
      },
      (error) => {
        console.error('Error creating offer:', error);
      }
    );
  }
  Delete(id: number) {
    this.myService.deleteReservation(id).subscribe(
      (Response) => {
        console.log('Reservation deleted successfully:', Response);
        this.ReadData();
      },
      (error) => {
        console.error('Error creating offer:', error);
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
}
