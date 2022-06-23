import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../../../../../../@core/backend/common/services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { getNullableDataValue, getNullableDateValue } from '../../../../../../../@core/utils/helpers';
import { OpportunityService } from '../../../../../../../@core/backend/common/services/opportunity.service';
import { takeUntil } from 'rxjs/operators';
import { CustomValidator } from '../../../../../../../@core/backend/common/services/validation.service';

@Component({
    selector: 'ngx-pi-lam',
    templateUrl: './pi-lam.component.html',
    styleUrls: ['./pi-lam.component.scss'],
})
export class PiLamTabComponent implements OnInit {
    protected readonly unsubscribe$ = new Subject<void>();
    data: Observable<any>;
    form: FormGroup;
    private role: string | string[] = [];
    @Input() service: OpportunityService;
    @Input() id: string;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.initForm(this.fb);
        this.data = this.service.getPersonalInjuryLawAndMotion(this.id).pipe(takeUntil(this.unsubscribe$));
        this.data.subscribe(d => {
            this.setFormValues(this.form, d, this.service);
        })
    }

    private setIntakeFormData(opportunityId: String) {
        return {
            Interview1: {
                table: 'CaseInfo',
                column: 'Interview1',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            ConOrder1: {
                table: 'TransTracking',
                column: 'ConOrder1',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            ConOrder2: {
                table: 'TransTracking',
                column: 'ConOrder2',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            ComplaintServed: {
                table: 'ADA',
                column: 'ComplaintServed',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            AnswerDeadline: {
                table: 'ADA',
                column: 'AnswerDeadline',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            AnswerD2: {
                table: 'ADA',
                column: 'AnswerD2',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            ConOrder3: {
                table: 'TransTracking',
                column: 'ConOrder3',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            TypeServe1: {
                table: 'Law',
                column: 'TypeServe1',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            ClientRecvd10: {
                table: 'Tracking',
                column: 'ClientRecvd10',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            TypeServe2: {
                table: 'Law',
                column: 'TypeServe2',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            ProceedDefault: {
                table: 'Law',
                column: 'ProceedDefault',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            PTRTask5: {
                table: 'ADA',
                column: 'PTRTask5',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            PMTProof1: {
                table: 'Law',
                column: 'PMTProof1',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            MSCConfirmType: {
                table: 'Law',
                column: 'MSCConfirmType',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            PreInterview6: {
                table: 'CaseInfo',
                column: 'PreInterview6',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            ClientApprovalResponse: {
                table: 'Tracking',
                column: 'ClientApprovalResponse',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Conord_16: {
                table: 'TransTracking',
                column: 'Conord_16',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Conord_17: {
                table: 'TransTracking',
                column: 'Conord_17',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Step3Completed: {
                table: 'Tracking',
                column: 'Step3Completed',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            ServiceType4: {
                table: 'Law',
                column: 'ServiceType4',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Conord_18: {
                table: 'TransTracking',
                column: 'Conord_18',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Conord_19: {
                table: 'TransTracking',
                column: 'Conord_19',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Step4Completed: {
                table: 'Tracking',
                column: 'Step4Completed',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            ServiceType3: {
                table: 'Law',
                column: 'ServiceType3',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Conord_10: {
                table: 'TransTracking',
                column: 'Conord_10',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Conord_11: {
                table: 'TransTracking',
                column: 'Conord_11',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Conord_13: {
                table: 'TransTracking',
                column: 'Conord_13',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Step1Completed: {
                table: 'Tracking',
                column: 'Step1Completed',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            ServiceType2: {
                table: 'Law',
                column: 'ServiceType2',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Conreceived16: {
                table: 'TransTracking',
                column: 'Conreceived16',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Conreceived17: {
                table: 'TransTracking',
                column: 'Conreceived17',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Conord_14: {
                table: 'TransTracking',
                column: 'Conord_14',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Conord_15: {
                table: 'TransTracking',
                column: 'Conord_15',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Step2Completed: {
                table: 'Tracking',
                column: 'Step2Completed',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Conreceived18: {
                table: 'TransTracking',
                column: 'Conreceived18',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CMSDue: {
                table: 'CaseInfo',
                column: 'CMSDue',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Conf_15: {
                table: 'CaseInfo',
                column: 'Conf_15',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CMSHearing: {
                table: 'CaseInfo',
                column: 'CMSHearing',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            OSCHearingDate: {
                table: 'CaseInfo',
                column: 'OSCHearingDate',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            RegXrecvd1: {
                table: 'Law',
                column: 'RegXrecvd1',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Brief1: {
                table: 'CaseInfo',
                column: 'Brief1',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            RegXrecvd2: {
                table: 'Law',
                column: 'RegXrecvd2',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            SubStatus65: {
                table: 'TransTracking',
                column: 'SubStatus65',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Step9Completed: {
                table: 'Tracking',
                column: 'Step9Completed',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DispoMotionCutoff: {
                table: 'CaseInfo',
                column: 'DispoMotionCutoff',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            FinalPreTrial: {
                table: 'CaseInfo',
                column: 'FinalPreTrial',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            HearingDate: {
                table: 'CaseInfo',
                column: 'HearingDate',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            NoticeSettleB: {
                table: 'CaseInfo',
                column: 'NoticeSettleB',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            NoticeSettleDate: {
                table: 'CaseInfo',
                column: 'NoticeSettleDate',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            SalesFollow3: {
                table: 'SalesStage',
                column: 'SalesFollow3',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DismissalNotice: {
                table: 'CaseInfo',
                column: 'DismissalNotice',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DismissalNoticeDate: {
                table: 'CaseInfo',
                column: 'DismissalNoticeDate',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            FedJudge: {
                table: 'CaseInfo',
                column: 'FedJudge',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CourtJudgeName: {
                table: 'CaseInfo',
                column: 'CourtJudgeName',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            FedJudgeID: {
                table: 'CaseInfo',
                column: 'FedJudgeID',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CourtName: {
                table: 'CaseInfo',
                column: 'CourtName',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CourtCaseNumber: {
                table: 'CaseInfo',
                column: 'CourtCaseNumber',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CaseDivision: {
                table: 'CaseInfo',
                column: 'CaseDivision',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            CourtPhone: {
                table: 'CaseInfo',
                column: 'CourtPhone',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            JudgeEmail: {
                table: 'CaseInfo',
                column: 'JudgeEmail',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            RemovedToFedCourt: {
                table: 'CaseInfo',
                column: 'RemovedToFedCourt',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1misc1: {
                table: 'PartiesInvolved',
                column: 'Party1misc1',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1Co: {
                table: 'PartiesInvolved',
                column: 'Party1Co',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1Name: {
                table: 'PartiesInvolved',
                column: 'Party1Name',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1direct: {
                table: 'PartiesInvolved',
                column: 'Party1direct',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1phone: {
                table: 'PartiesInvolved',
                column: 'Party1phone',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1mobile: {
                table: 'PartiesInvolved',
                column: 'Party1mobile',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1fax: {
                table: 'PartiesInvolved',
                column: 'Party1fax',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1email: {
                table: 'PartiesInvolved',
                column: 'Party1email',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1address: {
                table: 'PartiesInvolved',
                column: 'Party1address',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1city: {
                table: 'PartiesInvolved',
                column: 'Party1city',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1state: {
                table: 'PartiesInvolved',
                column: 'Party1state',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party1zip: {
                table: 'PartiesInvolved',
                column: 'Party1zip',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party2misc1: {
                table: 'PartiesInvolved',
                column: 'Party2misc1',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party2Co: {
                table: 'PartiesInvolved',
                column: 'Party2Co',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party2Name: {
                table: 'PartiesInvolved',
                column: 'Party2Name',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party2direct: {
                table: 'PartiesInvolved',
                column: 'Party2direct',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party2phone: {
                table: 'PartiesInvolved',
                column: 'Party2phone',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party2mobile: {
                table: 'PartiesInvolved',
                column: 'Party2mobile',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party2fax: {
                table: 'PartiesInvolved',
                column: 'Party2fax',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party2email: {
                table: 'PartiesInvolved',
                column: 'Party2email',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party2address: {
                table: 'PartiesInvolved',
                column: 'Party2address',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party2city: {
                table: 'PartiesInvolved',
                column: 'Party2city',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party2state: {
                table: 'PartiesInvolved',
                column: 'Party2state',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Party2zip: {
                table: 'PartiesInvolved',
                column: 'Party2zip',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DepoDate: {
                table: 'CaseInfo',
                column: 'DepoDate',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DepoAssignedTo: {
                table: 'CaseInfo',
                column: 'DepoAssignedTo',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DepoAssigned5: {
                table: 'CaseInfo',
                column: 'DepoAssigned5',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DepoDate2: {
                table: 'CaseInfo',
                column: 'DepoDate2',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DepoDate3: {
                table: 'CaseInfo',
                column: 'DepoDate3',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DepoAssigned2: {
                table: 'CaseInfo',
                column: 'DepoAssigned2',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DepoAssigned3: {
                table: 'CaseInfo',
                column: 'DepoAssigned3',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DepoCompleted2: {
                table: 'CaseInfo',
                column: 'DepoCompleted2',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DepoCompleted3: {
                table: 'CaseInfo',
                column: 'DepoCompleted3',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DepoDate4: {
                table: 'CaseInfo',
                column: 'DepoDate4',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DepoAssigned4: {
                table: 'CaseInfo',
                column: 'DepoAssigned4',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            DepoCompleted4: {
                table: 'CaseInfo',
                column: 'DepoCompleted4',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            AttorneyStatusNotes: {
                table: 'AttorneyUpdate',
                column: 'AttorneyStatusNotes',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            HearingNotes: {
                table: 'Law',
                column: 'HearingNotes',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            TentativeNotes: {
                table: 'Law',
                column: 'TentativeNotes',
                identifier: opportunityId,
                key: 'OpportunityId',
            },






        }
    }

    initForm(fb: FormBuilder): FormGroup {

        const form = fb.group({
            TentativeNotes: fb.control(''),
            Interview1: fb.control(''),
            ConOrder1: fb.control(''),
            ConOrder2: fb.control(''),
            ComplaintServed: fb.control(''),
            AnswerDeadline: fb.control(''),
            AnswerD2: fb.control(''),
            ConOrder3: fb.control(''),
            TypeServe1: fb.control(''),
            ClientRecvd10: fb.control(''),
            TypeServe2: fb.control(''),
            ProceedDefault: fb.control(''),
            PTRTask5: fb.control(''),
            PMTProof1: fb.control(''),
            MSCConfirmType: fb.control(''),
            PreInterview6: fb.control(''),
            ClientApprovalResponse: fb.control(''),
            Conord_16: fb.control(''),
            Conord_17: fb.control(''),
            Step3Completed: fb.control(''),
            ServiceType4: fb.control(''),
            Conord_18: fb.control(''),
            Conord_19: fb.control(''),
            Step4Completed: fb.control(''),
            ServiceType3: fb.control(''),
            Conord_10: fb.control(''),
            Conord_11: fb.control(''),
            Conord_13: fb.control(''),
            Step1Completed: fb.control(''),
            ServiceType2: fb.control(''),
            Conreceived16: fb.control(''),
            Conreceived17: fb.control(''),
            Conord_14: fb.control(''),
            Conord_15: fb.control(''),
            Step2Completed: fb.control(''),
            Conreceived18: fb.control(''),
            CMSDue: fb.control(''),
            Conf_15: fb.control(''),
            CMSHearing: fb.control(''),
            OSCHearingDate: fb.control(''),
            RegXrecvd1: fb.control(''),
            Brief1: fb.control(''),
            RegXrecvd2: fb.control(''),
            SubStatus65: fb.control(''),
            Step9Completed: fb.control(''),
            DispoMotionCutoff: fb.control(''),
            FinalPreTrial: fb.control(''),
            HearingDate: fb.control(''),
            NoticeSettleB: fb.control(''),
            NoticeSettleDate: fb.control(''),
            SalesFollow3: fb.control(''),
            DismissalNotice: fb.control(''),
            DismissalNoticeGB: fb.control(''),
            DismissalNoticeDate: fb.control(''),
            FedJudge: fb.control(''),
            CourtJudgeName: fb.control(''),
            FedJudgeID: fb.control(''),
            CourtName: fb.control(''),
            CourtCaseNumber: fb.control(''),
            CaseDivision: fb.control(''),
            CourtPhone: fb.control(''),
            JudgeEmail: fb.control(''),
            RemovedToFedCourt: fb.control(''),
            Party1misc1: fb.control(''),
            Party1Co: fb.control(''),
            Party1Name: fb.control(''),
            Party1direct: fb.control(''),
            Party1phone: fb.control(''),
            Party1mobile: fb.control(''),
            Party1fax: fb.control(''),
            Party1email: fb.control(''),
            Party1address: fb.control(''),
            Party1city: fb.control(''),
            Party1state: fb.control(''),
            Party1zip: fb.control(''),
            Party2misc1: fb.control(''),
            Party2Co: fb.control(''),
            Party2Name: fb.control(''),
            Party2direct: fb.control(''),
            Party2phone: fb.control(''),
            Party2mobile: fb.control(''),
            Party2fax: fb.control(''),
            Party2email: fb.control(''),
            Party2address: fb.control(''),
            Party2city: fb.control(''),
            Party2state: fb.control(''),
            Party2zip: fb.control(''),
            DepoDate: fb.control(''),
            DepoAssignedTo: fb.control(''),
            DepoAssigned5: fb.control(''),
            DepoDate2: fb.control(''),
            DepoDate3: fb.control(''),
            DepoAssigned2: fb.control(''),
            DepoAssigned3: fb.control(''),
            DepoCompleted2: fb.control(''),
            DepoCompleted3: fb.control(''),
            DepoDate4: fb.control(''),
            DepoAssigned4: fb.control(''),
            DepoCompleted4: fb.control(''),
            AttorneyStatusNotes: fb.control(''),
            HearingNotes: fb.control(''),







        }, { updateOn: 'blur' });
        return form;
    }


    setFormValues(form: FormGroup, data: any, service: OpportunityService) {
        form.setValue({
            TentativeNotes: getNullableDataValue(data.TentativeNotes, ''),
            Interview1: getNullableDateValue(data.Interview1, ''),
            ConOrder1: getNullableDateValue(data.ConOrder1, ''),
            ConOrder2: getNullableDateValue(data.ConOrder2, ''),
            ComplaintServed: getNullableDateValue(data.ComplaintServed, ''),
            AnswerDeadline: getNullableDateValue(data.AnswerDeadline, ''),
            AnswerD2: getNullableDateValue(data.AnswerD2, ''),
            ConOrder3: getNullableDateValue(data.ConOrder3, ''),
            TypeServe1: getNullableDataValue(data.TypeServe1, ''),
            ClientRecvd10: getNullableDateValue(data.ClientRecvd10, ''),
            TypeServe2: getNullableDateValue(data.TypeServe2, ''),
            ProceedDefault: getNullableDateValue(data.ProceedDefault, ''),
            PTRTask5: getNullableDateValue(data.PTRTask5, ''),
            PMTProof1: getNullableDateValue(data.PMTProof1, ''),
            MSCConfirmType: getNullableDateValue(data.MSCConfirmType, ''),
            PreInterview6: getNullableDateValue(data.PreInterview6, ''),
            ClientApprovalResponse: getNullableDateValue(data.ClientApprovalResponse, ''),
            Conord_16: getNullableDateValue(data.Conord_16, ''),
            Conord_17: getNullableDateValue(data.Conord_17, ''),
            Step3Completed: getNullableDateValue(data.Step3Completed, ''),
            ServiceType4: getNullableDateValue(data.ServiceType4, ''),
            Conord_18: getNullableDateValue(data.Conord_18, ''),
            Conord_19: getNullableDateValue(data.Conord_19, ''),
            Step4Completed: getNullableDateValue(data.Step4Completed, ''),
            ServiceType3: getNullableDateValue(data.ServiceType3, ''),
            Conord_10: getNullableDateValue(data.Conord_10, ''),
            Conord_11: getNullableDateValue(data.Conord_11, ''),
            Conord_13: getNullableDateValue(data.Conord_13, ''),
            Step1Completed: getNullableDateValue(data.Step1Completed, ''),
            ServiceType2: getNullableDateValue(data.ServiceType2, ''),
            Conreceived16: getNullableDateValue(data.Conreceived16, ''),
            Conreceived17: getNullableDateValue(data.Conreceived17, ''),
            Conord_14: getNullableDateValue(data.Conord_14, ''),
            Conord_15: getNullableDateValue(data.Conord_15, ''),
            Step2Completed: getNullableDateValue(data.Step2Completed, ''),
            Conreceived18: getNullableDateValue(data.Conreceived18, ''),
            CMSDue: getNullableDateValue(data.CMSDue, ''),
            Conf_15: getNullableDateValue(data.Conf_15, ''),
            CMSHearing: getNullableDateValue(data.CMSHearing, ''),
            OSCHearingDate: getNullableDateValue(data.OSCHearingDate, ''),
            RegXrecvd1: getNullableDateValue(data.RegXrecvd1, ''),
            Brief1: getNullableDateValue(data.Brief1, ''),
            RegXrecvd2: getNullableDateValue(data.RegXrecvd2, ''),
            SubStatus65: getNullableDateValue(data.SubStatus65, ''),
            Step9Completed: getNullableDateValue(data.Step9Completed, ''),
            DispoMotionCutoff: getNullableDateValue(data.DispoMotionCutoff, ''),
            FinalPreTrial: getNullableDateValue(data.FinalPreTrial, ''),
            HearingDate: getNullableDateValue(data.HearingDate, ''),
            NoticeSettleB: getNullableDateValue(data.NoticeSettleB, ''),
            NoticeSettleDate: getNullableDateValue(data.NoticeSettleDate, ''),
            SalesFollow3: getNullableDateValue(data.SalesFollow3, ''),
            DismissalNotice: getNullableDateValue(data.DismissalNotice, ''),
            DismissalNoticeGB: getNullableDateValue(data.DismissalNoticeGB, ''),
            DismissalNoticeDate: getNullableDateValue(data.DismissalNoticeDate, ''),
            FedJudge: getNullableDateValue(data.FedJudge, ''),
            CourtJudgeName: getNullableDateValue(data.CourtJudgeName, ''),
            FedJudgeID: getNullableDateValue(data.FedJudgeID, ''),
            CourtName: getNullableDateValue(data.CourtName, ''),
            CourtCaseNumber: getNullableDateValue(data.CourtCaseNumber, ''),
            CaseDivision: getNullableDateValue(data.CaseDivision, ''),
            CourtPhone: getNullableDateValue(data.CourtPhone, ''),
            JudgeEmail: getNullableDateValue(data.JudgeEmail, ''),
            RemovedToFedCourt: getNullableDateValue(data.RemovedToFedCourt, ''),
            Party1misc1: getNullableDateValue(data.Party1misc1, ''),
            Party1Co: getNullableDateValue(data.Party1Co, ''),
            Party1Name: getNullableDateValue(data.Party1Name, ''),
            Party1direct: getNullableDateValue(data.Party1direct, ''),
            Party1phone: getNullableDateValue(data.Party1phone, ''),
            Party1mobile: getNullableDateValue(data.Party1mobile, ''),
            Party1fax: getNullableDateValue(data.Party1fax, ''),
            Party1email: getNullableDateValue(data.Party1email, ''),
            Party1address: getNullableDateValue(data.Party1address, ''),
            Party1city: getNullableDateValue(data.Party1city, ''),
            Party1state: getNullableDateValue(data.Party1state, ''),
            Party1zip: getNullableDateValue(data.Party1zip, ''),
            Party2misc1: getNullableDateValue(data.Party2misc1, ''),
            Party2Co: getNullableDateValue(data.Party2Co, ''),
            Party2Name: getNullableDateValue(data.Party2Name, ''),
            Party2direct: getNullableDateValue(data.Party2direct, ''),
            Party2phone: getNullableDateValue(data.Party2phone, ''),
            Party2mobile: getNullableDateValue(data.Party2mobile, ''),
            Party2fax: getNullableDateValue(data.Party2fax, ''),
            Party2email: getNullableDateValue(data.Party2email, ''),
            Party2address: getNullableDateValue(data.Party2address, ''),
            Party2city: getNullableDateValue(data.Party2city, ''),
            Party2state: getNullableDateValue(data.Party2state, ''),
            Party2zip: getNullableDateValue(data.Party2zip, ''),
            DepoDate: getNullableDateValue(data.DepoDate, ''),
            DepoAssignedTo: getNullableDateValue(data.DepoAssignedTo, ''),
            DepoAssigned5: getNullableDateValue(data.DepoAssigned5, ''),
            DepoDate2: getNullableDateValue(data.DepoDate2, ''),
            DepoDate3: getNullableDateValue(data.DepoDate3, ''),
            DepoAssigned2: getNullableDateValue(data.DepoAssigned2, ''),
            DepoAssigned3: getNullableDateValue(data.DepoAssigned3, ''),
            DepoCompleted2: getNullableDateValue(data.DepoCompleted2, ''),
            DepoCompleted3: getNullableDateValue(data.DepoCompleted3, ''),
            DepoDate4: getNullableDateValue(data.DepoDate4, ''),
            DepoAssigned4: getNullableDateValue(data.DepoAssigned4, ''),
            DepoCompleted4: getNullableDateValue(data.DepoCompleted4, ''),
            AttorneyStatusNotes: getNullableDateValue(data.AttorneyStatusNotes, ''),
            HearingNotes: getNullableDateValue(data.HearingNotes, ''),






        });

        this.pushFormValues(form, data, service);
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
