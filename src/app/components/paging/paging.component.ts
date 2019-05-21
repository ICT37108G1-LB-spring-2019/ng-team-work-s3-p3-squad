import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit, OnChanges {

  @Input() totalRows: number;
  @Input() rowsPerPage: number;
  @Input() currentPage: number;

  @Output() pageChange = new EventEmitter<number>();

  public pages: number[];

  constructor() { }

  ngOnInit() {
    this.calculateTotalPages();
  }

  ngOnChanges() {
    this.calculateTotalPages();
  }

  private calculateTotalPages() {
    const totalPages = Math.ceil(this.totalRows / this.rowsPerPage);
    this.pages = [];

    for (let i = 1; i <= totalPages; i++) {
     this.pages.push(i);
    }
  }

  public onPageChange(page: number) {
    if (page === this.currentPage) {
      return;
    }
    this.pageChange.emit(page);
  }

}
