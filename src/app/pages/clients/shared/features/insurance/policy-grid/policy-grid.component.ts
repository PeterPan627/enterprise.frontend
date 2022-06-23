import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../../../../../@core/interfaces/common/users';
import { OpportunityService } from '../../../../../../@core/backend/common/services/opportunity.service';
import { Observable, Subject } from 'rxjs';
import { getNullableDataValue } from '../../../../../../@core/utils/helpers';
@Component({
    selector: 'ngx-policy-grid',
    templateUrl: './policy-grid.component.html',
    styleUrls: ['./policy-grid.component.scss'],
})
export class PolicyGridComponent implements OnInit {
    @Input() service: OpportunityService;
    @Input() data: Observable<any>;
    form: FormGroup;
    protected readonly unsubscribe$ = new Subject<void>();
    private role: string | string[] = [];
    users: User[] = [];
    client: any;

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
            policyEffectiveDt: '11/1/00',
            policyPostDt: '11/2/00',
            policyEnforceDt: '11/3/00',
            policyIssuedDt: '11/4/00',
            policyPaidDt: '11/5/00',
            policyBilledDt: '11/6/00',
            insurFaceAmount: 'Insurance Face Amount',
            insurBeneficiary: 'Insurance Beneficiary',
            insurBeneficiaryRelationship: 'Beneficiary Relationship',
            insurBeneficiaryDob: '11/7/00',
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
            infoCreatedDt: '11/8/00',
            infoModifyDt: '11/9/00',
            infoFrontedDt: '11/10/00',
            infoConvertedDt: '11/11/00',
            infoVerifiedDt: '11/12/00',
            infoSaleDt: '11/13/00',
            infoInterruptedDt: '11/14/00',
            infoKickedDt: '11/15/00',
            infoBilledDt: '11/16/00',
            infoReactivatedDt: '11/17/00',
            infoCreatedBy: 'Select',
            infoModifyBy: 'Select',
            infoFrontedBy: 'Select',
            infoConvertedBy: 'Select',
            infoVerifiedBy: 'Select',
            infoSubmittedBy: 'Select',
            infoInterruptedBy: 'Select',
            infoKickedBy: 'Select',
            infoCancelledBy: 'Select',
            contactId: 'Contact ID',
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
            infoFrontedDt: fb.control(''),
            infoConvertedDt: fb.control(''),
            infoVerifiedDt: fb.control(''),
            infoSaleDt: fb.control(''),
            infoInterruptedDt: fb.control(''),
            infoKickedDt: fb.control(''),
            infoBilledDt: fb.control(''),
            infoReactivatedDt: fb.control(''),
            infoCreatedBy: fb.control(''),
            infoModifyBy: fb.control(''),
            infoFrontedBy: fb.control(''),
            infoConvertedBy: fb.control(''),
            infoVerifiedBy: fb.control(''),
            infoSubmittedBy: fb.control(''),
            infoInterruptedBy: fb.control(''),
            infoKickedBy: fb.control(''),
            infoCancelledBy: fb.control(''),
            contactId: fb.control(''),

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
            policyEffectiveDt: getNullableDataValue(data.policyEffectiveDt, ''),
            policyPostDt: getNullableDataValue(data.policyPostDt, ''),
            policyEnforceDt: getNullableDataValue(data.policyEnforceDt, ''),
            policyIssuedDt: getNullableDataValue(data.policyIssuedDt, ''),
            policyPaidDt: getNullableDataValue(data.policyPaidDt, ''),
            policyBilledDt: getNullableDataValue(data.policyBilledDt, ''),
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
            infoCreatedDt: getNullableDataValue(data.infoCreatedBy, ''),
            infoModifyDt: getNullableDataValue(data.infoModifyDt, ''),
            infoFrontedDt: getNullableDataValue(data.infoFrontedDt, ''),
            infoConvertedDt: getNullableDataValue(data.infoConvertedDt, ''),
            infoVerifiedDt: getNullableDataValue(data.infoVerifiedDt, ''),
            infoSaleDt: getNullableDataValue(data.infoSaleDt, ''),
            infoInterruptedDt: getNullableDataValue(data.infoInterruptedDt, ''),
            infoKickedDt: getNullableDataValue(data.infoKickedDt, ''),
            infoBilledDt: getNullableDataValue(data.infoBilledDt, ''),
            infoReactivatedDt: getNullableDataValue(data.infoReactivatedDt, ''),
            infoCreatedBy: getNullableDataValue(data.infoCreatedBy, ''),
            infoModifyBy: getNullableDataValue(data.infoModifyBy, ''),
            infoFrontedBy: getNullableDataValue(data.infoFrontedBy, ''),
            infoConvertedBy: getNullableDataValue(data.infoConvertedBy, ''),
            infoVerifiedBy: getNullableDataValue(data.infoVerifiedBy, ''),
            infoSubmittedBy: getNullableDataValue(data.infoSubmittedBy, ''),
            infoInterruptedBy: getNullableDataValue(data.infoInterruptedBy, ''),
            infoKickedBy: getNullableDataValue(data.infoKickedBy, ''),
            infoCancelledBy: getNullableDataValue(data.infoCancelledBy, ''),
            contactId: getNullableDataValue(data.contactId, ''),



        });

    }
}
