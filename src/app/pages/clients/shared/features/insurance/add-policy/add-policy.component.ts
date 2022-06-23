import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../../../../../@core/interfaces/common/users';
import { OpportunityService } from '../../../../../../@core/backend/common/services/opportunity.service';
import { Observable, Subject } from 'rxjs';
import { getNullableDataValue, getNullableDateValue } from '../../../../../../@core/utils/helpers';
@Component({
    selector: 'ngx-add-policy',
    templateUrl: './add-policy.component.html',
    styleUrls: ['./add-policy.component.scss'],
})
export class AddPolicyComponent implements OnInit {
    @Input() service: OpportunityService;
    @Input() data: Observable<any>;
    form: FormGroup;
    protected readonly unsubscribe$ = new Subject<void>();
    users: User[] = [];
    client: any;
    getNullableDataValue: any;



    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.initform(this.fb);
        this.loadUserData(this.form);
    }

    loadUserTestData(form: FormGroup, response: Observable<any>, service: OpportunityService) {
        response.subscribe((data) => {
            this.setFormValues(form, data);
        });
    }

    loadUserData(form: FormGroup) {
        const data = {
            agent: 'Select',
            premiumSubsidized: 'Premuim Subsidized',
            status: 'Select',
            policyPlan: 'Policy Plan',
            policyCarrier: 'Policy Carrier',
            policyProduct: 'Poilyc Product',
            policyGroup: 'Policy Group',
            policyDuration: 'Policy Duration',
            policyCoinsurance: 'Policy Coinsurance',
            policyNumber: 'Policy Number',
            policyPremium: 'Policy Premium',
            policyEnrollmentFee: 'Policy Enrollment Fee',
            policyAdminFee: 'Policy Admin Fee',
            policyDeductible: 'Policy Deductible',
            policyEffectiveDt: new Date(),
            policyPostDt: new Date(),
            policyEnforceDt: new Date(),
            policyIssuedDt: new Date(),
            policyPaidDt: new Date(),
            policyBilledDt: new Date(),
            insurFaceAmount: 'Insurance Face Amount',
            insurBeneficiary: 'Insurance Beneficiary',
            insurBeneficiaryRelationship: 'Beneficiary Relationship',
            insurBeneficiaryDob: new Date(),
            insurBeneficiaryPhone: '949-000-0000',
            billingFirstName: 'First Name',
            billingMiddleName: 'Middle Name',
            billingLastName: 'Last Name',
            billingAddress: 'Address',
            billingAddress2: 'Address 2',
            billingZip: 'Zip',
            billingCity: 'City',
            billingState: 'State',
            billingPaymentType: 'Payment Type',
            ccNumber: 'Credit Card Number',
            ccExpmm: 'Cc Expiration Month',
            ccExpyy: 'Cc Expiration Year',
            ccCvv: 'Cvv',
            ccType: 'Credit Card Type',
            bankName: 'Bank Name',
            bankAccNumber: 'Account Number',
            bankRoutingNumber: 'Routing Number',
            bankCheckNumber: 'Check Number',
            infoCreatedDt: new Date(),
            infoModifyDt: new Date(),


        };

    }




    initform(fb: FormBuilder): FormGroup {
        const form = fb.group({
            agent: fb.control(''),
            premiumSubsidized: fb.control(''),
            status: fb.control(''),
            policyPlan: fb.control(''),
            policyCarrier: fb.control(''),
            policyProduct: fb.control(''),
            policyGroup: fb.control(''),
            policyDuration: fb.control(''),
            policyCoinsurance: fb.control(''),
            policyNumber: fb.control(''),
            policyAppNumber: fb.control(''),
            policyPremium: fb.control(''),
            policyEnrollmentFee: fb.control(''),
            policyAdminFee: fb.control(''),
            policyDeductible: fb.control(''),
            policyEffectiveDt: fb.control(''),
            policyPostDt: fb.control(''),
            policyEnforceDt: fb.control(''),
            policyIssuedDt: fb.control(''),
            policyPaidDt: fb.control(''),
            policyBilledDt: fb.control(''),
            insurFaceAmount: fb.control(''),
            insurBeneficiary: fb.control(''),
            insurBeneficiaryRelationship: fb.control(''),
            insurBeneficiaryDob: fb.control(''),
            insurBeneficiaryPhone: fb.control(''),
            billingFirstName: fb.control(''),
            billingMiddleName: fb.control(''),
            billingLastName: fb.control(''),
            billingAddress: fb.control(''),
            billingAddress2: fb.control(''),
            billingZip: fb.control(''),
            billingCity: fb.control(''),
            billingState: fb.control(''),
            billingPaymentType: fb.control(''),
            ccNumber: fb.control(''),
            ccExpmm: fb.control(''),
            ccExpyy: fb.control(''),
            ccCvv: fb.control(''),
            ccType: fb.control(''),
            bankName: fb.control(''),
            bankAccNumber: fb.control(''),
            bankRoutingNumber: fb.control(''),
            bankCheckNumber: fb.control(''),
            infoCreatedDt: fb.control(''),
            infoModifyDt: fb.control(''),


        }, { updateOn: 'blur' });
        return form;
    }


    setFormValues(form: FormGroup, data: any) {
        form.setValue({
            agent: getNullableDataValue(data.agent, ''),
            premiumSubsidized: getNullableDataValue(data.premiumSubsidized, ''),
            status: getNullableDataValue(data.status, ''),
            policyPlan: getNullableDataValue(data.policyPlan, ''),
            policyCarrier: getNullableDataValue(data.policyCarrier, ''),
            policyProduct: getNullableDataValue(data.policyProduct, ''),
            policyGroup: getNullableDataValue(data.policyGroup, ''),
            policyDuration: getNullableDataValue(data.policyDuration, ''),
            policyCoinsurance: getNullableDataValue(data.policyCoinsurance, ''),
            policyNumber: getNullableDataValue(data.policyNumber, ''),
            policyAppNumber: getNullableDataValue(data.policyAppNumber, ''),
            policyPremium: getNullableDataValue(data.policyPremium, ''),
            policyEnrollmentFee: getNullableDataValue(data.policyEnrollmentFee, ''),
            policyAdminFee: getNullableDataValue(data.policyAdminFee, ''),
            policyDeductible: getNullableDataValue(data.policyDeductible, ''),
            policyEffectiveDt: getNullableDateValue(data.policyEffectiveDt, ''),
            policyPostDt: getNullableDateValue(data.policyPostDt, ''),
            policyEnforceDt: getNullableDateValue(data.policyEnforceDt, ''),
            policyIssuedDt: getNullableDateValue(data.policyIssuedDt, ''),
            policyPaidDt: getNullableDateValue(data.policyPaidDt, ''),
            policyBilledDt: getNullableDateValue(data.policyBilledDt, ''),
            insurFaceAmount: getNullableDataValue(data.insurFaceAmount, ''),
            insurBeneficiary: getNullableDataValue(data.insurBeneficiary, ''),
            insurBeneficiaryDob: getNullableDataValue(data.insurBeneficiaryDob, ''),
            insurBeneficiaryRelationship: getNullableDataValue(data.insurBeneficiaryRelationship, ''),
            insurBeneficiaryPhone: getNullableDataValue(data.insurBeneficiaryPhone, ''),
            billingFirstName: getNullableDataValue(data.billingFirstName, ''),
            billingMiddleName: getNullableDataValue(data.billingMiddleName, ''),
            billingLastName: getNullableDataValue(data.billingLastName, ''),
            billingAddress: getNullableDataValue(data.billingAddress, ''),
            billingAddress2: getNullableDataValue(data.billingAddress2, ''),
            billingZip: getNullableDataValue(data.billingZip, ''),
            billingCity: getNullableDataValue(data.billingCity, ''),
            billingState: getNullableDataValue(data.billingState, ''),
            billingPaymentType: getNullableDataValue(data.billingPaymentType, ''),
            ccNumber: getNullableDataValue(data.ccNumber, ''),
            ccExpmm: getNullableDataValue(data.ccExpmm, ''),
            ccExpyy: getNullableDataValue(data.ccExpyy, ''),
            ccCvv: getNullableDataValue(data.ccCvv, ''),
            ccType: getNullableDataValue(data.ccType, ''),
            bankName: getNullableDataValue(data.bankName, ''),
            bankAccNumber: getNullableDataValue(data.bankAccNumber, ''),
            bankRoutingNumber: getNullableDataValue(data.bankRoutingNumber, ''),
            bankCheckNumber: getNullableDataValue(data.bankRoutingNumber, ''),
            infoCreatedDt: getNullableDateValue(data.infoCreatedBy, ''),
            infoModifyDt: getNullableDateValue(data.infoModifyDt, ''),




        });

    }
}
