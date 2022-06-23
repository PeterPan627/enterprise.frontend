import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ContactService } from '../../../../../../../@core/backend/common/services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { getNullableDateValue, getNullableDataValue } from '../../../../../../../@core/utils/helpers';
import { OpportunityService } from '../../../../../../../@core/backend/common/services/opportunity.service';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';
import { takeUntil } from 'rxjs/operators';
import { CustomValidator } from '../../../../../../../@core/backend/common/services/validation.service';
@Component({
    selector: 'ngx-p65-settlement',
    templateUrl: './p65-settlement.component.html',
    styleUrls: ['./p65-settlement.component.scss'],
})
export class P65SettlementTabComponent implements OnInit {
    protected readonly unsubscribe$ = new Subject<void>();
    data: Observable<any>;
    form: FormGroup;
    private role: string | string[] = [];
    @Input() service: OpportunityService;
    @Input() id: string;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.initForm(this.fb);
        this.data = this.service.getSettlementP65(this.id).pipe(takeUntil(this.unsubscribe$));
        this.data.subscribe(d => {
            this.setFormValues(this.form, d, this.service);
        })

    }

    private setIntakeFormData(opportunityId: String) {
        return {
            ClientID: {
                table: 'opportunity',
                column: 'ClientID',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1Co: {
                table: 'Parties Involved',
                column: 'Party1Co',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1Name: {
                table: 'Parties Involved',
                column: 'Party1Name',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1direct: {
                table: 'Parties Involved',
                column: 'Party1direct',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1phone: {
                table: 'Parties Involved',
                column: 'Party1phone',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1mobile: {
                table: 'Parties Involved',
                column: 'Party1mobile',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1fax: {
                table: 'Parties Involved',
                column: 'Party1fax',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1misc1: {
                table: 'Parties Involved',
                column: 'Party1misc1',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1address: {
                table: 'Parties Involved',
                column: 'Party1address',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1city: {
                table: 'Parties Involved',
                column: 'Party1city',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1state: {
                table: 'Parties Involved',
                column: 'Party1state',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1zip: {
                table: 'Parties Involved',
                column: 'Party1zip',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1misc2: {
                table: 'Parties Involved',
                column: 'Party1misc2',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            PlaintiffPhoneAcquire: {
                table: 'Law',
                column: 'PlaintiffPhoneAcquire',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CRED1PROOF: {
                table: 'Law',
                column: 'CRED1PROOF',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            InitialDemand: {
                table: 'ADA',
                column: 'InitialDemand',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            InitialDemandDate: {
                table: 'ADA',
                column: 'InitialDemandDate',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            InitialOffer: {
                table: 'ADA',
                column: 'InitialOffer',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            InitialOfferDate: {
                table: 'ADA',
                column: 'InitialOfferDate',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CounterSettl: {
                table: 'ADA',
                column: 'CounterSettl',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CounterSettlDate: {
                table: 'ADA',
                column: 'CounterSettlDate',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            ProposedSettl: {
                table: 'ADA',
                column: 'ProposedSettl',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            PROPOSEDSETTLDATE: {
                table: 'ADA',
                column: 'PROPOSEDSETTLDATE',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            FinalAgreedSettlement: {
                table: 'ADA',
                column: 'FinalAgreedSettlement',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            FinalAgreedSettlementDate: {
                table: 'ADA',
                column: 'FinalAgreedSettlementDate',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            ClientMoPmt9: {
                table: 'FeeStructure',
                column: 'ClientMoPmt9',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            ClientMoPaid10: {
                table: 'FeeStructure',
                column: 'ClientMoPaid10',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            ClientMoPaid11: {
                table: 'FeeStructure',
                column: 'ClientMoPaid11',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Settled_20: {
                table: 'Tracking',
                column: 'Settled_20',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Step16Completed: {
                table: 'Tracking',
                column: 'Step16Completed',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            JudgmentDate: {
                table: 'CaseInfo',
                column: 'JudgmentDate',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            JudgementType: {
                table: 'CaseInfo',
                column: 'JudgementType',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            JudgmentSettle: {
                table: 'CaseInfo',
                column: 'JudgmentSettle',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            FinalSettlementDate: {
                table: 'ADA',
                column: 'FinalSettlementDate',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            SettlementType1: {
                table: 'CaseInfo',
                column: 'SettlementType1',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CourtName: {
                table: 'CaseInfo',
                column: 'CourtName',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CourtDocket: {
                table: 'CaseInfo',
                column: 'CourtDocket',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            SettlementType2: {
                table: 'CaseInfo',
                column: 'SettlementType2',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            civilpenalties: {
                table: 'CaseInfo',
                column: 'civilpenalties',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            GrossRevTotal: {
                table: 'FeeStructure',
                column: 'GrossRevTotal',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            OtherPmts: {
                table: 'CaseInfo',
                column: 'OtherPmts',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            OtherPaymentMemo: {
                table: 'CaseInfo',
                column: 'OtherPaymentMemo',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            SettlementOfferDte1: {
                table: 'CaseInfo',
                column: 'SettlementOfferDte1',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            JudgementSat: {
                table: 'CaseInfo',
                column: 'JudgementSat',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            LTAAssginedTo: {
                table: 'CaseInfo',
                column: 'LTAAssginedTo',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            InjuctiveRelief: {
                table: 'CaseInfo',
                column: 'InjuctiveRelief',
                identifier: opportunityId,
                key: 'OpportunityId',
            },






        }
    }

    initForm(fb: FormBuilder): FormGroup {

        const form = fb.group({
            Party1Co: fb.control(''),
            Party1Name: fb.control(''),
            Party1direct: fb.control(''),
            Party1phone: fb.control(''),
            Party1mobile: fb.control(''),
            Party1fax: fb.control(''),
            Party1misc1: fb.control(''),
            Party1address: fb.control(''),
            Party1city: fb.control(''),
            Party1state: fb.control(''),
            Party1zip: fb.control(''),
            Party1misc2: fb.control(''),
            PlaintiffPhoneAcquire: fb.control(''),
            CRED1PROOF: fb.control(''),
            InitialDemand: fb.control(''),
            InitialDemandDate: fb.control(''),
            InitialOffer: fb.control(''),
            InitialOfferDate: fb.control(''),
            CounterSettl: fb.control(''),
            CounterSettlDate: fb.control(''),
            ProposedSettl: fb.control(''),
            PROPOSEDSETTLDATE: fb.control(''),
            FinalAgreedSettlement: fb.control(''),
            FinalAgreedSettlementDate: fb.control(''),
            ClientMoPmt9: fb.control(''),
            ClientMoPaid10: fb.control(''),
            ClientMoPaid11: fb.control(''),
            Settled_20: fb.control(''),
            Step16Completed: fb.control(''),
            JudgementDate: fb.control(''),
            JudgementType: fb.control(''),
            JudgementSettle: fb.control(''),
            FinalSettlementDate: fb.control(''),
            SettlementType1: fb.control(''),
            CourtName: fb.control(''),
            CourtDocket: fb.control(''),
            SettlementType2: fb.control(''),
            civilpenalties: fb.control(''),
            GrossRevTotal: fb.control(''),
            OtherPmts: fb.control(''),
            OtherPaymentMemo: fb.control(''),
            SettlementOfferDte1: fb.control(''),
            JudgementSat: fb.control(''),
            LTAAssginedTo: fb.control(''),
            InjuctiveRelief: fb.control(''),



        }, { updateOn: 'blur' });
        return form;
    }


    setFormValues(form: FormGroup, data: any, service: OpportunityService) {
        form.setValue({
            Party1Co: getNullableDataValue(data.Party1Co, ''),
            Party1Name: getNullableDataValue(data.Party1Name, ''),
            Party1direct: getNullableDataValue(data.Party1direct, ''),
            Party1phone: getNullableDataValue(data.Party1phone, ''),
            Party1mobile: getNullableDataValue(data.Party1mobile, ''),
            Party1fax: getNullableDataValue(data.Party1fax, ''),
            Party1misc1: getNullableDataValue(data.Party1misc1, ''),
            Party1address: getNullableDataValue(data.Party1address, ''),
            Party1city: getNullableDataValue(data.Party1city, ''),
            Party1state: getNullableDataValue(data.Party1state, ''),
            Party1zip: getNullableDataValue(data.Party1zip, ''),
            Party1misc2: getNullableDataValue(data.Party1misc2, ''),
            PlaintiffPhoneAcquire: getNullableDataValue(data.PlaintiffPhoneAcquire, ''),
            CRED1PROOF: getNullableDataValue(data.CRED1PROOF, ''),
            InitialDemand: getNullableDataValue(data.InitialDemand, ''),
            InitialDemandDate: getNullableDataValue(data.InitialDemandDate, ''),
            InitialOffer: getNullableDataValue(data.InitialOffer, ''),
            InitialOfferDate: getNullableDataValue(data.InitialOfferDate, ''),
            CounterSettl: getNullableDataValue(data.CounterSettl, ''),
            CounterSettlDate: getNullableDataValue(data.CounterSettlDate, ''),
            ProposedSettl: getNullableDataValue(data.ProposedSettl, ''),
            PROPOSEDSETTLDATE: getNullableDataValue(data.PROPOSEDSETTLDATE, ''),
            FinalAgreedSettlement: getNullableDataValue(data.FinalAgreedSettlement, ''),
            FinalAgreedSettlementDate: getNullableDataValue(data.FinalAgreedSettlementDate, ''),
            ClientMoPmt9: getNullableDataValue(data.ClientMoPmt9, ''),
            ClientMoPaid10: getNullableDataValue(data.ClientMoPaid10, ''),
            ClientMoPaid11: getNullableDataValue(data.ClientMoPaid11, ''),
            Settled_20: getNullableDataValue(data.Settled_20, ''),
            Step16Completed: getNullableDataValue(data.Step16Completed, ''),
            JudgementDate: getNullableDataValue(data.JudgmentDate, ''),
            JudgementType: getNullableDataValue(data.JudgementType, ''),
            JudgementSettle: getNullableDataValue(data.JudgmentSettle, ''),
            FinalSettlementDate: getNullableDataValue(data.FinalSettlementDate, ''),
            SettlementType1: getNullableDataValue(data.SettlementType1, ''),
            CourtName: getNullableDataValue(data.CourtName, ''),
            CourtDocket: getNullableDataValue(data.CourtDocket, ''),
            SettlementType2: getNullableDataValue(data.SettlementType2, ''),
            civilpenalties: getNullableDataValue(data.civilpenalties, ''),
            GrossRevTotal: getNullableDataValue(data.GrossRevTotal, ''),
            OtherPmts: getNullableDataValue(data.OtherPmts, ''),
            OtherPaymentMemo: getNullableDataValue(data.OtherPaymentMemo, ''),
            SettlementOfferDte1: getNullableDataValue(data.SettlementOfferDte1, ''),
            JudgementSat: getNullableDataValue(data.JudgementSat, ''),
            LTAAssginedTo: getNullableDataValue(data.LTAAssginedTo, ''),
            InjuctiveRelief: getNullableDataValue(data.InjuctiveRelief, ''),






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
