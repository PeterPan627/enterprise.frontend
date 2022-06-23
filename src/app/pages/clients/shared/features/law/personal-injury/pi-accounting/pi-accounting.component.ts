import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ContactService } from '../../../../../../../@core/backend/common/services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { getNullableDateValue, getNullableDataValue } from '../../../../../../../@core/utils/helpers';
import { OpportunityService } from '../../../../../../../@core/backend/common/services/opportunity.service';
import { takeUntil } from 'rxjs/operators';
import { CustomValidator } from '../../../../../../../@core/backend/common/services/validation.service';
@Component({
    selector: 'ngx-pi-accounting',
    templateUrl: './pi-accounting.component.html',
    styleUrls: ['./pi-accounting.component.scss'],
})
export class PiAccountingTabComponent implements OnInit {
    protected readonly unsubscribe$ = new Subject<void>();
    data: Observable<any>;
    form: FormGroup;
    private role: string | string[] = [];
    @Input() service: OpportunityService;
    @Input() id: string;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.initForm(this.fb);
        this.data = this.service.getPersonalInjuryAccounting(this.id).pipe(takeUntil(this.unsubscribe$));
        this.data.subscribe(d => {
            this.setFormValues(this.form, d, this.service);
        })

    }

    private setIntakeFormData(opportunityId: String) {
        return {
            DEBTORGROSSINCOME: {
                table: 'DEBTORINCOME',
                column: 'DEBTORGROSSINCOME',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DEBTORINCOME: {
                table: 'DEBTORINCOME',
                column: 'DEBTORINCOME',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DEBTORCOMISSIONS: {
                table: 'DEBTORINCOME',
                column: 'DEBTORCOMISSIONS',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DEBTORRENTALINCOME: {
                table: 'DEBTORINCOME',
                column: 'DEBTORRENTALINCOME',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DEBTORCHILDSUPPORT: {
                table: 'DEBTORINCOME',
                column: 'DEBTORCHILDSUPPORT',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DEBTORALIMONY: {
                table: 'DEBTORINCOME',
                column: 'DEBTORALIMONY',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CODEBTORRENTALINCOME: {
                table: 'DEBTORINCOME',
                column: 'CODEBTORRENTALINCOME',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CODEBTORGROSSINCOME: {
                table: 'DEBTORINCOME',
                column: 'CODEBTORGROSSINCOME',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CODEBTORINCOME: {
                table: 'DEBTORINCOME',
                column: 'CODEBTORINCOME',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CODEBTORCOMISSION: {
                table: 'DEBTORINCOME',
                column: 'CODEBTORCOMISSION',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CODEBTORCHILDSUPPORT: {
                table: 'DEBTORINCOME',
                column: 'CODEBTORCHILDSUPPORT',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CODEBTORALIMONY: {
                table: 'DEBTORINCOME',
                column: 'CODEBTORALIMONY',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CODEBTORSOCIALSECURITY: {
                table: 'DEBTORINCOME',
                column: 'CODEBTORSOCIALSECURITY',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CODEBTORINCOMETOTAL: {
                table: 'DEBTORINCOME',
                column: 'CODEBTORINCOMETOTAL',
                identifier: opportunityId,
                key: 'OpportunityId',
            },






        }
    }

    initForm(fb: FormBuilder): FormGroup {

        const form = fb.group({
            DEBTORGROSSINCOME: fb.control(''),
            DEBTORINCOME: fb.control(''),
            DEBTORCOMISSIONS: fb.control(''),
            DEBTORRENTALINCOME: fb.control(''),
            DEBTORCHILDSUPPORT: fb.control(''),
            DEBTORALIMONY: fb.control(''),
            CODEBTORRENTALINCOME: fb.control(''),
            CODEBTORGROSSINCOME: fb.control(''),
            CODEBTORINCOME: fb.control(''),
            CODEBTORCOMISSION: fb.control(''),
            CODEBTORCHILDSUPPORT: fb.control(''),
            CODEBTORALIMONY: fb.control(''),
            CODEBTORSOCIALSECURITY: fb.control(''),
            CODEBTORINCOMETOTAL: fb.control(''),

        }, { updateOn: 'blur' });
        return form;
    }


    setFormValues(form: FormGroup, data: any, service: OpportunityService) {
        form.setValue({
            DEBTORGROSSINCOME: getNullableDataValue(data.DEBTORGROSSINCOME, ''),
            DEBTORINCOME: getNullableDataValue(data.DEBTORINCOME, ''),
            DEBTORCOMISSIONS: getNullableDataValue(data.DEBTORCOMISSIONS, ''),
            DEBTORRENTALINCOME: getNullableDataValue(data.DEBTORRENTALINCOME, ''),
            DEBTORCHILDSUPPORT: getNullableDataValue(data.DEBTORCHILDSUPPORT, ''),
            DEBTORALIMONY: getNullableDataValue(data.DEBTORALIMONY, ''),
            CODEBTORRENTALINCOME: getNullableDataValue(data.CODEBTORRENTALINCOME, ''),
            CODEBTORGROSSINCOME: getNullableDataValue(data.CODEBTORGROSSINCOME, ''),
            CODEBTORINCOME: getNullableDataValue(data.CODEBTORINCOME, ''),
            CODEBTORCOMISSION: getNullableDataValue(data.CODEBTORCOMISSION, ''),
            CODEBTORCHILDSUPPORT: getNullableDataValue(data.CODEBTORCHILDSUPPORT, ''),
            CODEBTORALIMONY: getNullableDataValue(data.CODEBTORALIMONY, ''),
            CODEBTORSOCIALSECURITY: getNullableDataValue(data.CODEBTORSOCIALSECURITY, ''),
            CODEBTORINCOMETOTAL: getNullableDataValue(data.CODEBTORINCOMETOTAL, ''),




        });
        this.pushFormValues(form, data, service)
    }
    private pushFormValues(form: FormGroup, data: any, service: OpportunityService) {
        const intakeFormData = this.setIntakeFormData(data.opportunityId);
        const controls = form.controls;
        for (const property in controls) {
            if (controls.hasOwnProperty(property)) {
                controls[property].setAsyncValidators(CustomValidator.validate(
                    service,
                    data.opportunityId,
                    intakeFormData[property],
                ));
            }
        }
    }

}
