import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Compoments/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { BarChartComponent } from './Chart/bar-chart/bar-chart.component';
import { AdminDashbordComponent } from './Compoments/admin-dashbord/admin-dashbord.component';
import { ProductTabComponent } from './Compoments/product-tab/product-tab.component';
import { AddProductComponent } from './Compoments/add-product/add-product.component';
import { UpdateProductComponent } from './Compoments/update-product/update-product.component';
import { LigneChartComponent } from './Chart/ligne-chart/ligne-chart.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Compoments/navbar/navbar.component';
import { OperationComponent } from './Compoments/operation/operation.component';
import { SupplierComponent } from './Compoments/supplier/supplier.component';
import { CustomerComponent } from './Compoments/customer/customer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReportsComponent } from './Compoments/reports/reports.component';
import { UpdateCustomerComponent } from './Compoments/update-customer/update-customer.component';
import { UpdateSupplierComponent } from './Compoments/update-supplier/update-supplier.component';
import { AddCustomerComponent } from './Compoments/add-customer/add-customer.component';
import { AddSupplierComponent } from './Compoments/add-supplier/add-supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BarChartComponent,
    AdminDashbordComponent,
    ProductTabComponent,
    AddProductComponent,
    UpdateProductComponent,
    LigneChartComponent,
    OperationComponent,
    SupplierComponent,
    CustomerComponent,
    ReportsComponent,
    UpdateCustomerComponent,
    UpdateSupplierComponent,
    AddCustomerComponent,
    AddSupplierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    NavbarComponent,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
