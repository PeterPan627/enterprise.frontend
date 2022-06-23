import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesLibraryService } from '../../@core/backend/common/services/sales-library.service';

@Component({
  selector: 'ngx-sales-library',
  templateUrl: './sales-library.component.html',
  styleUrls: ['./sales-library.component.scss'],
})
export class SalesLibraryComponent implements OnInit {
  currentRole = 'user';
  data: any[];
  path: string;
  breadcrumb: any[] = [];
  url: string;
  activatedRoute: ActivatedRoute;

  constructor(
    private route: ActivatedRoute,
    private salesLibraryService: SalesLibraryService,
  ) { }

  ngOnInit() {
    this.path = this.route.snapshot.paramMap.get('id');
    this.salesLibraryService.list(this.path).subscribe(d => {
      this.data = d;
    });
    this.breadcrumb.push({ name: 'Home', 'path': '' });
  }

  select(item) {
    if (item.type === 'file') {
      this.salesLibraryService.download(item.path);
    } else {
      this.salesLibraryService.list(item.path).subscribe(d => {
        this.data = d;
      });
      this.breadcrumb.push(item);
    }
  }

  changeDirectory(directory: string) {

    // Find index that matches path selected
    const index = this.findWithAttribute(this.breadcrumb, 'path', directory);

    // remove all breadcrumbs after index selected
    this.breadcrumb.length = index + 1;

    this.salesLibraryService.list(directory).subscribe(d => {
      this.data = d;
    });
  }

  findWithAttribute(array: any, attribute: string, value: string) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i][attribute] === value) {
        return i;
      }
    }
    // Return -1 when not found to mimic array.prototype.indexOf()
    return -1;
  }

}
