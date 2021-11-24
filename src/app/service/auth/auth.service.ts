import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, observable, Observable, throwError } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseUrl = 'https://app-apotik-server.herokuapp.com'
  private userSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<any>(null);
  }

  public sendRegister(data: any): Observable<any> {
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

  public sendLogin(data: any): Observable<any> {
    const payload = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(this.baseUrl + '/api/auth/login', payload)
      .pipe(map(auth => {
        localStorage.setItem('auth', JSON.stringify(auth));
        this.userSubject.next(auth);
        return auth;
      }));
  }

}
