import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { PhonePipe } from '../../../@theme/pipes';
import { GridApi } from 'ag-grid-community';
@Component({
  selector: 'ngx-app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  private gridApi: GridApi;
  @Input() source: Promise<any>;
  private gridColumnApi;
  settings: any = {};
  columnDefs = [];
  data = [];
  @Input() pipeLineType: string = 'agent';

  private phonePipe: PhonePipe;

  constructor(
    private router: Router,
  ) {
    this.phonePipe = new PhonePipe();
  }

  ngOnInit() {
    this.source.then(d => {
      const cols = Object.getOwnPropertyNames(d[0]);
      const defs = this.columnDefs = cols.map(col => {
        if (col.startsWith('__')) {
          return {headerName: col.substring(2), field: col, filter: true, sortable: true,  hide: true };
        }
        if (col === 'stage') {
          return {
            headerName: col,
            field: col,
            filter: 'agSetColumnFilter',
            filterParams: {
              applyMiniFilterWhileTyping: true,
            },
          };
        }
        return {headerName: col, field: col, filter: true, sortable: true };
      });

      this.gridApi.setColumnDefs(defs);
      this.data = d;
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  createNewGrid(params) {
    const cols = this.gridApi.getColumnDefs();
    const filters = this.gridApi.getFilterModel();
    const sort = this.gridApi.getSortModel();
    console.log(params);
    console.log(cols);
    console.log(filters);
    console.log(sort);
  }

  onUserRowSelect(event): void {
    this.router.navigate([`/pages/clients/details/${event.data['Opportunity Id']}`], {
      state: {
        pipeLineType: this.pipeLineType,
        accountId: this.data['__accountId'],
        contactId: this.data['__contactId'],
      },
    });
  }
}
