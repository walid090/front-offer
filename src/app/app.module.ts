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

import { LigneChartComponent } from './Chart/ligne-chart/ligne-chart.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Compoments/navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { PanelModule } from 'primeng/panel';
import { OfferComponent } from './Compoments/offer-add/offer.component'; // Import PanelModule
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { OfferTabComponent } from './Compoments/offer-tab/offer-tab.component';
import { ReservationTabComponent } from './Compoments/reservation-tab/reservation-tab.component';
import { FileUploadModule } from 'primeng/fileupload';
import { OfferUpdateComponent } from './Compoments/offer-update/offer-update.component'; // Import FileUploadModule
import { UserInterfaceComponent } from './Compoments/user-interface/user-interface.component';
import { CardOfferComponent } from './Compoments/card-offer/card-offer.component';
import { DialogModule } from 'primeng/dialog'; // Import DialogModule
import { CardModule } from 'primeng/card'; // Import CardModule
import { RegisterComponent } from './Compoments/register/register.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BarChartComponent,
    AdminDashbordComponent,
    LigneChartComponent,
    OfferComponent,
    OfferTabComponent,
    ReservationTabComponent,
    OfferUpdateComponent,
    UserInterfaceComponent,
    CardOfferComponent,
    RegisterComponent,
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
    InputTextModule,
    ButtonModule,
    PasswordModule,
    PanelModule,
    ButtonModule,
    InputTextareaModule,
    CalendarModule,
    CheckboxModule,
    FileUploadModule,
    DialogModule,
    CardModule,
    TooltipModule
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
