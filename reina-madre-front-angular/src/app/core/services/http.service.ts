import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private endpoint: string;

  constructor(
    private http: HttpClient
  ) { 
    this.endpoint = environment.API.reinaMadre.endpoint;
  }

  get(resource:string, params?:HttpParams): Observable<any> {
    return this.http.get(`${this.endpoint}/${resource}`,{params});
  }

  post(resource:string, body= {}): Observable<any> {
    return this.http.post(`${this.endpoint}/${resource}`, body);
  }

  put(resource:string, body = {}): Observable<any> {
    return this.http.put(`${this.endpoint}/${resource}`, body);
  }

  patch(resource:string, body = {}): Observable<any> {
    return this.http.patch(`${this.endpoint}/${resource}`, body);
  }

  delete(resource:string, params:HttpParams): Observable<any> {
    return this.http.delete(`${this.endpoint}/${resource}`, {params});
  }
}
