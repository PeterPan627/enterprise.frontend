import { OnDestroy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../../@core/backend/common/services/contact.service';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

@Component({
    selector: 'ngx-qs-crm-index',
    styleUrls: ['./crm-index.component.scss'],
    templateUrl: './crm-index.component.html',
})
export class CrmIndexComponent implements OnDestroy {
    source: DataSource;
    settings: any = { };
    constructor(service: ContactService, private router: Router) {
        this.source = service.getGridDataSource('');
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

    ngOnDestroy(): void {

    }

    onUserRowSelect(event): void {
        this.router.navigate([`/pages/crm/details/${event.data.contactId}`]);
    }

    add() {
        this.router.navigate(['/pages/crm/add']);
    }
}
