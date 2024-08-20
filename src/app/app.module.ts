import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Compoments/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BarChartComponent } from './Chart/bar-chart/bar-chart.component';
import { AdminDashbordComponent } from './Compoments/admin-dashbord/admin-dashbord.component';
import { ProductTabComponent } from './Compoments/product-tab/product-tab.component';
import { AddProductComponent } from './Compoments/add-product/add-product.component';
import { UpdateProductComponent } from './Compoments/update-product/update-product.component';
import { LigneChartComponent } from './Chart/ligne-chart/ligne-chart.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import for animations
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SideNavbarComponent } from './Compoments/side-navbar/side-navbar.component'; 

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
    SideNavbarComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule, // Include this for Angular Material animations
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
