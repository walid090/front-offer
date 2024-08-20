import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Entity/user';
import { Product } from '../Entity/Product';
import { map } from 'rxjs/operators';

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
}
