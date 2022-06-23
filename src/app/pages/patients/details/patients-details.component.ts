import { OnDestroy, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { OpportunityService } from '../../../@core/backend/common/services/opportunity.service';
import { Subject } from 'rxjs';
import { FileService } from '../../../@core/backend/common/services/file.service';
import { CustomValidator } from '../../../@core/backend/common/services/validation.service';

@Component({
    selector: 'ngx-qs-patients-details',
    styleUrls: ['./patients-details.component.scss'],
    templateUrl: './patients-details.component.html',
})
export class PatientsDetailsComponent implements OnDestroy, OnInit {
    protected readonly unsubscribe$ = new Subject<void>();
    patientsForm: FormGroup;
    files = [];
    opportunityId: string = '';
    @ViewChild('flipcard') flipcard;

    constructor(
        private service: OpportunityService,
        private fileService: FileService,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
    ) { }

    get firstName() { return this.patientsForm.get('firstName'); }
    get lastName() { return this.patientsForm.get('lastName'); }
    get phone() { return this.patientsForm.get('phone'); }
    get mobile() { return this.patientsForm.get('mobile'); }
    get fax() { return this.patientsForm.get('fax'); }
    get email() { return this.patientsForm.get('email'); }
    get stage() { return this.patientsForm.get('stage'); }
    get street() { return this.patientsForm.get('street'); }
    get city() { return this.patientsForm.get('city'); }
    get state() { return this.patientsForm.get('state'); }
    get zipcode() { return this.patientsForm.get('zipcode'); }
    get clientId() { return this.patientsForm.get('clientId'); }
    get clientType() { return this.patientsForm.get('clientType'); }
    get subType() { return this.patientsForm.get('subtype'); }
    get referrer() { return this.patientsForm.get('referrer'); }
    get referrerCompany() { return this.patientsForm.get('referrerCompany'); }
    get notes() { return this.patientsForm.get('notes'); }
    get grossBilled() { return this.patientsForm.get('grossBilled'); }
    get netPaid() { return this.patientsForm.get('netPaid'); }
    get referrerId() { return this.patientsForm.get('referrerId'); }
    ngOnInit(): void {
        this.initPatientsForm();
        this.loadUserData();
    }

    ngOnDestroy(): void {
    }

    stages = [
        { value: 'dr. sial khuram', display: 'Dr. Sial Khuram' },
    ];

    clientTypes = [

    ];

    subTypes = [

    ];

    industries = [

    ];

    states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

    initPatientsForm() {
        this.patientsForm = this.fb.group({
            firstName: this.fb.control(''),
            lastName: this.fb.control(''),
            street: this.fb.control(''),
            city: this.fb.control(''),
            state: this.fb.control(''),
            zipcode: this.fb.control(''),
            phone: this.fb.control(''),
            mobile: this.fb.control(''),
            fax: this.fb.control(''),
            email: this.fb.control('', Validators.email),
            stage: this.fb.control(''),
            clientId: this.fb.control(''),
            referrer: this.fb.control(''),
            referrerCompany: this.fb.control(''),
            notes: this.fb.control(''),
            grossBilled: this.fb.control(''),
            netPaid: this.fb.control(''),
            referrerId: this.fb.control(''),
        }, { updateOn: 'blur' });
    }

    loadUserData() {
        const id = this.route.snapshot.paramMap.get('id');
        this.loadUser(id);
        this.loadFiles(id);
    }

    loadFiles(id) {
        this.fileService.list(id)
            .subscribe((files) => {
                this.files = files;
            });
    }

    loadUser(id) {
        this.service.get(id)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((contact) => {
                this.opportunityId = contact.opportunityId;
                this.patientsForm.setValue({
                    firstName: contact.firstName ? contact.firstName : '',
                    lastName: contact.lastName ? contact.lastName : '',
                    street: contact.homeAddress.streetAddress ? contact.homeAddress.streetAddress : '',
                    city: contact.homeAddress.city ? contact.homeAddress.city : '',
                    state: contact.homeAddress.state ? contact.homeAddress.state : '',
                    zipcode: contact.homeAddress.zip ? contact.homeAddress.zip : '',
                    mobile: contact.mobile ? contact.mobile : '',
                    phone: contact.phone ? contact.phone : '',
                    fax: contact.fax ? contact.fax : '',
                    email: contact.email ? contact.email : '',
                    stage: this.stages.find(c => c.value === contact.stage) ? contact.stage : '',
                    clientId: contact.clientId ? contact.clientId : '',
                    referrer: contact.attorneyName ? contact.attorneyName : '',
                    referrerCompany: contact.attorneyCompany ? contact.attorneyCompany : '',
                    notes: contact.notes ? contact.notes : '',
                    grossBilled: contact.grossBilled ? contact.grossBilled : 0,
                    netPaid: contact.netPaid ? contact.netPaid : 0,
                    referrerId: contact.attorneyContactId ? contact.attorneyContactId : 0,
                });

                const intakeFormData = {
                    firstName: {
                        table: 'ClientInfo',
                        column: 'ClientFirst',
                        identifier: this.opportunityId,
                        key: 'OpportunityId',
                    },
                    lastName: {
                        table: 'ClientInfo',
                        column: 'ClientLast',
                        identifier: this.opportunityId,
                        key: 'OpportunityId',
                    },
                    phone: {
                        table: 'ClientInfo',
                        column: 'ClientHome',
                        identifier: this.opportunityId,
                        key: 'OpportunityId',
                    },
                    mobile: {
                        table: 'ClientInfo',
                        column: 'ClientMobile',
                        identifier: this.opportunityId,
                        key: 'OpportunityId',
                    },
                    fax: {
                        table: 'ClientInfo',
                        column: 'ClientFax',
                        identifier: this.opportunityId,
                        key: 'OpportunityId',
                    },
                    email: {
                        table: 'ClientInfo',
                        column: 'EmailClient',
                        identifier: this.opportunityId,
                        key: 'OpportunityId',
                    },
                    stage: {
                        table: 'SALESSTAGE',
                        column: 'AStage',
                        identifier: this.opportunityId,
                        key: 'OpportunityId',
                    },
                    street: {
                        table: 'ClientInfo',
                        column: 'ClientHomeAdd',
                        identifier: this.opportunityId,
                        key: 'OpportunityId',
                    },
                    city: {
                        table: 'ClientInfo',
                        column: 'ClientHomeCity',
                        identifier: this.opportunityId,
                        key: 'OpportunityId',
                    },
                    state: {
                        table: 'ClientInfo',
                        column: 'ClientHomeState',
                        identifier: this.opportunityId,
                        key: 'OpportunityId',
                    },
                    zipcode: {
                        table: 'ClientInfo',
                        column: 'ClientHomePostal',
                        identifier: this.opportunityId,
                        key: 'OpportunityId',
                    },
                    clientId: {
                        table: 'Opportunity',
                        column: 'ClientId',
                        identifier: this.opportunityId,
                        key: 'OpportunityId',
                    },
                    referrer: {
                        table: 'Parties_Involved',
                        column: 'Attorney1Name',
                        identifier: this.opportunityId,
                        key: 'OpportunityId',
                    },
                    referrerCompany: {
                        table: 'Parties_Involved',
                        column: 'Attorney1Company',
                        identifier: this.opportunityId,
                        key: 'OpportunityId',
                    },
                    notes: {
                        table: 'AttorneyUpdate',
                        column: 'AttorneyStatusNotes',
                        identifier: this.opportunityId,
                        key: 'OpportunityId',
                    },
                };

                const controls = this.patientsForm.controls;
                for (const property in controls) {
                    if (controls.hasOwnProperty(property)) {
                        controls[property].setAsyncValidators(CustomValidator.validate(
                            this.service,
                            this.opportunityId,
                            intakeFormData[property],
                        ));
                    }
                }

            });
    }

    onchange($event) {
    }

    back() {
        this.router.navigate(['/patients/list']);
    }

    flip() {
        this.flipcard.flipped = !this.flipcard.flipped;
    }

    download(filename: string) {
        const id = this.route.snapshot.paramMap.get('id');
        this.fileService.download(id, 'case', filename);
    }

    upload(file: File) {
        const id = this.route.snapshot.paramMap.get('id');
        this.fileService.upload(id, 'case', file).subscribe(c => {
            this.loadFiles(id);
        });
    }
}
