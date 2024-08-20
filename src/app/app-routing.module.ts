import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Compoments/login/login.component';
import { AdminDashbordComponent } from './Compoments/admin-dashbord/admin-dashbord.component';
import { AddProductComponent } from './Compoments/add-product/add-product.component';
import { UpdateProductComponent } from './Compoments/update-product/update-product.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashbord', component: AdminDashbordComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
