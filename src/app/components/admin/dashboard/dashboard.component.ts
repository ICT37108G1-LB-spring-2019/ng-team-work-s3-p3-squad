import { Component, OnInit } from '@angular/core';
import {NetworkService} from '../../../services/network/network.service';
import {IShirt} from '../../../interfaces/IShirt';
import {ShirtService} from '../../../services/shirt/shirt.service';
import {SpinnerService} from '../../../services/spinner/spinner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public perPage = 10;
  public currentPage = 1;
  public totalRows = 0;
  private items: IShirt[];

  constructor(
    private network: NetworkService,
    private shirtService: ShirtService,
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

  public delete(id: number) {
    this.spinner.IsLoading = true;
    this.shirtService.remove(id).subscribe(() => {
      this.getShirts(this.currentPage);
      this.spinner.IsLoading = false;
    });
  }

}
