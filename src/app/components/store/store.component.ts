import { Component, OnInit } from '@angular/core';
import {IShirt} from '../../interfaces/IShirt';
import {NetworkService} from '../../services/network/network.service';
import {SpinnerService} from '../../services/spinner/spinner.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public perPage = 10;
  public currentPage = 1;
  public totalRows = 0;
  public items: IShirt[];

  constructor(
    private network: NetworkService,
    private spinner: SpinnerService,
  ) { }

  ngOnInit() {
    this.getShirts(this.currentPage);
  }

  public getShirts(page: number) {
    this.currentPage = page;
    const start = (this.currentPage - 1) * this.perPage + 1;

    this.spinner.IsLoading = true;
    this.network.getShirts(start).subscribe((data) => {
      this.totalRows = parseInt(data.headers.get('X-Total-Count'), 10);
      this.items = data.body;
      this.spinner.IsLoading = false;
    });
  }

  public onPageChange(page) {
    this.getShirts(page);
  }
}
