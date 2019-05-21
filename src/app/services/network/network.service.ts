import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IShirt} from '../../interfaces/IShirt';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private apiUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  public getShirts(start: number = 1, limit: number = 10): Observable<HttpResponse<IShirt[]>> {
    return this.http.get<IShirt[]>(`${this.apiUrl}/shirts?_start=${start}&_limit=${limit}`, {observe: 'response'});
  }

  public getShirt(id: number): Observable<IShirt> {
    return this.http.get<IShirt>(`${this.apiUrl}/shirts/${id}`);
  }

  public storeShirt(data: IShirt): Observable<IShirt> {
    return this.http.post<IShirt>(`${this.apiUrl}/shirts`, data);
  }

  public updateShirt(id: number, data: IShirt): Observable<IShirt> {
    return this.http.put<IShirt>(`${this.apiUrl}/shirts/${id}`, data);
  }

  public deleteShirt(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/shirts/${id}`);
  }
}
