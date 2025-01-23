import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userData;

    constructor(
        private httpService: HttpService
    ){}

    getUserData(id:any): Observable<any> {
        return this.httpService.get('users/detail', new HttpParams().set('id',id));
    }


    setDataForEditUser(data) {
        this.userData = data;
    }

    getDataForEditUser() {
        return this.userData;
    }
}