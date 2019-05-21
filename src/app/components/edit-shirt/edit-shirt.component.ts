import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IShirt} from '../../interfaces/IShirt';
import {NetworkService} from '../../services/network/network.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ShirtService} from '../../services/shirt/shirt.service';
import {SpinnerService} from '../../services/spinner/spinner.service';

@Component({
  selector: 'app-edit-shirt',
  templateUrl: './edit-shirt.component.html',
  styleUrls: ['./edit-shirt.component.scss']
})
export class EditShirtComponent implements OnInit {

  public form;

  public item: IShirt;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private network: NetworkService,
    private shirtService: ShirtService,
    private spinner: SpinnerService,
  ) { }

  ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.spinner.IsLoading = true;
    this.network.getShirt(id).subscribe(data => {
      this.item = data;

      this.form = new FormGroup({
        shortTitle: new FormControl(data.title.short, [
          Validators.required,
        ]),
        longTitle: new FormControl(data.title.long, [
          Validators.required,
        ]),

        thumbImage: new FormControl(data.image.thumb, [
          Validators.required,
        ]),
        largeImage: new FormControl(data.image.large, [
          Validators.required,
        ]),

        detailsColor: new FormControl(data.details.color),
        detailsSize: new FormControl(data.details.size),
        detailsMaterial: new FormControl(data.details.material),
      });
      this.spinner.IsLoading = false;
    });
  }

  public onSubmit() {
      if (!this.form.valid) {
        alert('Input all required fields');
        return;
      }

      this.spinner.IsLoading = true;
      this.shirtService.update(this.item.id, this.form.value).subscribe(data => {
        this.spinner.IsLoading = false;
        this.router.navigate(['/admin']);
      });
    }
}
