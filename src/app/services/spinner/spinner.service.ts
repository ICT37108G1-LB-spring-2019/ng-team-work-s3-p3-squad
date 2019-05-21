import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }

  public get IsLoading() {
    return this.isLoading;
  }

  public set IsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}
