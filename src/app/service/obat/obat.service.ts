import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObatService {
  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = 'https://app-apotik-server.herokuapp.com';
  }

  public get(event: any) {
    return this.http.get(this.baseUrl + '/api/obat');
  }
}
