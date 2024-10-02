import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Compoments/login/login.component';
import { AdminDashbordComponent } from './Compoments/admin-dashbord/admin-dashbord.component';
import { AddProductComponent } from './Compoments/add-product/add-product.component';
import { UpdateProductComponent } from './Compoments/update-product/update-product.component';
import { ProductTabComponent } from './Compoments/product-tab/product-tab.component';
import { CustomerComponent } from './Compoments/customer/customer.component';
import { OperationComponent } from './Compoments/operation/operation.component';
import { UpdateCustomerComponent } from './Compoments/update-customer/update-customer.component';
import { ReportsComponent } from './Compoments/reports/reports.component';
import { SupplierComponent } from './Compoments/supplier/supplier.component';
import { AddCustomerComponent } from './Compoments/add-customer/add-customer.component';
import { AddSupplierComponent } from './Compoments/add-supplier/add-supplier.component';
import { UpdateSupplierComponent } from './Compoments/update-supplier/update-supplier.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashbord', component: AdminDashbordComponent },
  { path: 'product-tab', component: ProductTabComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: 'stock', component: OperationComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'supplier-tab', component: SupplierComponent },
  { path: 'add-supplier', component: AddSupplierComponent },
  { path: 'customer-tab', component: CustomerComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'update-customer/:id', component: UpdateCustomerComponent },
  { path: 'update-supplier/:id', component: UpdateSupplierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
