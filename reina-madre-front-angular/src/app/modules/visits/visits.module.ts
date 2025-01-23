import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { VisitsRoutingModule } from './visits-routing.module';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { BookingListCanceledComponent } from './components/booking-list-canceled/booking-list-canceled.component';
import { NewBookingComponent } from './components/new-booking/new-booking.component';
import { DetailBookingComponent } from './components/detail-booking/detail-booking.component';




@NgModule({
  declarations: [
    BookingListComponent,
    BookingListCanceledComponent,
    NewBookingComponent,
    DetailBookingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VisitsRoutingModule,
    NgbAccordionModule,
    NgbDatepickerModule
  ]
})
export class VisitsModule { }
