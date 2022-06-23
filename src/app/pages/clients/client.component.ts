import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbRoleProvider } from '@nebular/security';
import { ROLES } from '../../@auth/roles';
import { isArray } from 'util';
import { OpportunityService } from '../../@core/backend/common/services/opportunity.service';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

@Component({
  selector: 'ngx-app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  currentRole = ROLES.USER;
  source: any;

  constructor(
    private service: OpportunityService,
    private roleProvider: NbRoleProvider,
    private router: Router) {
    this.roleProvider.getRole().subscribe(r => {
      if (isArray(r)) {
        this.currentRole = r[0];
      } else {
        this.currentRole = r.toString();
      }
    });
  }

  ngOnInit() {
    this.source = this.service.getGridDataSource().getElements();
  }

  add() {
    this.router.navigate(['/pages/clients/add']);
  }
}
