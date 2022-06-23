import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../../../../../@core/backend/common/services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { getNullableDataValue, getNullableDateValue } from '../../../../../../@core/utils/helpers';
@Component({
    selector: 'ngx-processing-p65',
    templateUrl: './processing-p65.component.html',
    styleUrls: ['./processing-p65.component.scss'],
})
export class ProcP65 implements OnInit {
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
            t1: '',
            testedDt1: '',
            labTest1: '',
            labRes1: '',
            expDt1: '',
            t2: '',
            testedDt2: '',
            labTest2: '',
            labRes2: '',
            expDt2: '',
            t3: '',
            testedDt3: '',
            labTest3: '',
            labRes3: '',
            expDt3: '',
            t4: '',
            testedDt4: '',
            labTest4: '',
            labRes4: '',
            expDt4: '',
            t5: '',
            testedDt5: '',
            labTest5: '',
            labRes5: '',
            expDt5: '',
            manufacture: '',
            company1: '',
            ceo1: '',
            address1: '',
            city1: '',
            state1: '',
            zip1: '',
            retailer1: '',
            company2: '',
            ceo2: '',
            address2: '',
            city2: '',
            state2: '',
            zip2: '',
            retailer2: '',
            company3: '',
            ceo3: '',
            address3: '',
            city3: '',
            state3: '',
            zip3: '',
            opcLink: '',
            opc1Firm: '',
            opc1Attorney: '',
            opc1Direct: '',
            opc1Office: '',
            opc1Mobile: '',
            opc1Fax: '',
            opc1Email: '',
            opc1Address: '',
            opc1City: '',
            opc1State: '',
            opc1Zip: '',
            opcLink2: '',
            opc2Firm: '',
            opc2Attorney: '',
            opc2Direct: '',
            opc2Office: '',
            opc2Mobile: '',
            opc2Fax: '',
            opc2Email: '',
            opc2Address: '',
            opc2City: '',
            opc2State: '',
            opc2Zip: '',


        };
        this.setFormValues(form, data);
    }

    initForm(fb: FormBuilder): FormGroup {
        const form = fb.group({
            t1: fb.control(''),
            testedDt1: fb.control(''),
            labTest1: fb.control(''),
            labRes1: fb.control(''),
            expDt1: fb.control(''),
            t2: fb.control(''),
            testedDt2: fb.control(''),
            labTest2: fb.control(''),
            labRes2: fb.control(''),
            expDt2: fb.control(''),
            t3: fb.control(''),
            testedDt3: fb.control(''),
            labTest3: fb.control(''),
            labRes3: fb.control(''),
            expDt3: fb.control(''),
            t4: fb.control(''),
            testedDt4: fb.control(''),
            labTest4: fb.control(''),
            labRes4: fb.control(''),
            expDt4: fb.control(''),
            t5: fb.control(''),
            testedDt5: fb.control(''),
            labTest5: fb.control(''),
            labRes5: fb.control(''),
            expDt5: fb.control(''),
            manufacture: fb.control(''),
            company1: fb.control(''),
            ceo1: fb.control(''),
            address1: fb.control(''),
            city1: fb.control(''),
            state1: fb.control(''),
            zip1: fb.control(''),
            retailer1: fb.control(''),
            company2: fb.control(''),
            ceo2: fb.control(''),
            address2: fb.control(''),
            city2: fb.control(''),
            state2: fb.control(''),
            zip2: fb.control(''),
            retailer2: fb.control(''),
            company3: fb.control(''),
            ceo3: fb.control(''),
            address3: fb.control(''),
            city3: fb.control(''),
            state3: fb.control(''),
            zip3: fb.control(''),
            opcLink: fb.control(''),
            opc1Firm: fb.control(''),
            opc1Attorney: fb.control(''),
            opc1Direct: fb.control(''),
            opc1Office: fb.control(''),
            opc1Mobile: fb.control(''),
            opc1Fax: fb.control(''),
            opc1Email: fb.control(''),
            opc1Address: fb.control(''),
            opc1City: fb.control(''),
            opc1State: fb.control(''),
            opc1Zip: fb.control(''),
            opcLink2: fb.control(''),
            opc2Firm: fb.control(''),
            opc2Attorney: fb.control(''),
            opc2Direct: fb.control(''),
            opc2Office: fb.control(''),
            opc2Mobile: fb.control(''),
            opc2Fax: fb.control(''),
            opc2Email: fb.control(''),
            opc2Address: fb.control(''),
            opc2City: fb.control(''),
            opc2State: fb.control(''),
            opc2Zip: fb.control(''),


        }, { updateOn: 'blur' });
        return form;
    }

    setFormValues(form: FormGroup, data: any) {
        form.setValue({
            t1: getNullableDataValue(data.t1, ''),
            testedDt1: getNullableDataValue(data.testedDt1, ''),
            labTest1: getNullableDataValue(data.labTest1, ''),
            labRes1: getNullableDataValue(data.labRes1, ''),
            expDt1: getNullableDataValue(data.expDt1, ''),
            t2: getNullableDataValue(data.t2, ''),
            testedDt2: getNullableDataValue(data.testedDt2, ''),
            labTest2: getNullableDataValue(data.labTest2, ''),
            labRes2: getNullableDataValue(data.labRes2, ''),
            expDt2: getNullableDataValue(data.expDt2, ''),
            t3: getNullableDataValue(data.t3, ''),
            testedDt3: getNullableDataValue(data.testedDt3, ''),
            labTest3: getNullableDataValue(data.labTest3, ''),
            labRes3: getNullableDataValue(data.labRes3, ''),
            expDt3: getNullableDataValue(data.expDt3, ''),
            t4: getNullableDataValue(data.t4, ''),
            testedDt4: getNullableDataValue(data.testedDt4, ''),
            labTest4: getNullableDataValue(data.labTest4, ''),
            labRes4: getNullableDataValue(data.labRes4, ''),
            expDt4: getNullableDataValue(data.expDt4, ''),
            t5: getNullableDataValue(data.t5, ''),
            testedDt5: getNullableDataValue(data.testedDt5, ''),
            labTest5: getNullableDataValue(data.labTest5, ''),
            labRes5: getNullableDataValue(data.labRes5, ''),
            expDt5: getNullableDataValue(data.expDt5, ''),
            manufacture: getNullableDataValue(data.manufacture, ''),
            company1: getNullableDataValue(data.company1, ''),
            ceo1: getNullableDataValue(data.ceo1, ''),
            address1: getNullableDataValue(data.address1, ''),
            city1: getNullableDataValue(data.city1, ''),
            state1: getNullableDataValue(data.state1, ''),
            zip1: getNullableDataValue(data.zip1, ''),
            retailer1: getNullableDataValue(data.retailer1, ''),
            company2: getNullableDataValue(data.company2, ''),
            ceo2: getNullableDataValue(data.ceo2, ''),
            address2: getNullableDataValue(data.address2, ''),
            city2: getNullableDataValue(data.city2, ''),
            state2: getNullableDataValue(data.state2, ''),
            zip2: getNullableDataValue(data.zip2, ''),
            retailer2: getNullableDataValue(data.retailer2, ''),
            company3: getNullableDataValue(data.company3, ''),
            ceo3: getNullableDataValue(data.ceo3, ''),
            address3: getNullableDataValue(data.address3, ''),
            city3: getNullableDataValue(data.city3, ''),
            state3: getNullableDataValue(data.state3, ''),
            zip3: getNullableDataValue(data.zip3, ''),
            opcLink: getNullableDataValue(data.opcLink, ''),
            opc1Firm: getNullableDataValue(data.opc1Firm, ''),
            opc1Attorney: getNullableDataValue(data.opc1Attorney, ''),
            opc1Direct: getNullableDataValue(data.opc1Direct, ''),
            opc1Office: getNullableDataValue(data.opc1Office, ''),
            opc1Mobile: getNullableDataValue(data.opc1Mobile, ''),
            opc1Fax: getNullableDataValue(data.opc1Fax, ''),
            opc1Email: getNullableDataValue(data.opc1Email, ''),
            opc1Address: getNullableDataValue(data.opc1Address, ''),
            opc1City: getNullableDataValue(data.opc1City, ''),
            opc1State: getNullableDataValue(data.opc1State, ''),
            opc1Zip: getNullableDataValue(data.opc1Zip, ''),
            opcLink2: getNullableDataValue(data.opcLink2, ''),
            opc2Firm: getNullableDataValue(data.opc2Firm, ''),
            opc2Attorney: getNullableDataValue(data.opc2Attorney, ''),
            opc2Direct: getNullableDataValue(data.opc2Direct, ''),
            opc2Office: getNullableDataValue(data.opc2Office, ''),
            opc2Mobile: getNullableDataValue(data.opc2Mobile, ''),
            opc2Fax: getNullableDataValue(data.opc2Fax, ''),
            opc2Email: getNullableDataValue(data.opc2Email, ''),
            opc2Address: getNullableDataValue(data.opc2Address, ''),
            opc2City: getNullableDataValue(data.opc2City, ''),
            opc2State: getNullableDataValue(data.opc2State, ''),
            opc2Zip: getNullableDataValue(data.opc2Zip, ''),



        });
    }
}