import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { UserService } from '../../services/user.service';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})
export class NewBookingComponent implements OnInit {
  userData: any;
  userFullName: string;

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
    this.initUserData();
    this.initForm();
  }

  initCatalogs(){
    this.catalogService.listBookingTypes().subscribe(result => {
      this.listBookingTypes = result;
    });
    this.catalogService.listStatus().subscribe(result => {
      this.listStatus = result;
    });
  }

  initUserData(){
    this.userData = this.userService.getDataForEditUser();
    if(this.userData){
      this.userFullName = this.userData.name + ' ' + this.userData.lastName;
    } else {
      this.router.navigate(['/visits/list']);
    }
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      user_name: new FormControl({ value: this.userFullName, disabled: true } ,[Validators.required]),
      booking_date: new FormControl('',[Validators.required]),
      booking_time: new FormControl('',[Validators.required]),
      booking_type: new FormControl('',[Validators.required]),
      assigned_doctor: new FormControl('',[Validators.required])
    });
  }

  onSubmitForm() {
    console.log('save')
    if(this.formGroup.valid) {
      if (window.confirm("¿Deseas agendar a la cita?")) {
        this.formGroup.disable();
        this.bookNewVisit();        
      }
    }
  }

  bookNewVisit() {
    const newBookingFormData = this.getNewBookingFormData();
    console.log(newBookingFormData);
    this.bookingService.bookNewVisit(newBookingFormData).subscribe(result => {
      console.log('result', result)
      this.formGroup.enable();
      alert('La cita médica se ha agendado exitosamente!');
      this.router.navigate(['/visits/list']);
    },error => {
      this.formGroup.enable();
      alert('Ocurrió un error al agendar la cita médica!' + error);
    });
  }

  getNewBookingFormData() {
    const newBookingData = {
      id: null,
      idUser: this.userData.id,
      date: this.formGroup.get('booking_date').value,
      time: this.formGroup.get('booking_time').value,
      type: {
        id: this.formGroup.get('booking_type').value
      },
      doctorName: this.formGroup.get('assigned_doctor').value,
      status: {
        id: 1
      }
    }
    return newBookingData;
  }
}
