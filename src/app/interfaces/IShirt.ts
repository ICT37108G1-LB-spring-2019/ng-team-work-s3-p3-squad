import {IProductTitle} from './IProductTitle';
import {IProductImage} from './IProductImage';
import {IProductDetails} from './IProductDetails';

export interface IShirt {
  id?: number;
  title: IProductTitle;
  image: IProductImage;
  details?: IProductDetails;
}
