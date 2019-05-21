import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ShirtService} from '../../../services/shirt/shirt.service';
import {Router} from '@angular/router';
import {SpinnerService} from '../../../services/spinner/spinner.service';

@Component({
  selector: 'app-add-shirt',
  templateUrl: './add-shirt.component.html',
  styleUrls: ['./add-shirt.component.scss']
})
export class AddShirtComponent implements OnInit {

  public form = new FormGroup({
    shortTitle: new FormControl('', [
      Validators.required,
    ]),
    longTitle: new FormControl('', [
      Validators.required,
    ]),

    thumbImage: new FormControl('', [
      Validators.required,
    ]),
    largeImage: new FormControl('', [
      Validators.required,
    ]),

    detailsColor: new FormControl(''),
    detailsSize: new FormControl(''),
    detailsMaterial: new FormControl(''),
  });

  constructor(
    private shirtService: ShirtService,
    private router: Router,
    private spinner: SpinnerService,
  ) { }

  ngOnInit() {
  }

  public onSubmit() {
    if (!this.form.valid) {
      alert('Input all required fields');
      return;
    }

    this.spinner.IsLoading = true;
    this.shirtService.add(this.form.value).subscribe(data => {
      this.spinner.IsLoading = false;
      this.router.navigate(['/admin']);
    });
  }

}
