import { HotelOffer } from './HotelOffer';
import { User } from './user';

export interface Reservation {
  id: number;
  user_id: number;
  hotel_offer_id: number;
  statut: string;
  date: Date;
  hotelOffer: HotelOffer;
  user: User;
}
