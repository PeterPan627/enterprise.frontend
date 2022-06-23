import { Component, OnInit } from '@angular/core';
import { OpportunityService } from '../../../@core/backend/common/services/opportunity.service';

@Component({
  selector: 'ngx-new-clients',
  templateUrl: './new-clients.component.html',
  styleUrls: ['./new-clients.component.scss'],
})
export class NewClientsComponent implements OnInit {
  source: Promise<any>;

  constructor(
    private service: OpportunityService,
  ) { }

  ngOnInit() {
    this.source = new Promise((res, rej) => {
      this.service.getGridDataSource().getElements().then( (d: any[]) => {
        const filtered = d.filter(f => {
          const allow = f['Transaction Type'] === null || f['Transaction Type'] === undefined || (f['Transaction Type']).trim() === '';
          return allow;
        });
        const mapped = filtered.map(f => {
          delete f['Transaction Type'];
          return f;
        });
        res(mapped);
      });
    });
  }

}
