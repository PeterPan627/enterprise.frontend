import { OnDestroy, OnInit, Component, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { OpportunityService } from '../../../@core/backend/common/services/opportunity.service';

@Component({
    selector: 'ngx-qs-patients-add',
    styleUrls: ['./patients-add.component.scss'],
    templateUrl: './patients-add.component.html',
})
export class PatientsAddComponent implements OnDestroy, OnInit {

    submitted: boolean = false;
    success: boolean = false;
    today: Date = new Date();
    patientForm: FormGroup;

    get company() { return this.patientForm.get('company'); }
    get type() { return this.patientForm.get('type'); }
    get dob() { return this.patientForm.get('dob'); }
    get firstName() { return this.patientForm.get('name.firstName'); }
    get lastName() { return this.patientForm.get('name.lastName'); }
    get street() { return this.patientForm.get('address.street'); }
    get city() { return this.patientForm.get('address.city'); }
    get state() { return this.patientForm.get('address.state'); }
    get zipcode() { return this.patientForm.get('address.zipcode'); }
    get phone() { return this.patientForm.get('phone'); }
    get mobile() { return this.patientForm.get('mobile'); }
    get fax() {return this.patientForm.get('fax'); }
    get email() {return this.patientForm.get('email'); }

    constructor(
        private service: OpportunityService,
        private dialogService: NbDialogService,
        private fb: FormBuilder) {

    }

    states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

    typeInsert = [
        { value: 'Law Firm', display: 'Law Firm' },
        { value: 'Medical Group', display: 'Medical Group'},
        { value: 'Insurance Group', display: 'Insurance Group'},
        { value: 'Miscellaneous', display: 'Miscellaneous'},
    ];

    initCrmForm() {
        this.patientForm = this.fb.group({
            name: this.fb.group({
                firstName: this.fb.control('', Validators.required),
                lastName: this.fb.control('', Validators.required),
            }),
            address: this.fb.group({
                street: this.fb.control(''),
                city: this.fb.control(''),
                state: this.fb.control(''),
                zipcode: this.fb.control(''),
            }),
            dob: this.fb.control(''),
            phone: this.fb.control(''),
            mobile: this.fb.control(''),
            fax: this.fb.control(''),
            email: this.fb.control('', Validators.email),
        }, { updateOn: 'change' });
    }

    ngOnInit(): void {
        this.initCrmForm();
    }

    ngOnDestroy(): void {
    }

    submit(dialog: TemplateRef<any>) {
        this.dialogService.open(dialog);
        this.service.create(
            [
                { key: 'namefirst', value:  this.firstName.value},
                { key: 'namelast', value:  this.lastName.value},
                { key: 'dob', value: this.dob.value },
                { key: 'address1', value:  this.street.value},
                { key: 'addcity', value:  this.street.value},
                { key: 'addstate', value:  this.state.value},
                { key: 'addzip', value:  this.zipcode.value},
                { key: 'phonemobile', value:  this.mobile.value},
                { key: 'phonework', value:  this.phone.value},
                { key: 'email1', value:  this.email.value},
                { key: 'phonefax', value:  this.fax.value },
            ],
        ).subscribe(() => {
            this.submitted = true;
            this.success = true;
            setTimeout(() => {
                window.location.reload();
            }, 1000 * 2);
        }, (err) => {
            this.submitted = true;
            this.success = false;
        });
    }
}
