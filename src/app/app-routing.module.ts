import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Compoments/login/login.component';
import { AdminDashbordComponent } from './Compoments/admin-dashbord/admin-dashbord.component';

import { OfferComponent } from './Compoments/offer-add/offer.component';
import { OfferTabComponent } from './Compoments/offer-tab/offer-tab.component';
import { ReservationTabComponent } from './Compoments/reservation-tab/reservation-tab.component';
import { OfferUpdateComponent } from './Compoments/offer-update/offer-update.component';
import { UserInterfaceComponent } from './Compoments/user-interface/user-interface.component';
import { CardOfferComponent } from './Compoments/card-offer/card-offer.component';
import { RegisterComponent } from './Compoments/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashbord', component: AdminDashbordComponent },
  { path: 'add-offer', component: OfferComponent },
  { path: 'offer_tab', component: OfferTabComponent },
  { path: 'reservation_tab', component: ReservationTabComponent },
  { path: 'update-offer/:id', component: OfferUpdateComponent },
  { path: 'user-interface', component: UserInterfaceComponent },
  { path: 'card', component: CardOfferComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
