export interface HotelOffer {
  id: number;
  name: string;
  description: string;
  price: number;
  startDate: Date;
  endDate: Date;
  image: File;
  isActive: boolean; // to indicate whether the offer is currently active
}
