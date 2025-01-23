import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { CatalogService } from '../../services/catalog.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-detail-booking',
  templateUrl: './detail-booking.component.html',
  styleUrls: ['./detail-booking.component.scss']
})
export class DetailBookingComponent implements OnInit {
  userData: any;
  userId: any;
  userFullName: string;
  bookingData: any;

  listStatus: any[] = [];
  listBookingTypes: any[] = [];

  formGroup: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private userService: UserService,
    private catalogService: CatalogService
  ){}

  ngOnInit(): void {
    this.initCatalogs();

    this.bookingData = this.bookingService.getDataForEditBooking();
    this.initForm();
    if(this.bookingData){
      console.log('bookingData',this.bookingData);
      this.initBookingData();
    } else {
      this.router.navigate(['/visits/list']);
    }
    
  }

  initCatalogs(){
    this.catalogService.listBookingTypes().subscribe(result => {
      this.listBookingTypes = result;
    });
    this.catalogService.listStatus().subscribe(result => {
      this.listStatus = result;
    });
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      user_name: new FormControl({ value: '', disabled: true },[Validators.required]),
      booking_date: new FormControl('',[Validators.required]),
      booking_time: new FormControl('',[Validators.required]),
      booking_type: new FormControl('',[Validators.required]),
      assigned_doctor: new FormControl('',[Validators.required]),
      status: new FormControl('',[Validators.required])
    });
  }

  initBookingData() {
    this.userData = this.userService.getDataForEditUser();
    this.userFullName = this.userData.name + ' ' + this.userData.lastName;
    this.userId = this.userData.id;

    //Form data
    this.formGroup.get("user_name").setValue(this.userFullName);
    this.formGroup.get("booking_date").setValue(this.bookingData.date);
    this.formGroup.get("booking_time").setValue(this.bookingData.time);
    this.formGroup.get("booking_type").setValue(this.bookingData.type.id);
    this.formGroup.get("assigned_doctor").setValue(this.bookingData.doctorName);
    this.formGroup.get("status").setValue(this.bookingData.status.id);
    console.log('form',this.formGroup);
  }

  onSubmitForm() {
    console.log('save')
    if(this.formGroup.valid) {
      if (window.confirm("¿Deseas agendar a la cita?")) {
        this.formGroup.disable();
        this.updateBookingVisit();        
      }
    }
  }

  updateBookingVisit() {
    const bookingFormData = this.getBookingFormData();
    console.log(bookingFormData);
    this.bookingService.updateBookingVisit(bookingFormData).subscribe(result => {
      console.log('result', result)
      this.formGroup.enable();
      alert('La cita médica se ha actualizado exitosamente!');
      //this.router.navigate(['/visits']);
    },error => {
      this.formGroup.enable();
      alert('Ocurrió un error al actualizar la cita médica!' + error);
    });
  }

  getBookingFormData() {
    const bookingData = {
      id: this.bookingData.id,
      date: this.formGroup.get("booking_date").value? this.formGroup.get("booking_date").value : '',
      time: this.formGroup.get("booking_time").value? this.formGroup.get("booking_time").value : '',
      type: {
        id: this.formGroup.get('booking_type').value
      },
      doctorName: this.formGroup.get("assigned_doctor").value? this.formGroup.get("assigned_doctor").value : '',
      status: {
        id: this.formGroup.get('status').value
      },
      idUser: this.userData.id
    }
    return bookingData;
  }

  onCancelUpdate() {
    this.formGroup.reset();
    this.router.navigate(['/visits/list']);
  }
}