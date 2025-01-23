import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { BookingListCanceledComponent } from './components/booking-list-canceled/booking-list-canceled.component';
import { NewBookingComponent } from './components/new-booking/new-booking.component';
import { DetailBookingComponent } from './components/detail-booking/detail-booking.component';

const routes: Routes = [
  { path: 'list', component: BookingListComponent },
  { path: 'canceled', component: BookingListCanceledComponent },
  { path: 'add', component: NewBookingComponent },
  { path: 'detail', component: DetailBookingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitsRoutingModule { }
