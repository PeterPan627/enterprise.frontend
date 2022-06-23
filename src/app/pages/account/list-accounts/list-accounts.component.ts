import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../../../@core/backend/common/services/account.service';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss'],
})
export class ListAccountsComponent implements OnInit {
  source: DataSource;
  settings: any = { };
  @Input() pipeLineType: string = 'agent';

  constructor(private router: Router, private service: AccountService ) {
  }

  ngOnInit() {
    this.source = this.service.getGridDataSource(this.pipeLineType);
    this.source.setFilter([
      {
        field: 'type',
        search: this.pipeLineType,
      },
    ]);
    if (this.pipeLineType === 'agent') {
      this.settings = this.getAgentSettings();
    } else {
      this.settings = this.getManagementSettings();
    }
  }

  getAgentSettings() {
    return {
      mode: 'external',
      actions: {
          add: false,
          edit: false,
          delete: false,
      },
      columns: {
          name: {
              title: 'Name',
              filter: true,
          },
          company: {
              title: 'Company',
              filter: true,
          },
          stage: {
              title: 'Stage',
              filter: {
                  type: 'list',
                  config: {
                      selectText: 'Show All',
                      list: [
                          { value: 'active', title: 'Active' },
                          { value: 'prospects', title: 'Prospects' },
                          { value: 'future', title: 'Future' },
                          { value: 'cancelled', title: 'Cancelled' },
                      ],
                  },
              },
          },
          status: {
              title: 'Status',
              filter: false,
          },
          clientId: {
              title: 'Client Id',
              filter: false,
          },
          parentCompany: {
              title: 'Parent Company',
              filter: false,
          },
      },
    };
  }

  getManagementSettings() {
    return {
      mode: 'external',
      actions: {
          add: false,
          edit: false,
          delete: false,
      },
      columns: {
        accountManager: {
          title: 'Account Manager',
          filter: true,
        },
        firstName: {
          title: 'First Name',
          filter: true,
        },
        lastName: {
          title: 'Last Name',
          filter: true,
        },
        stage: {
          title: 'Stage',
          filter: true,
        },
        email: {
          title: 'Email',
          filter: true,
        },
        phone: {
          title: 'Phone',
          filter: true,
        },
        city: {
          title: 'City',
          filter: true,
        },
        source1: {
          title: 'Source 1',
          filter: true,
        },
        source2: {
          title: 'Source 2',
          filter: true,
        },
        referrer: {
          title: 'Referrer',
          filter: true,
        },
        created: {
          title: 'Created',
          filter: false,
          valuePrepareFunction: (d: string) => {
            return new Date(d).toLocaleDateString();
          },
        },
      },
    };
  }

  onUserRowSelect(event): void {
    this.router.navigate([`/pages/accounts/details/${event.data.accountId}`], { state: {
      pipeLineType: this.pipeLineType,
    } });
  }
}
