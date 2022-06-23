import { OnDestroy, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { ContactService } from '../../../@core/backend/common/services/contact.service';
import { Subject, of } from 'rxjs';
import { FileService } from '../../../@core/backend/common/services/file.service';
import { CustomValidator } from '../../../@core/backend/common/services/validation.service';

@Component({
    selector: 'ngx-qs-crm-details',
    styleUrls: ['./crm-details.component.scss'],
    templateUrl: './crm-details.component.html',
})
export class CrmDetailsComponent implements OnDestroy, OnInit {
    protected readonly unsubscribe$ = new Subject<void>();
    crmForm: FormGroup;
    files = [];
    valid = true;
    addressId: string = '';
    @ViewChild('flipcard') flipcard;

    constructor(
        private service: ContactService,
        private fileService: FileService,
        private router: Router,
        public route: ActivatedRoute,
        private fb: FormBuilder,
    ) { }
    get contactId() {
        return this.route.snapshot.paramMap.get('id');
    }

    get contactIdObservable() {
        return of(this.route.snapshot.paramMap.get('id'));
    }

    get firstName() { return this.crmForm.get('firstName'); }
    get lastName() { return this.crmForm.get('lastName'); }
    get parentCompany() { return this.crmForm.get('parentCompany'); }
    get company() { return this.crmForm.get('company'); }
    get title() { return this.crmForm.get('title'); }
    get phone() { return this.crmForm.get('phone'); }
    get mobile() { return this.crmForm.get('mobile'); }
    get fax() { return this.crmForm.get('fax'); }
    get email() { return this.crmForm.get('email'); }
    get stage() { return this.crmForm.get('stage'); }
    get street() { return this.crmForm.get('street'); }
    get city() { return this.crmForm.get('city'); }
    get state() { return this.crmForm.get('state'); }
    get zipcode() { return this.crmForm.get('zipcode'); }
    get clientId() { return this.crmForm.get('clientId'); }
    get miscellaneous() { return this.crmForm.get('miscellaneous'); }
    get stat1() { return this.crmForm.get('stat1'); }
    get stat2() { return this.crmForm.get('stat2'); }
    get stat3() { return this.crmForm.get('stat3'); }
    get stat4() { return this.crmForm.get('stat4'); }
    get stat5() { return this.crmForm.get('stat5'); }
    get stat6() { return this.crmForm.get('stat6'); }
    get stat7() { return this.crmForm.get('stat7'); }
    get notes() { return this.crmForm.get('notes'); }

    ngOnInit(): void {
        this.initCrmForm();
        this.loadUserData();
    }

    ngOnDestroy(): void {
    }

    stages = [
        { value: 'stage 1', display: 'Stage 1' },
        { value: 'stage 2', display: 'Stage 2' },
        { value: 'stage 3', display: 'Stage 3' },
        { value: 'stage 4', display: 'Stage 4' },
        { value: 'stage 5', display: 'Stage 5' },
        { value: 'stage 6', display: 'Stage 6' },
        { value: 'stage 7', display: 'Stage 7' },
        { value: 'stage 8', display: 'Stage 8' },
        { value: 'stage 9', display: 'Stage 9' },
        { value: 'stage x', display: 'Stage X' },
    ];

    statuses = [
        { value: '5 Star', display: '5 Star' },
        { value: '4 Star', display: '4 Star' },
        { value: '3 Star', display: '3 Star' },
        { value: '2 Star', display: '2 Star' },
        { value: '1 Star', display: '1 Star' },
    ];

    industries = [
        { value: 'Law Firm', display: 'Law Firm' },
        { value: 'Medical Group', display: 'Medical Group' },
        { value: 'Insurance Group', display: 'Insurance Group' },
        { value: 'Miscellaneous', display: 'Miscellaneous' },
    ];

    positions = [
        { value: 'Attorney Owner', display: 'Attorney Owner' },
        { value: 'Attorney', display: 'Attorney' },
        { value: 'Front Desk', display: 'Front Desk' },
        { value: 'Staff Member', display: 'Staff Member' },
        { value: 'Case Manager', display: 'Case Manager' },
        { value: 'Office Manager', display: 'Office Manager' },
        { value: 'Doctor', display: 'Doctor' },
        { value: 'Administrator', display: 'Administrator' },
    ];

    types = [
        { value: 'attorney referring', display: 'Attorney Referring' },
        { value: 'attorney managing', display: 'Attorney Managing' },
        { value: 'paralegal', display: 'Paralegal' },
        { value: 'office manager', display: 'Office Manager' },
    ];

    states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

    initCrmForm() {
        this.crmForm = this.fb.group({
            firstName: this.fb.control(''),
            lastName: this.fb.control(''),
            street: this.fb.control(''),
            city: this.fb.control(''),
            state: this.fb.control(''),
            zipcode: this.fb.control(''),
            parentCompany: this.fb.control(''),
            company: this.fb.control(''),
            title: this.fb.control(''),
            type: this.fb.control(''),
            phone: this.fb.control(''),
            mobile: this.fb.control(''),
            fax: this.fb.control(''),
            email: this.fb.control(''),
            stage: this.fb.control(''),
            status: this.fb.control(''),
            industry: this.fb.control(''),
            clientId: this.fb.control(''),
            miscellaneous: this.fb.control(''),
            stat1: this.fb.control(''),
            stat2: this.fb.control(''),
            stat3: this.fb.control(''),
            stat4: this.fb.control(''),
            stat5: this.fb.control(''),
            stat6: this.fb.control(''),
            stat7: this.fb.control(''),
            notes: this.fb.control(''),
        }, { updateOn: 'blur' });
    }

    loadUserData() {
        this.loadUser(this.contactId);
        this.loadFiles(this.contactId);
    }

    loadFiles(id) {
        this.fileService.list(id)
            .subscribe((files) => {
                this.files = files;
            });
    }

    reset() {
        const id = this.contactId;
        this.loadUser(id);
    }

    loadUser(id) {
        this.service.get(id, '')
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((contact) => {
                this.addressId = contact.addressId;
                this.crmForm.setValue({
                    firstName: contact.firstName ? contact.firstName : '',
                    lastName: contact.lastName ? contact.lastName : '',
                    street: contact.address ? contact.address : '',
                    city: contact.city ? contact.city : '',
                    state: contact.state ? contact.state : '',
                    zipcode: contact.zipcode ? contact.zipcode : '',
                    company: contact.companyName ? contact.companyName : '',
                    parentCompany: contact.parentCompany ? contact.parentCompany : '',
                    title: contact.title ? contact.title : '',
                    type: (this.types.find(c => c.value.trim().toLowerCase()
                        === contact.clientType.trim().toLowerCase()) !== undefined
                        ? contact.clientType.trim().toLowerCase() : 'test'),
                    mobile: contact.mobile ? contact.mobile : '',
                    phone: contact.phone ? contact.phone : '',
                    fax: contact.fax ? contact.fax : '',
                    email: contact.email ? contact.email : '',
                    stage: this.stages.find(c => c.value === contact.stage) ? contact.stage : '',
                    status: (this.statuses.find(c => c.value === contact.status) ? contact.status : ''),
                    industry: this.industries.find(c => c.value === contact.industry) ? contact.industry : '',
                    clientId: contact.clientId ? contact.clientId : '',
                    miscellaneous: contact.miscellaneous ? contact.miscellaneous : '',
                    stat1: contact.stat1 ? contact.stat1 : '',
                    stat2: contact.stat2 ? contact.stat2 : '',
                    stat3: contact.stat3 ? contact.stat3 : '',
                    stat4: contact.stat4 ? contact.stat4 : '',
                    stat5: contact.stat5 ? contact.stat5 : '',
                    stat6: contact.stat6 ? (contact.stat6 * 100).toFixed(2) : '',
                    stat7: contact.stat7 ? (contact.stat7) : '',
                    notes: contact.directions ? contact.directions : '',
                });

                const intakeFormData = {
                    firstName: {
                        table: 'Contact',
                        column: 'Firstname',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    lastName: {
                        table: 'Contact',
                        column: 'Lastname',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    parentCompany: {
                        table: 'AccountParent',
                        column: 'ParentCompany',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    company: {
                        table: 'Contact',
                        column: 'Account',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    title: {
                        table: 'Contact',
                        column: 'Title',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    role: {
                        table: 'Contact',
                        column: 'Role',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    phone: {
                        table: 'Contact',
                        column: 'Workphone',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    mobile: {
                        table: 'Contact',
                        column: 'Mobile',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    fax: {
                        table: 'Contact',
                        column: 'Fax',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    email: {
                        table: 'Contact',
                        column: 'Email',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    stage: {
                        table: 'SALESTAGES',
                        column: 'AStage',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    status: {
                        table: 'Contact',
                        column: 'Status',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    industry: {
                        table: 'Contact',
                        column: 'Industry',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    street: {
                        table: 'Address',
                        column: 'address1',
                        identifier: this.addressId,
                        key: 'ADDRESSID',
                    },
                    city: {
                        table: 'Address',
                        column: 'city',
                        identifier: this.addressId,
                        key: 'ADDRESSID',
                    },
                    state: {
                        table: 'Address',
                        column: 'state',
                        identifier: this.addressId,
                        key: 'ADDRESSID',
                    },
                    zipcode: {
                        table: 'Address',
                        column: 'postalcode',
                        identifier: this.addressId,
                        key: 'ADDRESSID',
                    },
                    clientId: {
                        table: 'Contact',
                        column: 'ClientId',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    clientType: {
                        table: '',
                        column: '',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    miscellaneous: {
                        table: 'Contact',
                        column: 'userfield1',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    stat1: {
                        table: 'Contact',
                        column: 'stat1',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    stat2: {
                        table: 'Contact',
                        column: 'stat2',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    stat3: {
                        table: 'Contact',
                        column: 'stat3',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    stat4: {
                        table: 'Contact',
                        column: 'stat4',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    stat5: {
                        table: 'Contact',
                        column: 'stat5',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    stat6: {
                        table: 'Contact',
                        column: 'stat6',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                    notes: {
                        table: 'Contact',
                        column: 'directions',
                        identifier: this.contactId,
                        key: 'ContactId',
                    },
                };

                const controls = this.crmForm.controls;
                for (const property in controls) {
                    if (controls.hasOwnProperty(property)) {
                        controls[property].setAsyncValidators(CustomValidator.validate(
                            this.service,
                            this.contactId,
                            intakeFormData[property],
                        ));
                    }
                }
            });
    }

    onchange() {
    }

    back() {
        this.router.navigate(['/crm/list']);
    }

    flip() {
        this.flipcard.flipped = !this.flipcard.flipped;
    }

    download(filename: string) {
        const id = this.route.snapshot.paramMap.get('id');
        this.fileService.download(id, 'crm', filename);
    }

    upload(file: File) {
        const id = this.route.snapshot.paramMap.get('id');
        this.fileService.upload(id, 'crm', file).subscribe(() => {
            this.loadFiles(id);
        });
    }

}
