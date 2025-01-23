import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpParams } from '@angular/common/http';

const book: any[] = [
    {
        id: 'RM-0001',
        user_name: 'Alejandra Sainz',
        booking_date: '2025-01-16',
        booking_time: '10:00',
        booking_type: 'Consulta',
        assigned_doctor: 'Diana Sánchez',
        status: 'Confirmada',
    },
    {
        id: 'RM-0002',
        user_name: 'Oscar Treviño',
        booking_date: '2025-01-16',
        booking_time: '11:00',
        booking_type: 'Servicio',
        assigned_doctor: 'Diana Sánchez',
        status: 'Pendiente'
    },
    {
        id: 'RM-0003',
        user_name: 'Sandra Pacheco',
        booking_date: '2025-01-16',
        booking_time: '12:00',
        booking_type: 'Tratamiento',
        assigned_doctor: 'Sergio Morales',
        status: 'Activa'
    },
    {
        id: 'RM-0001',
        user_name: 'Alejandra Sainz',
        booking_date: '2025-01-16',
        booking_time: '13:00',
        booking_type: 'Consulta',
        assigned_doctor: 'Diana Sánchez',
        status: 'Cancelada'
    },
    {
        id: 'RM-0002',
        user_name: 'Oscar Treviño',
        booking_date: '2025-01-16',
        booking_time: '14:00',
        booking_type: 'Servicio',
        assigned_doctor: 'Diana Sánchez',
        status: 'Cancelada'
    }
];

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    private bookingData;

    constructor(
        private httpService: HttpService
    ){}

    listBookingListByUserId(id:any): Observable<any> {
        return this.httpService.get('bookings', new HttpParams().set('idUser',id));
    }

    listBookingListCanceledByUserId(id:any): Observable<any> {
        return this.httpService.get('bookings-cancel', new HttpParams().set('idUser',id));
    }

    bookNewVisit(data): Observable<any> {
        const body = {
            ...data
        }
        console.log("bookNewVisit", body)
        return this.httpService.post('bookings', body);
    }

    updateBookingVisit(data): Observable<any> {
        const body = {
            ...data
        }
        console.log("updateBookingVisit", body)
        return this.httpService.post('bookings', body);
    }

    setDataForEditBooking(data) {
        this.bookingData = data;
    }

    getDataForEditBooking() {
        return this.bookingData;
    }

    //DUMMY's
    listBookingListAvailableDummy(): any[] {
        return this.filterBookingOnlyAvailable(book);
    }

    listBookingListCanceledDummy(): any[] {
        return this.filterBookingOnlyCanceled(book);
    }

    private filterBookingOnlyCanceled(items:any[]){
        return items.filter(element => element.status ==  'Cancelada'); 
    }

    private filterBookingOnlyAvailable(items:any[]){
        return items.filter(element => element.status !=  'Cancelada'); 
    }
}