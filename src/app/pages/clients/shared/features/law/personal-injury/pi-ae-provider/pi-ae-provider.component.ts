import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../../../../../../@core/backend/common/services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { getNullableDataValue, getNullableDateValue } from '../../../../../../../@core/utils/helpers';

@Component({
    selector: 'ngx-pi-ae-provider',
    templateUrl: './pi-ae-provider.component.html',
    styleUrls: ['./pi-ae-provider.component.scss'],
})
export class PiAEProviderComponent implements OnInit {
    accountName: '';
    form: FormGroup;
    private role: string | string[] = [];
    @Input() service: ContactService;
    @Input() data: Observable<any>;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.initForm(this.fb);
        this.loadAccountTestData(this.form);
    }

    loadAccountTestData(form: FormGroup) {
        const data = {
            PARTYSUBTYPE: 'Party Type',
            PARTYTYPE2: 'Sub Types',
            PARTY1COMPANY: 'Insurance Name',
            PARTY1FULLNAME: 'Adjuster Name',
            PARTY1DIRECTPHONE: 'Phone Number',
            PARTY1EMAIL: 'Email',
            PARTYADDRESS: 'Address',
            PARTYCITY: 'City',
            PARTYSTATE: 'State',
            PARTYZIP: 'Zip',
            PARTY1FAX: 'Fax Number',
            BILLTOTAL: 'Total cost of Treatments',
            ADJBILLTOTAL: 'Adjustment Amt',
            BILLDUETOTAL: 'Final Due',
            PARTY2NAME: 'Name',
            PARTY3NAME: 'Name',
            PARTY4NAME: 'Name',
            PARTY2MAINPHONE: 'Phone Number',
            PARTY3PHONE: 'Phone Number',
            PARTY4PHONE: 'Phone Number',
            PARTY2FAX: 'Fax',
            PARTY3FAX: 'Fax',
            PARTY4FAX: 'Fax',
            PARTY2EMAIL: 'Email',
            PARTY3EMAIL: 'Email',
            PARTY4EMAIL: 'Email',
            PARTY2ADDRESS: 'Address',
            PARTY3ADDRESS: 'Address',
            PARTY4ADDRESS: 'Address',
            PARTY2CITY: 'City',
            PARTY3CITY: 'City',
            PARTY4CITY: 'City',
            PARTY2STATE: 'State',
            PARTY3STATE: 'State',
            PARTY4STATE: 'State',
            PARTY2ZIP: 'Zip',
            PARTY3ZIP: 'Zip',
            PARTY4ZIP: 'Zip',
            PARTYDATE1: new Date(),
            PARTYDATE3: new Date(),







        };
        this.setFormValues(form, data);
    }

    initForm(fb: FormBuilder): FormGroup {

        const form = fb.group({
            PARTYSUBTYPE: fb.control(''),
            PARTYTYPE2: fb.control(''),
            PARTY1COMPANY: fb.control(''),
            PARTY1FULLNAME: fb.control(''),
            PARTY1DIRECTPHONE: fb.control(''),
            PARTY1EMAIL: fb.control(''),
            PARTY1FAX: fb.control(''),
            PARTYADDRESS: fb.control(''),
            PARTYCITY: fb.control(''),
            PARTYSTATE: fb.control(''),
            PARTYZIP: fb.control(''),
            BILLTOTAL: fb.control(''),
            ADJBILLTOTAL: fb.control(''),
            BILLDUETOTAL: fb.control(''),
            PARTY2NAME: fb.control(''),
            PARTY3NAME: fb.control(''),
            PARTY4NAME: fb.control(''),
            PARTY2MAINPHONE: fb.control(''),
            PARTY3PHONE: fb.control(''),
            PARTY4PHONE: fb.control(''),
            PARTY2FAX: fb.control(''),
            PARTY3FAX: fb.control(''),
            PARTY4FAX: fb.control(''),
            PARTY2EMAIL: fb.control(''),
            PARTY3EMAIL: fb.control(''),
            PARTY4EMAIL: fb.control(''),
            PARTY2ADDRESS: fb.control(''),
            PARTY3ADDRESS: fb.control(''),
            PARTY4ADDRESS: fb.control(''),
            PARTY2CITY: fb.control(''),
            PARTY3CITY: fb.control(''),
            PARTY4CITY: fb.control(''),
            PARTY2STATE: fb.control(''),
            PARTY3STATE: fb.control(''),
            PARTY4STATE: fb.control(''),
            PARTY2ZIP: fb.control(''),
            PARTY3ZIP: fb.control(''),
            PARTY4ZIP: fb.control(''),
            PARTYDATE1: fb.control(''),
            PARTYDATE3: fb.control(''),






        }, { updateOn: 'blur' });
        return form;
    }


    setFormValues(form: FormGroup, data: any) {
        form.setValue({
            PARTYSUBTYPE: getNullableDateValue(data.PARTYSUBTYPE, ''),
            PARTYTYPE2: getNullableDataValue(data.PARTYTYPE2, ''),
            PARTY1COMPANY: getNullableDateValue(data.PARTY1COMPANY, ''),
            PARTY1FULLNAME: getNullableDateValue(data.PARTY1FULLNAME, ''),
            PARTY1DIRECTPHONE: getNullableDateValue(data.PARTY1DIRECTPHONE, ''),
            PARTY1EMAIL: getNullableDateValue(data.PARTY1EMAIL, ''),
            PARTY1FAX: getNullableDateValue(data.PARTY1FAX, ''),
            PARTYADDRESS: getNullableDataValue(data.PARTYADDRESS, ''),
            PARTYCITY: getNullableDataValue(data.PARTYCITY, ''),
            PARTYSTATE: getNullableDataValue(data.PARTYSTATE, ''),
            PARTYZIP: getNullableDataValue(data.PARTYZIP, ''),
            BILLTOTAL: getNullableDataValue(data.BILLTOTAL, ''),
            ADJBILLTOTAL: getNullableDataValue(data.ADJBILLTOTAL, ''),
            BILLDUETOTAL: getNullableDataValue(data.BILLDUETOTAL, ''),
            PARTY2NAME: getNullableDataValue(data.PARTY2NAME, ''),
            PARTY3NAME: getNullableDataValue(data.PARTY3NAME, ''),
            PARTY4NAME: getNullableDataValue(data.PARTY4NAME, ''),
            PARTY2MAINPHONE: getNullableDataValue(data.PARTY2MAINPHONE, ''),
            PARTY3PHONE: getNullableDataValue(data.PARTY3PHONE, ''),
            PARTY4PHONE: getNullableDataValue(data.PARTY4PHONE, ''),
            PARTY2FAX: getNullableDataValue(data.PARTY2FAX, ''),
            PARTY3FAX: getNullableDataValue(data.PARTY3FAX, ''),
            PARTY4FAX: getNullableDataValue(data.PARTY4FAX, ''),
            PARTY2EMAIL: getNullableDataValue(data.PARTY2EMAIL, ''),
            PARTY3EMAIL: getNullableDataValue(data.PARTY3EMAIL, ''),
            PARTY4EMAIL: getNullableDataValue(data.PARTY4EMAIL, ''),
            PARTY2ADDRESS: getNullableDataValue(data.PARTY2ADDRESS, ''),
            PARTY3ADDRESS: getNullableDataValue(data.PARTY3ADDRESS, ''),
            PARTY4ADDRESS: getNullableDataValue(data.PARTY4ADDRESS, ''),
            PARTY2CITY: getNullableDataValue(data.PARTY2CITY, ''),
            PARTY3CITY: getNullableDataValue(data.PARTY3CITY, ''),
            PARTY4CITY: getNullableDataValue(data.PARTY4CITY, ''),
            PARTY2STATE: getNullableDataValue(data.PARTY2STATE, ''),
            PARTY3STATE: getNullableDataValue(data.PARTY3STATE, ''),
            PARTY4STATE: getNullableDataValue(data.PARTY4STATE, ''),
            PARTY2ZIP: getNullableDataValue(data.PARTY2ZIP, ''),
            PARTY3ZIP: getNullableDataValue(data.PARTY3ZIP, ''),
            PARTY4ZIP: getNullableDataValue(data.PARTY4ZIP, ''),
            PARTYDATE1: getNullableDataValue(data.PARTYDATE1, ''),
            PARTYDATE3: getNullableDataValue(data.PARTYDATE3, ''),


        });

    }

}
