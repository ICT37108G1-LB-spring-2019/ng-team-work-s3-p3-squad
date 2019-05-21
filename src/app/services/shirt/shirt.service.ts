import {Injectable} from '@angular/core';
import {NetworkService} from '../network/network.service';
import {Observable} from 'rxjs';
import {IShirtForm} from '../../interfaces/IShirtForm';
import {IShirt} from '../../interfaces/IShirt';

@Injectable({
  providedIn: 'root'
})
export class ShirtService {

  constructor(
    private network: NetworkService,
  ) { }

  public add(data: IShirtForm): Observable<IShirt> {
    const sendData: IShirt = {
      title: {
        short: data.shortTitle,
        long: data.longTitle,
      },
      image: {
        thumb: data.thumbImage,
        large: data.largeImage,
      },
      details: {
        color: data.detailsColor,
        material: data.detailsMaterial,
        size: data.detailsSize,
      },
    };
    return this.network.storeShirt(sendData);
  }

  public update(id: number, data: IShirtForm): Observable<IShirt> {
    const sendData: IShirt = {
      title: {
        short: data.shortTitle,
        long: data.longTitle,
      },
      image: {
        thumb: data.thumbImage,
        large: data.largeImage,
      },
      details: {
        color: data.detailsColor,
        material: data.detailsMaterial,
        size: data.detailsSize,
      },
    };
    return this.network.updateShirt(id, sendData);
  }

  public remove(id: number): Observable<any> {
    return this.network.deleteShirt(id);
  }
}
