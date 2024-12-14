import { Component } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';
import { HotelOffer } from '../../Entity/HotelOffer';
@Component({
  selector: 'app-reservation-tab',
  templateUrl: './reservation-tab.component.html',
  styleUrl: './reservation-tab.component.css'
})
export class ReservationTabComponent {
  data: HotelOffer[] = [];
  page: number = 1;
count: number = 0;
tableSize: number = 5;
tableSizes: any = [5, 10, 15, 20];

  constructor(private myService: MyserviceService) {}

  ngOnInit(): void {
    
  }

  

  
  onTableDataChange(event: any) {
    this.page = event;
    //this.ReadData();
    }
    TableSizeChange (event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
   // this.ReadData();
    }
}
