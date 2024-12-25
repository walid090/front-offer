export interface HotelOffer {
  id: number;
  name: string;
  description: string;
  price: number;
  startDate: Date;
  endDate: Date;
  image:  String;
  active: boolean; // to indicate whether the offer is currently active
}
