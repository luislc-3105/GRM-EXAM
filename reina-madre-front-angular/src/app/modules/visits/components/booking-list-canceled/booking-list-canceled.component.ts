import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { UserService } from '../../services/user.service';

const EXAMPLE_USER_ID = 2;

@Component({
  selector: 'app-booking-list-canceled',
  templateUrl: './booking-list-canceled.component.html',
  styleUrls: ['./booking-list-canceled.component.scss']
})
export class BookingListCanceledComponent implements OnInit{
  userData: any;
  userFullname: string;
  bookingList: any[] = [];

  constructor(
    private router: Router,
    private bookingService: BookingService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // this.listBookingList();
    this.initUserData();
  }

  private initUserData() {
    this.userService.getUserData(EXAMPLE_USER_ID).subscribe(response => {
      console.log('response getUserDetail', response);
      if(response){
        this.userData = response;
        this.userFullname = this.userData.name + ' ' + this.userData.lastName;
        this.userService.setDataForEditUser(this.userData);
        this.listBookingList(this.userData.id);
      }
    });

  }

  private listBookingList(userId) {
    this.bookingService.listBookingListCanceledByUserId(userId,).subscribe(response => {
      console.log('listBookingListCanceledByUserId by userId', response);
      this.bookingList = response;
    });
    // this.bookingList = this.bookingService.listBookingListAvailableDummy();
  }

  onEditRow(row) {
    this.bookingService.setDataForEditBooking(row);
    this.router.navigate(['/visits/detail']);
  }
}
