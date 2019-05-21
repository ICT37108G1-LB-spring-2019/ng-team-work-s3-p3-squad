import {Component, OnInit} from '@angular/core';
import {IShirt} from '../../interfaces/IShirt';
import {NetworkService} from '../../services/network/network.service';
import {ActivatedRoute} from '@angular/router';
import {SpinnerService} from '../../services/spinner/spinner.service';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.scss']
})
export class ShirtComponent implements OnInit {

  public item: IShirt;
  public itemDetails: any[];

  constructor(
    private network: NetworkService,
    private route: ActivatedRoute,
    private spinner: SpinnerService,
  ) { }

  ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.spinner.IsLoading = true;
    this.network.getShirt(id).subscribe(data => {
      this.item = data;
      this.itemDetails = Object.entries(data.details);
      this.spinner.IsLoading = false;
    });

  }

}
