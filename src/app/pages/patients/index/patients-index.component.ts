import { OnDestroy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpportunityService } from '../../../@core/backend/common/services/opportunity.service';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'ngx-qs-patients-index',
    styleUrls: ['./patients-index.component.scss'],
    templateUrl: './patients-index.component.html',
})
export class PatientsIndexComponent implements OnDestroy, OnInit {
    source: DataSource;
    settings: any = { };
    @Input() public attorneyFilter: Observable<string> = of('');
    constructor(service: OpportunityService, private router: Router) {
        this.source = service.getGridDataSource();
        this.settings = {
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
                clientId: {
                    title: 'Client Id',
                    filter: false,
                },
                physician: {
                    title: 'Physician',
                    filter: false,
                },
                location: {
                    title: 'Location',
                    filter: false,
                },
                referrer: {
                    title: 'Referrer',
                    filter: false,
                },
                referrerCompany: {
                    title: 'Referrer Company',
                    filter: false,
                },
            },
        };
    }

    ngOnDestroy(): void {

    }

    ngOnInit(): void {
        this.attorneyFilter.subscribe(v => {
            if (v !== '') {
                this.source.setFilter([{
                    field: 'Referrer',
                    search: v,
                }]);
            }
        });
    }

    onUserRowSelect(event): void {
       this.router.navigate([`/pages/patients/details/${event.data.opportunityId}`]);
    }

    add() {
        this.router.navigate(['/pages/patients/add']);
    }
}
