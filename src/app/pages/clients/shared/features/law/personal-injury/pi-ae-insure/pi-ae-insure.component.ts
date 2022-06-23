import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { getNullableDataValue, getNullableDateValue } from '../../../../../../../@core/utils/helpers';
import { OpportunityService } from '../../../../../../../@core/backend/common/services/opportunity.service';

@Component({
    selector: 'ngx-pi-ae-insure',
    templateUrl: './pi-ae-insure.component.html',
    styleUrls: ['./pi-ae-insure.component.scss'],
})
export class PiAEInsureComponent implements OnInit {
    form: FormGroup;
    data: Observable<any>;
    //private role: string | string[] = [];
    @Input() service: OpportunityService;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.initForm(this.fb);
        this.loadAccountTestData(this.form);
    }

    loadAccountTestData(form: FormGroup) {
        const data = {
            PARTYSUBTYPE: 'Party Type',
            PARTY1COMPANY: 'Insurance Name',
            PARTY1FULLNAME: 'Adjuster Name',
            PARTY1DIRECTPHONE: 'Phone Number',
            PARTY1NUMB1: 'Ext',
            PARTY1EMAIL: 'Email',
            PARTY1FAX: 'Fax Number',
            PARTY1ADDRESS: 'Address',
            PARTY1CITY: 'City',
            PARTY1STATE: 'State',
            PARTY1ZIP: 'Zip Code',
            P1UMYES: 'YES',
            LIMIT1: 'Limit',
            LIMIT2: 'Limit',
            P1MEDEXHAUSTED: 'Exhausted',
            PARTYINFO2: 'Policy Number',
            PARTYINFO1: 'Claim Number',



        };
        this.setFormValues(form, data);
    }

    initForm(fb: FormBuilder): FormGroup {

        const form = fb.group({
            PARTYSUBTYPE: fb.control(''),
            PARTY1COMPANY: fb.control(''),
            PARTY1FULLNAME: fb.control(''),
            PARTY1DIRECTPHONE: fb.control(''),
            PARTY1NUMB1: fb.control(''),
            PARTY1EMAIL: fb.control(''),
            PARTY1FAX: fb.control(''),
            PARTY1ADDRESS: fb.control(''),
            PARTY1CITY: fb.control(''),
            PARTY1STATE: fb.control(''),
            PARTY1ZIP: fb.control(''),
            P1UMYES: fb.control(''),
            LIMIT1: fb.control(''),
            LIMIT2: fb.control(''),
            P1MEDEXHAUSTED: fb.control(''),
            PARTYINFO2: fb.control(''),
            PARTYINFO1: fb.control(''),





        }, { updateOn: 'blur' });
        return form;
    }


    setFormValues(form: FormGroup, data: any) {
        form.setValue({
            PARTYSUBTYPE: getNullableDateValue(data.PARTYSUBTYPE, ''),
            PARTY1COMPANY: getNullableDateValue(data.PARTY1COMPANY, ''),
            PARTY1FULLNAME: getNullableDateValue(data.PARTY1FULLNAME, ''),
            PARTY1DIRECTPHONE: getNullableDateValue(data.PARTY1DIRECTPHONE, ''),
            PARTY1NUMB1: getNullableDateValue(data.PARTY1NUMB1, ''),
            PARTY1EMAIL: getNullableDateValue(data.PARTY1EMAIL, ''),
            PARTY1FAX: getNullableDateValue(data.PARTY1FAX, ''),
            PARTY1ADDRESS: getNullableDateValue(data.PARTY1ADDRESS, ''),
            PARTY1CITY: getNullableDateValue(data.PARTY1CITY, ''),
            PARTY1STATE: getNullableDateValue(data.PARTY1STATE, ''),
            PARTY1ZIP: getNullableDateValue(data.PARTY1ZIP, ''),
            P1UMYES: getNullableDataValue(data.P1UMYES, ''),
            LIMIT1: getNullableDateValue(data.LIMIT1, ''),
            LIMIT2: getNullableDateValue(data.LIMIT2, ''),
            P1MEDEXHAUSTED: getNullableDateValue(data.P1MEDEXHAUSTED, ''),
            PARTYINFO2: getNullableDateValue(data.PARTYINFO2, ''),
            PARTYINFO1: getNullableDateValue(data.PARTYINFO1, ''),



        });

    }

}
