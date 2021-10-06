import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public baseUrl = 'https://app-apotik-server.herokuapp.com'
  constructor(private http:HttpClient) { }

  public add(data:any):Observable<any> {
    const payload = new HttpParams()
      .set('name', data.name)
      .set('email', data.email)
      .set('password', data.password);

	  return new Observable<any>(observer => {
	    this.http.post(this.baseUrl+'/api/users', payload )
        .subscribe((respond:any) => {
          observer.next(respond);
          observer.complete();
          return {unsubcribe() {respond}};
	    });
	       
	  });
  }

  public get():Observable<any> {
	  return new Observable<any>(observer => {
	    this.http.get(this.baseUrl+'/api/users')
        .subscribe((respond:any) => {
          observer.next(respond);
          observer.complete();
          return {unsubcribe() {respond}};
	    });
	       
	  });
  }
}
