import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {observable, Observable, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //public baseUrl = 'https://app-apotik-server.herokuapp.com'
  public baseUrl = 'http://localhost:3000'
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

  public get(event:any):Observable<any> {
	    return this.http.get(this.baseUrl+'/api/users');
  }

  // service for delete users
  public delete(deleteid:string):Observable<any>{
    return new Observable<any>(observer=>{
      this.http.delete(this.baseUrl+'/api/users/'+deleteid)
      .subscribe((res:any)=>{
        observer.next(res);
        observer.complete();
        return {unsubcribe() {res}};
      },
      (err:any)  => {
        observer.next(err);
        observer.complete();
        return {unsubcribe() {err}};
      })
    })
  }
  //service for find users byid
  public getById(findId:string):Observable<any>{
    return new Observable<any>(observable=>{
      this.http.get(this.baseUrl+'/api/users/'+findId)
      .subscribe((res:any)=>{
        observable.next(res);
        observable.complete();
        return { unsubcribe() { res }};
      })
    })
  }

  //service for update users
  public update(id:string, data:any):Observable<any>{
    let payload = new HttpParams()
        .set('name', data.name)
        .set('email', data.email);

    if( typeof data.password !="undefined"){
      payload = new HttpParams()
        .set('name', data.name)
        .set('email', data.email)
        .set('password', data.password);
    }

    return new Observable<any>(observable=>{
      this.http.put(this.baseUrl+'/api/users/'+id, payload)
      .subscribe((res:any)=>{
          observable.next(res);
          observable.complete();
          return { unsubcribe() { res }};
        })
    })
  }

}
