import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { getNullableDataValue, getNullableDateValue } from '../../../../../../../@core/utils/helpers';
import { OpportunityService } from '../../../../../../../@core/backend/common/services/opportunity.service';
import { takeUntil } from 'rxjs/operators';
import { CustomValidator } from '../../../../../../../@core/backend/common/services/validation.service';

@Component({
  selector: 'ngx-app-adafields-tab',
  templateUrl: './adafields-tab.component.html',
  styleUrls: ['./adafields-tab.component.scss'],
})
export class ADALamFieldTabComponent implements OnInit {
  protected readonly unsubscribe$ = new Subject<void>();
  data: Observable<any>;
  form: FormGroup;
  @Input() service: OpportunityService;
  @Input() id: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.initForm(this.fb);
    this.data = this.service.getAdaLawAndMotion(this.id).pipe(takeUntil(this.unsubscribe$));
    this.data.subscribe(d => {
      this.setFormValues(this.form, d, this.service);
    })
  }

  private initForm(fb: FormBuilder): FormGroup {

    const form = fb.group({
      Conf15: fb.control(''),
      RegXdue4: fb.control(''),
      ProcessM3: fb.control(''),
      misc2disc: fb.control(''),
      ClientDoc9: fb.control(''),
      Cred1DueDay: fb.control(''),
      AmendComplaintB: fb.control(''),
      DoeDefendentStatus: fb.control(''),
      dbtoffer6: fb.control(''),
      CONORDER1: fb.control(''),
      CREDITORDER: fb.control(''),
      ConOrder2: fb.control(''),
      NtcofAckSent: fb.control(''),
      NtcAckIssueType: fb.control(''),
      ComplaintServed: fb.control(''),
      ServiceType: fb.control(''),
      ProcessM1: fb.control(''),
      AnswerDeadline: fb.control(''),
      AnswerD2: fb.control(''),
      AnswerD3: fb.control(''),
      AnswerD4: fb.control(''),
      DoeDefendent: fb.control(''),
      DoeDef: fb.control(''),
      DoeConfCopy: fb.control(''),
      DoeServed: fb.control(''),
      DoeDismiss: fb.control(''),
      AmendComplaint: fb.control(''),
      FACfiled: fb.control(''),
      Conord_20: fb.control(''),
      FACServerd: fb.control(''),
      TCPA_Method: fb.control(''),
      ProcessM2: fb.control(''),
      NewDefAnswerDead: fb.control(''),
      ConOrder3: fb.control(''),
      RegX1: fb.control(''),
      ClientRecvd10: fb.control(''),
      RegX2: fb.control(''),
      MotionReopen: fb.control(''),
      ProceedDefault: fb.control(''),
      ConOrder4: fb.control(''),
      PMTProof1: fb.control(''),
      ClientRecvd8: fb.control(''),
      ClientRecvd9: fb.control(''),
      OSC_POSdefault: fb.control(''),
      Rework1: fb.control(''),
      SuspendedReason: fb.control(''),
      Settled_15: fb.control(''),
      dbtaccepted9: fb.control(''),
      dbtaccepted8: fb.control(''),
      dbtaccepted7: fb.control(''),
      Settled_16: fb.control(''),
      JudgementDate: fb.control(''),
      SLCurrentDuty: fb.control(''),
      Cred2Zip: fb.control(''),
      JudgementSat: fb.control(''),
      CHGMoPMT: fb.control(''),
      reviewNeeded: fb.control(''),
      BKStatus2: fb.control(''),
      ForeclosureDate2: fb.control(''),
      ForeclosureDate3: fb.control(''),
      Step7Completed: fb.control(''),
      CCDAComplaintdraft: fb.control(''),
      ClientRecvd5: fb.control(''),
      TypeServe2: fb.control(''),
      PMTProof2: fb.control(''),
      ClientRecvd4: fb.control(''),
      DissmissalID: fb.control(''),
      OSCReplyDue: fb.control(''),
      OSCCompleted: fb.control(''),
      OSCReplyAssigned: fb.control(''),
      Conord_10: fb.control(''),
      Conord_11: fb.control(''),
      Conord_13: fb.control(''),
      Step1Completed: fb.control(''),
      DiscoveryRecCompleted: fb.control(''),
      AdaDate1: fb.control(''),
      AdaDate2: fb.control(''),
      AdaDate3: fb.control(''),
      AdaDate4: fb.control(''),
      AdaDate5: fb.control(''),
      Conord_14: fb.control(''),
      Conord_15: fb.control(''),
      Step2Completed: fb.control(''),
      DiscoveryRecDue: fb.control(''),
      dbtoffer7: fb.control(''),
      AdaDate6: fb.control(''),
      AdaDate7: fb.control(''),
      AdaDate8: fb.control(''),
      AdaDate9: fb.control(''),
      AdaDate: fb.control(''),
      Conord_16: fb.control(''),
      Conord_17: fb.control(''),
      Step3Completed: fb.control(''),
      ServiceType3: fb.control(''),
      Conord18: fb.control(''),
      Conord19: fb.control(''),
      Step4Completed: fb.control(''),
      ServiceType4: fb.control(''),
      FlaggedforReview: fb.control(''),
      MSJInitiate: fb.control(''),
      LORSent11: fb.control(''),
      MSJDrafted: fb.control(''),
      MSJCompleted: fb.control(''),
      MSJOppDue: fb.control(''),
      MCDue: fb.control(''),
      CMCCompleted: fb.control(''),
      CMSDue: fb.control(''),
      Conf_15: fb.control(''),
      CMSHearing: fb.control(''),
      OSCHearingDate: fb.control(''),
      RegXrecvd1: fb.control(''),
      PTRDate5: fb.control(''),
      MSCComplated: fb.control(''),
      Brief1: fb.control(''),
      Conf_14: fb.control(''),
      ASRRequest: fb.control(''),
      NoticeSettlFiled: fb.control(''),
      RegXrecvd2: fb.control(''),
      misc1disc: fb.control(''),
      RegXsent8: fb.control(''),
      RegXrecvd3: fb.control(''),
      RegXrecvd4: fb.control(''),
      StandingOrder: fb.control(''),
      DeclarationFiled: fb.control(''),
      Settled_14: fb.control(''),
      SubStatus65: fb.control(''),
      QWRsent2: fb.control(''),
      ECC1: fb.control(''),
      ECC2: fb.control(''),
      ECC3: fb.control(''),
      RefXdue4: fb.control(''),
      CaseRcvdClient: fb.control(''),
      ConDueBy_14: fb.control(''),
      ExpertDesig: fb.control(''),
      ExpertRebut: fb.control(''),
      LORSent20: fb.control(''),
      LORSent19: fb.control(''),
      LORSent18: fb.control(''),
      LORSent17: fb.control(''),
      Step9Completed: fb.control(''),
      SalesFollow3: fb.control(''),
      FinalPreTrial: fb.control(''),
      HearingDate: fb.control(''),
      SettleType20: fb.control(''),
      PreInterview1: fb.control(''),
      PreInterview2: fb.control(''),
      PreInterview3: fb.control(''),
      SettleType17: fb.control(''),
      PreInterview4: fb.control(''),
      PreInterview5: fb.control(''),
      PreInterview6: fb.control(''),
      NoticeSettle: fb.control(''),
      SettleType14: fb.control(''),
      NoticeSettleDate: fb.control(''),
      date1: fb.control(''),
      DispoMotionCutoff: fb.control(''),
      DismissalNotice: fb.control(''),
      SettleType15: fb.control(''),
      DismissalNoticeDate: fb.control(''),
      date2: fb.control(''),
      MotionReopen2: fb.control(''),


    }, { updateOn: 'blur' });
    return form;
  }

  private setIntakeFormData(opportunityId: String) {
    /*
      formName: {
        table: 'TableName',
        column: 'FieldName',
        identifier: 'parameter' in this case opportunityId,
        key: 'FieldName of Parameter',
      },
    */

    return {
      MotionReopen2: {
        table: 'Law',
        column: 'MotionReopen2',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      reviewNeeded: {
        table: 'PropertyInfo',
        column: 'ForeclosureDate1',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Conf15: {
        table: 'CaseInfo',
        column: 'Conf15',
        identifier: opportunityId,
        key: 'OpportunityId',
      },

      CONORDER1: {
        table: 'TransTracking',
        column: 'CONORDER1',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      CREDITORDER: {
        table: 'DebtorInfo',
        column: 'CREDITORDER',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      CONORDER2: {
        table: 'TransTracking',
        column: 'CONORDER2',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      NtcofAckSent: {
        table: 'ADA',
        column: 'NtcofAckSent',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      TCPA_Method: {
        table: 'Law',
        column: 'TCPA_Method',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      NtcAckIssueType: {
        table: 'ADA',
        column: 'NtcAckIssueType',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      ComplaintServed: {
        table: 'ADA',
        column: 'ComplaintServed',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      ServiceType: {
        table: 'Law',
        column: 'ServiceType',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      ProcessM1: {
        table: 'CaseInfo',
        column: 'ProcessM1',
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
      AnswerD3: {
        table: 'ADA',
        column: 'AnswerD3',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      AnswerD4: {
        table: 'ADA',
        column: 'AnswerD4',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      DoeDefendent: {
        table: 'ADA',
        column: 'DoeDefendent',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      DoeDefendentStatus: {
        table: 'ADA',
        column: 'DoeDefendentStatus',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      DoeDef: {
        table: 'CaseInfo',
        column: 'DoeDef',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      DoeConfCopy: {
        table: 'CaseInfo',
        column: 'DoeConfCopy',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      DoeServed: {
        table: 'CaseInfo',
        column: 'DoeServed',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      DoeDismiss: {
        table: 'CaseInfo',
        column: 'DoeDismiss',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      AmendComplaint: {
        table: 'Law',
        column: 'AmendComplaint',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      AmendComplaintB: {
        table: 'Law',
        column: 'AmendComplaintB',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      FACfiled: {
        table: 'ADA',
        column: 'FACfiled',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Cred1DueDay: {
        table: 'Law',
        column: 'Cred1DueDay',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      Conord_20: {
        table: 'TransTracking',
        column: 'Conord_20',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      FACserverd: {
        table: 'ADA',
        column: 'FACserverd',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ProcessM2: {
        table: 'CaseInfo',
        column: 'ProcessM2',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      NewDefAnswerDead: {
        table: 'ADA',
        column: 'NewDefAnswerDead',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ConOrder3: {
        table: 'TransTracking',
        column: 'ConOrder3',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      RegX1: {
        table: 'Law',
        column: 'RegX1',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ClientRecvd10: {
        table: 'Tracking',
        column: 'ClientRecvd10',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      RegX2: {
        table: 'Law',
        column: 'RegX2',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      MotionReopen: {
        table: 'Law',
        column: 'MotionReopen',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ProceedDefault: {
        table: 'Law',
        column: 'ProceedDefault',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ClientDoc9: {
        table: 'Tracking',
        column: 'ClientDoc9',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ConOrder4: {
        table: 'TransTracking',
        column: 'ConOrder4',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      PMTProof1: {
        table: 'Law',
        column: 'PMTProof1',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ClientRecvd8: {
        table: 'Tracking',
        column: 'ClientRecvd8',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ClientRecvd9: {
        table: 'Tracking',
        column: 'ClientRecvd9',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      OSC_POSdefault: {
        table: 'CaseInfo',
        column: 'OSC_POSdefault',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      Rework1: {
        table: 'CaseInfo',
        column: 'Rework1',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      SuspendedReason: {
        table: 'Tracking',
        column: 'SuspendedReason',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      Settled_15: {
        table: 'Tracking',
        column: 'Settled_15',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      dbtaccepted9: {
        table: 'DebtorInfo',
        column: 'dbtaccepted9',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      dbtaccepted8: {
        table: 'DebtorInfo',
        column: 'dbtaccepted8',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      misc1disc: {
        table: 'DebtorExpenses',
        column: 'misc1disc',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      dbtaccepted7: {
        table: 'DebtorInfo',
        column: 'dbtaccepted7',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      misc2disc: {
        table: 'DebtorExpenses',
        column: 'misc2disc',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      Settled_16: {
        table: 'Tracking',
        column: 'Settled_16',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      JudgementDate: {
        table: 'CaseInfo',
        column: 'JudgementDate',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ProcessM3: {
        table: 'CaseInfo',
        column: 'ProcessM3',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      SLCurrentDuty: {
        table: 'DebtorExpenses',
        column: 'SLCurrentDuty',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      Cred2Zip: {
        table: 'Law',
        column: 'Cred2Zip',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      JudgementSat: {
        table: 'CaseInfo',
        column: 'JudgementSat',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      CHGMoPMT: {
        table: 'ACH_Banking',
        column: 'CHGMoPMT',
        identifier: opportunityId,
        key: 'OpportunityId',

      },

      /* col2 */

      BKStatus2: {
        table: 'DebtorInfo',
        column: 'BKStatus2',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ForeclosureDate2: {
        table: 'PropertyInfo',
        column: 'ForeclosureDate2',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ForeclosureDate3: {
        table: 'PropertyInfo',
        column: 'ForeclosureDate3',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      Step7Completed: {
        table: 'Tracking',
        column: 'Step7Completed',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      CCDAComplaintdraft: {
        table: 'CaseInfo',
        column: 'CCDAComplaintdraft',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ClientRecvd5: {
        table: 'Tracking',
        column: 'ClientRecvd5',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      TypeServe2: {
        table: 'Law',
        column: 'TypeServe2',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      PMTProof2: {
        table: 'Law',
        column: 'PMTProof2',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ClientRecvd4: {
        table: 'Tracking',
        column: 'ClientRecvd4',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      DissmissalID: {
        table: 'CaseInfo',
        column: 'DissmissalID',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      OSCReplyDue: {
        table: 'CaseInfo',
        column: 'OSCReplyDue',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      OSCCompleted: {
        table: 'CaseInfo',
        column: 'OSCCompleted',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      OSCReplyAssigned: {
        table: 'CaseInfo',
        column: 'OSCReplyAssigned',
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
      DiscoveryRecCompleted: {
        table: 'CaseInfo',
        column: 'DiscoveryRecCompleted',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      dbtoffer6: {
        table: 'DebtorInfo',
        column: 'dbtoffer6',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      AdaDate1: {
        table: 'ADA',
        column: 'AdaDate1',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      AdaDate2: {
        table: 'ADA',
        column: 'AdaDate2',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      AdaDate3: {
        table: 'ADA',
        column: 'AdaDate3',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      AdaDate4: {
        table: 'ADA',
        column: 'AdaDate4',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      AdaDate5: {
        table: 'ADA',
        column: 'AdaDate5',
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
        table: 'CaseInfo',
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
      DiscoveryRecDue: {
        table: 'CaseInfo',
        column: 'DiscoveryRecDue',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      dbtoffer7: {
        table: 'DebtorInfo',
        column: 'dbtoffer7',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      AdaDate6: {
        table: 'ADA',
        column: 'AdaDate6',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      AdaDate7: {
        table: 'ADA',
        column: 'AdaDate7',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      AdaDate8: {
        table: 'ADA',
        column: 'AdaDate8',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      AdaDate9: {
        table: 'ADA',
        column: 'AdaDate9',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      AdaDate: {
        table: 'ADA',
        column: 'AdaDate',
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
      ServiceType3: {
        table: 'Law',
        column: 'ServiceType3',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      Conord_18: {
        table: 'TransTracking',
        column: 'Conord__18',
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
      ServiceType4: {
        table: 'Law',
        column: 'ServiceType4',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      FlaggedforReview: {
        table: 'CaseInfo',
        column: 'FlaggedforReview',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      MSJInitiate: {
        table: 'CaseInfo',
        column: 'MSJInitiate',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      LORSent11: {
        table: 'Compliance',
        column: 'LORSent11',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      MSJDrafted: {
        table: 'CaseInfo',
        column: 'MSJDrafted',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      MSJCompleted: {
        table: 'CaseInfo',
        column: 'MSJCompleted',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      MSJOppDue: {
        table: 'CaseINfo',
        column: 'MSJOppDue',
        identifier: opportunityId,
        key: 'OpportunityId',

      },

      /*col3 start */

      MCDue: {
        table: 'ADA',
        column: 'MCDue',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      CMCCompleted: {
        table: 'CaseInfo',
        column: 'CMCCompleted',
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
      PTRDate5: {
        table: 'ADA',
        column: 'PTRDate5',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      MSCComplated: {
        table: 'CaseInfo',
        column: 'MSCComplated',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      Brief1: {
        table: 'CaseInfo',
        column: 'Brief1',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      Conf_14: {
        table: 'CaseInfo',
        column: 'Conf_14',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ASRRequest: {
        table: 'CaseInfo',
        column: 'ASRRequest',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      RegXrecvd2: {
        table: 'Law',
        column: 'RegXrecvd2',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      NoticeSettlFiled: {
        table: 'ADA',
        column: 'NoticeSettlFiled',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      RegXsent8: {
        table: 'Law',
        column: 'RegXsent8',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      RegXrecvd3: {
        table: 'Law',
        column: 'RegXrecvd3',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      RegXrecvd4: {
        table: 'Law',
        column: 'RegXrecvd4',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      StandingOrder: {
        table: 'ADA',
        column: 'StandingOrder',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      DeclarationFiled: {
        table: 'ADA',
        column: 'DeclarationFiled',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      Settled_14: {
        table: 'Tracking',
        column: 'Settled_14',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      SubStatus65: {
        table: 'TransTracking',
        column: 'SubStatus65',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      QWRsent2: {
        table: 'CaseInfo',
        column: 'QWRsent2',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ECC1: {
        table: 'ADA',
        column: 'ECC1',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ECC2: {
        table: 'ADA',
        column: 'ECC2',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ECC3: {
        table: 'ADA',
        column: 'ECC3',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      RegXdue4: {
        table: 'Law',
        column: 'RefXdue4',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      CaseRcvdClient: {
        table: 'CaseInfo',
        column: 'CaseRcvdClient',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ConDueBy_14: {
        table: 'TransTracking',
        column: 'ConDueBy_14',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ExpertDesig: {
        table: 'CaseInfo',
        column: 'ExpertDesig',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      ExpertRebut: {
        table: 'CaseInfo',
        column: 'ExpertRebut',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      LORSent20: {
        table: 'Compliance',
        column: 'LORSent20',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      LORSent19: {
        table: 'Compliance',
        column: 'LORSent19',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      LORSent18: {
        table: 'Compliance',
        column: 'LORSent18',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      LORSent17: {
        table: 'Compliance',
        column: 'LORSent17',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      Step9Completed: {
        table: 'Tracking',
        column: 'Step9Completed',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      SalesFollow3: {
        table: 'SalesStage',
        column: 'SalesFollow3',
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
      SettleType20: {
        table: 'Tracking',
        column: 'SettleType20',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      PreInterview1: {
        table: 'CaseInfo',
        column: 'PreInterview1',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      PreInterview2: {
        table: 'CaseInfo',
        column: 'PreInterview2',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      PreInterview3: {
        table: 'CaseInfo',
        column: 'PreInterview3',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      SettleType17: {
        table: 'Tracking',
        column: 'SettleType17',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      PreInterview4: {
        table: 'CaseInfo',
        column: 'PreInterview4',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      PreInterview5: {
        table: 'CaseInfo',
        column: 'PreInterview5',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      PreInterview6: {
        table: 'CaseInfo',
        column: 'PreInterview6',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      NoticeSettle: {
        table: 'CaseInfo',
        column: 'NoticeSettle',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      SettleType14: {
        table: 'Tracking',
        column: 'SettleType14',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      date1: {
        table: 'ADA',
        column: 'date1',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      DispoMotionCutoff: {
        table: 'CaseInfo',
        column: 'DispoMotionCutoff',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      DismissalNotice: {
        table: 'CaseInfo',
        column: 'DismissalNotice',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      SettleType15: {
        table: 'Tracking',
        column: 'SettleType15',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      DismissalNoticeDate: {
        table: 'CaseInfo',
        column: 'DismissalNoticeDate',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
      date2: {
        table: 'ADA',
        column: 'date2',
        identifier: opportunityId,
        key: 'OpportunityId',

      },




    }
  }

  private setFormValues(form: FormGroup, data: any, service: OpportunityService) {
    form.setValue({
      Conf15: getNullableDateValue(data.Conf15, ''),
      RegXdue4: getNullableDateValue(data.RegXdue4, ''),
      ProcessM3: getNullableDataValue(data.ProcessM3, ''),
      misc2disc: getNullableDataValue(data.misc2disc, ''),
      ClientDoc9: getNullableDataValue(data.ClientDoc9, ''),
      Cred1DueDay: getNullableDataValue(data.Cred1DueDay, ''),
      AmendComplaintB: getNullableDataValue(data.AmendComplaintB, ''),
      CONORDER1: getNullableDateValue(data.CONORDER1, ''),
      CREDITORDER: getNullableDateValue(data.CREDITORDER, ''),
      ConOrder2: getNullableDateValue(data.ConOrder2, ''),
      NtcofAckSent: getNullableDateValue(data.NtcofAckSent, ''),
      NtcAckIssueType: getNullableDataValue(data.NtcAckIssueType, ''),
      ComplaintServed: getNullableDateValue(data.ComplaintServed, ''),
      ServiceType: getNullableDataValue(data.ServiceType, ''),
      ProcessM1: getNullableDataValue(data.ProcessM1, ''),
      AnswerDeadline: getNullableDateValue(data.AnswerDeadline, ''),
      AnswerD2: getNullableDateValue(data.AnswerD2, ''),
      AnswerD3: getNullableDateValue(data.AnswerD3, ''),
      AnswerD4: getNullableDateValue(data.AnswerD4, ''),
      DoeDefendent: getNullableDateValue(data.DoeDefendent, ''),
      DoeDef: getNullableDateValue(data.DoeDef, ''),
      DoeConfCopy: getNullableDateValue(data.DoeConfCopy, ''),
      DoeServed: getNullableDateValue(data.DoeServed, ''),
      DoeDismiss: getNullableDateValue(data.DoeDismiss, ''),
      AmendComplaint: getNullableDateValue(data.AmendComplaint, ''),
      FACfiled: getNullableDateValue(data.FACfiled, ''),
      Conord_20: getNullableDateValue(data.Conord_20, ''),
      FACServerd: getNullableDateValue(data.FACServerd, ''),
      TCPA_Method: getNullableDataValue(data.TCPA_Method, ''),
      ProcessM2: getNullableDataValue(data.ProcessM2, ''),
      NewDefAnswerDead: getNullableDateValue(data.NewDefAnswerDead, ''),
      ConOrder3: getNullableDateValue(data.ConOrder3, ''),
      RegX1: getNullableDataValue(data.RegX1, ''),
      ClientRecvd10: getNullableDateValue(data.ClientRecvd10, ''),
      RegX2: getNullableDataValue(data.RegX2, ''),
      MotionReopen: getNullableDateValue(data.MotionReopen, ''),
      ProceedDefault: getNullableDateValue(data.ProceedDefault, ''),
      ConOrder4: getNullableDateValue(data.ConOrder4, ''),
      PMTProof1: getNullableDateValue(data.PMTProof1, ''),
      ClientRecvd8: getNullableDateValue(data.ClientRecvd8, ''),
      ClientRecvd9: getNullableDateValue(data.ClientRecvd9, ''),
      OSC_POSdefault: getNullableDateValue(data.OSC_POSdefault, ''),
      Rework1: getNullableDateValue(data.Rework1, ''),
      SuspendedReason: getNullableDataValue(data.SuspendedReason, ''),
      Settled_15: getNullableDateValue(data.Settled_15, ''),
      dbtaccepted9: getNullableDateValue(data.dbtaccepted9, ''),
      dbtaccepted8: getNullableDateValue(data.dbtaccepted8, ''),
      dbtaccepted7: getNullableDateValue(data.dbtaccepted7, ''),
      Settled_16: getNullableDateValue(data.Settled_16, ''),
      JudgementDate: getNullableDateValue(data.JudgementDate, ''),
      SLCurrentDuty: getNullableDataValue(data.SLCurrentDuty, ''),
      Cred2Zip: getNullableDataValue(data.Cred2Zip, ''),
      JudgementSat: getNullableDateValue(data.JudgementSat, ''),
      CHGMoPMT: getNullableDataValue(data.CHGMoPMT, ''),
      reviewNeeded: getNullableDateValue(data.reviewNeeded, ''),
      BKStatus2: getNullableDataValue(data.BKStatus2, ''),
      ForeclosureDate2: getNullableDateValue(data.ForeclosureDate2, ''),
      ForeclosureDate3: getNullableDateValue(data.ForeclosureDate3, ''),
      Step7Completed: getNullableDateValue(data.Step7Completed, ''),
      CCDAComplaintdraft: getNullableDateValue(data.CCDAComplaintdraft, ''),
      ClientRecvd5: getNullableDateValue(data.ClientRecvd5, ''),
      TypeServe2: getNullableDataValue(data.TypeServe2, ''),
      PMTProof2: getNullableDateValue(data.PMTProof2, ''),
      ClientRecvd4: getNullableDateValue(data.ClientRecvd4, ''),
      DissmissalID: getNullableDataValue(data.DissmissalID, ''),
      OSCReplyDue: getNullableDateValue(data.OSCReplyDue, ''),
      OSCCompleted: getNullableDateValue(data.OSCCompleted, ''),
      OSCReplyAssigned: getNullableDataValue(data.OSCReplyAssigned, ''),
      Conord_10: getNullableDateValue(data.Conord_10, ''),
      Conord_11: getNullableDateValue(data.Conord_11, ''),
      Conord_13: getNullableDateValue(data.Conord_13, ''),
      Step1Completed: getNullableDateValue(data.Step1Completed, ''),
      DiscoveryRecCompleted: getNullableDataValue(data.DiscoveryRecCompleted, ''),
      dbtoffer6: getNullableDateValue(data.dbtoffer6, ''),
      AdaDate1: getNullableDateValue(data.AdaDate1, ''),
      AdaDate2: getNullableDateValue(data.AdaDate2, ''),
      AdaDate3: getNullableDateValue(data.AdaDate3, ''),
      AdaDate4: getNullableDateValue(data.AdaDate4, ''),
      AdaDate5: getNullableDateValue(data.AdaDate5, ''),
      Conord_14: getNullableDateValue(data.Conord_14, ''),
      Conord_15: getNullableDateValue(data.Conord_15, ''),
      Step2Completed: getNullableDateValue(data.Step2Completed, ''),
      DiscoveryRecDue: getNullableDataValue(data.DiscoveryRecDue, ''),
      dbtoffer7: getNullableDateValue(data.dbtoffer7, ''),
      AdaDate6: getNullableDateValue(data.AdaDate6, ''),
      AdaDate7: getNullableDateValue(data.AdaDate7, ''),
      AdaDate8: getNullableDateValue(data.AdaDate8, ''),
      AdaDate9: getNullableDateValue(data.AdaDate9, ''),
      AdaDate: getNullableDateValue(data.AdaDate, ''),
      Conord_16: getNullableDateValue(data.Conord_16, ''),
      Conord_17: getNullableDateValue(data.Conord_17, ''),
      Step3Completed: getNullableDateValue(data.Step3Completed, ''),
      ServiceType3: getNullableDataValue(data.ServiceType3, ''),
      Conord18: getNullableDateValue(data.Conord18, ''),
      Conord19: getNullableDateValue(data.Conord19, ''),
      Step4Completed: getNullableDateValue(data.Step4Completed, ''),
      ServiceType4: getNullableDataValue(data.ServiceType4, ''),
      FlaggedforReview: getNullableDateValue(data.FlaggedforReview, ''),
      MSJInitiate: getNullableDateValue(data.MSJInitiate, ''),
      LORSent11: getNullableDataValue(data.LORSent11, ''),
      MSJDrafted: getNullableDateValue(data.MSJDrafted, ''),
      MSJCompleted: getNullableDateValue(data.MSJCompleted, ''),
      MSJOppDue: getNullableDateValue(data.MSJOppDue, ''),
      MCDue: getNullableDateValue(data.MCDue, ''),
      CMCCompleted: getNullableDateValue(data.CMCCompleted, ''),
      CMSDue: getNullableDateValue(data.CMSDue, ''),
      Conf_15: getNullableDateValue(data.Conf_15, ''),
      CMSHearing: getNullableDateValue(data.CMSHearing, ''),
      OSCHearingDate: getNullableDateValue(data.OSCHearingDate, ''),
      RegXrecvd1: getNullableDateValue(data.RegXrecvd1, ''),
      PTRDate5: getNullableDateValue(data.PTRDate5, ''),
      MSCComplated: getNullableDateValue(data.MSCComplated, ''),
      Brief1: getNullableDateValue(data.Brief1, ''),
      Conf_14: getNullableDateValue(data.Conf_14, ''),
      ASRRequest: getNullableDateValue(data.ASRRequest, ''),
      NoticeSettlFiled: getNullableDateValue(data.NoticeSettlFiled, ''),
      RegXrecvd2: getNullableDateValue(data.RegXrecvd2, ''),
      misc1disc: getNullableDataValue(data.misc1disc, ''),
      RegXsent8: getNullableDateValue(data.RegXsent8, ''),
      RegXrecvd3: getNullableDateValue(data.RegXrecvd3, ''),
      RegXrecvd4: getNullableDateValue(data.RegXrecvd4, ''),
      StandingOrder: getNullableDateValue(data.StandingOrder, ''),
      DeclarationFiled: getNullableDateValue(data.DeclarationFiled, ''),
      Settled_14: getNullableDateValue(data.Settled_14, ''),
      SubStatus65: getNullableDateValue(data.SubStatus65, ''),
      QWRsent2: getNullableDateValue(data.QWRsent2, ''),
      ECC1: getNullableDateValue(data.ECC1, ''),
      ECC2: getNullableDateValue(data.ECC2, ''),
      ECC3: getNullableDateValue(data.ECC3, ''),
      RefXdue4: getNullableDateValue(data.RefXdue4, ''),
      CaseRcvdClient: getNullableDateValue(data.CaseRcvdClient, ''),
      ConDueBy_14: getNullableDateValue(data.ConDueBy_14, ''),
      ExpertDesig: getNullableDateValue(data.ExpertDesig, ''),
      ExpertRebut: getNullableDateValue(data.ExpertRebut, ''),
      LORSent20: getNullableDateValue(data.LORSent20, ''),
      LORSent19: getNullableDateValue(data.LORSent19, ''),
      LORSent18: getNullableDateValue(data.LORSent18, ''),
      LORSent17: getNullableDateValue(data.LORSent17, ''),
      Step9Completed: getNullableDateValue(data.Step9Completed, ''),
      SalesFollow3: getNullableDateValue(data.SalesFollow3, ''),
      FinalPreTrial: getNullableDateValue(data.FinalPreTrial, ''),
      HearingDate: getNullableDateValue(data.HearingDate, ''),
      SettleType20: getNullableDataValue(data.SettleType20, ''),
      PreInterview1: getNullableDateValue(data.PreInterview1, ''),
      PreInterview2: getNullableDateValue(data.PreInterview2, ''),
      PreInterview3: getNullableDateValue(data.PreInterview3, ''),
      SettleType17: getNullableDataValue(data.SettleType17, ''),
      PreInterview4: getNullableDateValue(data.PreInterview4, ''),
      PreInterview5: getNullableDateValue(data.PreInterview5, ''),
      PreInterview6: getNullableDateValue(data.PreInterview6, ''),
      NoticeSettle: getNullableDataValue(data.NoticeSettle, ''),
      SettleType14: getNullableDataValue(data.SettleType14, ''),
      NoticeSettleDate: getNullableDateValue(data.NoticeSettleDate, ''),
      DispoMotionCutoff: getNullableDateValue(data.DispoMotionCutoff, ''),
      DismissalNotice: getNullableDataValue(data.DismissalNotice, ''),
      SettleType15: getNullableDataValue(data.SettleType15, ''),
      DismissalNoticeDate: getNullableDateValue(data.DismissalNoticeDate, ''),
      date2: getNullableDateValue(data.date2, ''),
      MotionReopen2: getNullableDateValue(data.MotionReopen2, ''),
      date1: getNullableDateValue(data.date1, ''),
      DoeDefendentStatus: getNullableDataValue(data.DoeDefendentStatus, ''),


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

  get AnswerD2() { return this.form.get('AnswerD2'); }
}
