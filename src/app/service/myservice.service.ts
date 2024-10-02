import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Entity/user';
import { Product } from '../Entity/Product';
import { map } from 'rxjs/operators';
import { Customer } from '../Entity/Customer';
import { Supplier } from '../Entity/Supplier';
import { Stock } from '../Entity/Stock';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor(private http: HttpClient) {}

  Auth(data: User): Observable<User> {
    return this.http.post<User>('http://localhost:9000/Dashbord/Auth', data);
  }

  AddProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      'http://localhost:9000/Dashbord/AddProduct',
      product
    );
  }

  DeleteProduct(id: number) {
    return this.http.delete(
      `http://localhost:9000/Dashbord/DeleteProduct/${id}`
    );
  }

  UpdateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      'http://localhost:9000/Dashbord/UpdateProduct',
      product
    );
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'http://localhost:9000/Dashbord/GetAllProduct'
    );
  }

  GetProductById(id: number): Observable<Product> {
    return this.http.get<Product>(
      `http://localhost:9000/Dashbord/GetProductById/${id}`
    );
  }

  getCategories(): Observable<string[]> {
    return this.http
      .get<{ categories: string[] }>('assets/categories.json')
      .pipe(map((data) => data.categories));
  }

  GetStockByCategory(category: string): Observable<number> {
    return this.http.get<number>(
      `http://localhost:9000/Dashbord/GetStockByCategory/${category}`
    );
  }
  GetRevenueByMonth(month: string): Observable<number> {
    return this.http.get<number>(
      `http://localhost:9000/Dashbord/GetRevenueByMonth/${month}`
    );
  }

  /* customer part*/

  AddCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(
      'http://localhost:9000/Dashbord/AddCustomer',
      customer
    );
  }

  DeleteCustomer(id: number) {
    return this.http.delete(
      `http://localhost:9000/Dashbord/DeleteCustomer/${id}`
    );
  }

  UpdateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(
      'http://localhost:9000/Dashbord/UpdateCustomer',
      customer
    );
  }

  GetAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(
      'http://localhost:9000/Dashbord/GetAllCustomer'
    );
  }

  GetCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(
      `http://localhost:9000/Dashbord/GetCustomerById/${id}`
    );
  }

  /* provider part **/
  AddSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(
      'http://localhost:9000/Dashbord/AddSupplier',
      supplier
    );
  }

  DeleteSupplier(id: number) {
    return this.http.delete(
      `http://localhost:9000/Dashbord/DeleteSupplier/${id}`
    );
  }

  UpdateSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(
      'http://localhost:9000/Dashbord/UpdateSupplier',
      supplier
    );
  }

  GetAllSupplier(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(
      'http://localhost:9000/Dashbord/GetAllSupplier'
    );
  }

  GetSupplierById(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(
      `http://localhost:9000/Dashbord/GetSupplierById/${id}`
    );
  }

  /* STOCK */
  AddStock(stock: any): Observable<any> {
    return this.http.post<any>(
      'http://localhost:9000/Dashbord/AddStock',
      stock
    );
  }
  GetStockByProductIdAndType(data: any): Observable<Stock[]> {
    return this.http.get<Stock[]>(
      `http://localhost:9000/Dashbord/GetStockByProductIdAndType/${data.id}/${data.type}`
    );
  }
}
