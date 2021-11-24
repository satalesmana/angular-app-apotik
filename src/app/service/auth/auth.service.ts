import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { observable, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseUrl = 'https://app-apotik-server.herokuapp.com'
  constructor(private http: HttpClient) { }

  public sendRegister(data:any):Observable<any> {
    const payload = new HttpParams()
      .set('name', data.name)
      .set('email', data.email)
      .set('phone', data.phone)
      .set('password', data.password);

      return new Observable<any>(observer => {
        this.http.post(this.baseUrl + '/api/auth/register', payload)
          .subscribe((respond: any) => {
            observer.next(respond);
            observer.complete();
            return { unsubcribe() { respond } };
          });
      });
  }
}
