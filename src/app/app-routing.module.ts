import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Compoments/login/login.component';
import { AdminDashbordComponent } from './Compoments/admin-dashbord/admin-dashbord.component';

import { OfferComponent } from './Compoments/offer/offer.component';
import { OfferTabComponent } from './Compoments/offer-tab/offer-tab.component';
import { ReservationTabComponent } from './Compoments/reservation-tab/reservation-tab.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashbord', component: AdminDashbordComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'offer_tab', component: OfferTabComponent },
  { path: 'reservation_tab', component: ReservationTabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
