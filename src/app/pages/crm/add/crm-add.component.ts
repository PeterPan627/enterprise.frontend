import { OnDestroy, OnInit, Component, TemplateRef } from '@angular/core';
import { ContactService } from '../../../@core/backend/common/services/contact.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';

@Component({
    selector: 'ngx-qs-crm-add',
    styleUrls: ['./crm-add.component.scss'],
    templateUrl: './crm-add.component.html',
})
export class CrmAddComponent implements OnDestroy, OnInit {

    submitted: boolean = false;
    success: boolean = false;

    crmForm: FormGroup;

    get company() { return this.crmForm.get('company'); }
    get type() { return this.crmForm.get('type'); }
    get firstName() { return this.crmForm.get('name.firstName'); }
    get lastName() { return this.crmForm.get('name.lastName'); }
    get street() { return this.crmForm.get('address.street'); }
    get city() { return this.crmForm.get('address.city'); }
    get state() { return this.crmForm.get('address.state'); }
    get zipcode() { return this.crmForm.get('address.zipcode'); }
    get phone() { return this.crmForm.get('phone'); }
    get mobile() { return this.crmForm.get('mobile'); }
    get fax() {return this.crmForm.get('fax'); }
    get email() {return this.crmForm.get('email'); }
    get title() { return this.crmForm.get('title'); }
    get role() { return this.crmForm.get('role'); }

    constructor(
        private service: ContactService,
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
        this.crmForm = this.fb.group({
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
            title: this.fb.control(''),
            role: this.fb.control(''),
            type: this.fb.control('', Validators.required),
            company: this.fb.control('', Validators.required),
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
                { key: 'title', value: this.title.value },
                { key: 'role', value: this.role.value },
                { key: 'company', value: this.company.value },
                { key: 'typeinsert', value:  this.type.value},
                { key: 'namefirst', value:  this.firstName.value},
                { key: 'namelast', value:  this.lastName.value},
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
