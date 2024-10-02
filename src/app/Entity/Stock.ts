import { Customer } from './Customer';
import { Product } from './Product';
import { Supplier } from './Supplier';

export interface Stock {
  id: number;
  movement_type: string;
  quantity: number;
  date_movement: Date;
  products: Product[];
  customers: Customer[];
  suppliers: Supplier[];
}
