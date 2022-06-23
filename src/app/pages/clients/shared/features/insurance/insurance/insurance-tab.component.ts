import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OpportunityService } from '../../../../../../@core/backend/common/services/opportunity.service';
import { CustomValidator } from '../../../../../../@core/backend/common/services/validation.service';

@Component({
  selector: 'ngx-clients-insurance-tab',
  templateUrl: './insurance-tab.component.html',
  styleUrls: ['./insurance-tab.component.scss'],
})

export class InsuranceTabComponent implements OnInit {
  @Input() details: any;
  @Input() data: any;
  form: FormGroup;
  opportunityId: string;
  constructor(
    private service: OpportunityService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadUserData();
  }
  loadUserData() {
    this.loadUser(this.data);
  }

  loadUser(d) {
    d.subscribe((data) => {
      this.form.setValue({
        agent: '',
        status: '',
        status_modified: '',
        firstName: data.firstName ? data.firstName : '',
        middleName: data.middleName ? data.middleName : '',
        lastName: data.lastName ? data.lastName : '',
        mobilePhone: data.cellPhone ? data.cellPhone : '',
        homePhone: data.homePhone ? data.homePhone : '',
        dateOfBirth: '',
        nativeLanguage: data.nativeLanguage ? data.nativeLanguage : '',
        gender: data.gender ? data.gender : '',
        address: data.homeAddress.streetAddress ? data.homeAddress.streetAddress : '',
        address2: data.homeAddress.streetAddress2 ? data.homeAddress.streetAddress2 : '',
        zipcode: data.homeAddress.zip ? data.homeAddress.zip : '',
        city: data.homeAddress.city ? data.homeAddress.city : '',
        state: data.homeAddress.state ? data.homeAddress.state : '',
        county: data.homeAddress.county ? data.homeAddress.county : '',
        medications: data.medications ? data.medications : '',
        height: data.height ? data.height : '',
        weight: data.weight ? data.weight : '',
        conditions: data.conditions ? data.conditions : '',
        medical_group: data.medicalGroup ? data.medicalGroup : '',
        medicare_claim_number: data.medicareClaimNumber ? data.medicareClaimNumber : '',
        medicare_claim_part_a: data.medicareClaimPartA ? data.medicareClaimPartA : '',
        medicare_claim_part_b: data.medicareClaimPartB ? data.medicareClaimPartB : '',
        medicaid_number: data.medicalNumber ? data.medicalNumber : '',
        case_number: data.caseNumber ? data.caseNumber : '',
        doctors_firstName: data.doctorsFirstName ? data.doctorsFirstName : '',
        doctors_middleName: data.doctorsMiddleName ? data.doctorsMiddleName : '',
        doctors_lastName: data.doctorsLastName ? data.doctorsLastName : '',
        smoker: data.smoker ? data.smoker : '',
        scope_of_appointment: data.scopeOfAppointment ? data.scopeOfAppointment : '',
        occupation: data.occupation ? data.occupation : '',
        income: data.income ? data.income : '',
        incomeType: data.incomeType ? data.incomeType : '',
        ssn: '',
        low_income_subsidy: data.lowIncomeSubsidy ? data.lowIncomeSubsidy : '',
        mailing_address: data.mailingAddress.streetAddress ? data.mailingAddress.streetAddress : '',
        mailing_address2: data.mailingAddress.streetAddress2 ? data.mailingAddress.streetAddress2 : '',
        mailing_city: data.mailingAddress.city ? data.mailingAddress.city : '',
        mailing_state: data.mailingAddress.state ? data.mailingAddress.state : '',
        mailing_zipcode: data.mailingAddress.zip ? data.mailingAddress.zip : '',
        mailing_county: data.mailingAddress.county ? data.mailingAddress.county : '',
        emergency_firstName: data.emergencyFirstName ? data.emergencyFirstName : '',
        emergency_middleName: data.emergencyMiddleName ? data.emergencyMiddleName : '',
        emergency_lastName: data.emergencyLastName ? data.emergencyLastName : '',
        emergency_homePhone: data.emergencyHomePhone ? data.emergencyHomePhone : '',
        emergency_mobilePhone: data.emergencyCellPhone ? data.emergencyCellPhone : '',
        emergency_email: data.emergencyEmail ? data.emergencyEmail : '',
        emergency_address: data.emergencyAddress.streetAddress ? data.emergencyAddress.streetAddress : '',
        emergency_address2: data.emergencyAddress.streetAddress2 ? data.emergencyAddress.streetAddress2 : '',
        emergency_zipcode: data.emergencyAddress.zip ? data.emergencyAddress.zip : '',
        emergency_city: data.emergencyAddress.city ? data.emergencyAddress.city : '',
        emergency_state: data.emergencyAddress.state ? data.emergencyAddress.state : '',
        emergency_county: data.emergencyAddress.county ? data.emergencyAddress.county : '',
        source: data.source1 ? data.source1 : '',
        price: data.leadCost ? data.leadCost : '',
        campaignId: '',
        referenceId: '',
        trackingId: '',
        page: data.pageUrl ? data.pageUrl : '',
        referrer: data.referrer ? data.referrer : '',
        createdBy: '',
        createdDate: '',
        modifiedBy: '',
        modifiedDate: '',
        frontedBy: '',
        frontedDate: '',
        convertedBy: '',
        convertedDate: '',
      });

      const intakeFormData = {
        status: {
          table: 'SalesStage',
          column: 'aStage',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        firstName: {
          table: 'ClientInfo',
          column: 'ClientFirst',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        middleName: {
          table: 'ClientInfo',
          column: 'ClientMiddle',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        lastName: {
          table: 'ClientInfo',
          column: 'ClientLast',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        nativeLanguage: {
          table: 'ClientInfo',
          column: 'ClientLanguage',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        gender: {
          table: 'ClientInfo',
          column: 'ClientGender',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        homePhone: {
          table: 'ClientInfo',
          column: 'ClientHome',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        mobilePhone: {
          table: 'ClientInfo',
          column: 'ClientMobile',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        address: {
          table: 'ClientInfo',
          column: 'ClientHomeAdd',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        address2: {
          table: 'ClientInfo',
          column: 'ClientHomeAdd2',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        zipcode: {
          table: 'ClientInfo',
          column: 'ClientHomePostal',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        city: {
          table: 'ClientInfo',
          column: 'ClientHomeCity',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        state: {
          table: 'ClientInfo',
          column: 'ClientHomeState',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        county: {
          table: 'ClientInfo',
          column: 'ClientHomeCounty',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        medications: {
          table: 'Insurance',
          column: 'Medications',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        height: {
          table: 'Insurance',
          column: 'Height',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        weight: {
          table: 'Insurance',
          column: 'Weight',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        conditions: {
          table: 'Insurance',
          column: 'Conditions',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        medical_group: {
          table: 'Insurance',
          column: 'MedicalGroup',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        medicare_claim_number: {
          table: 'Insurance',
          column: 'MedicareClaimNumb',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        medicare_claim_part_a: {
          table: 'Insurance',
          column: 'MedicareClaimPartA',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        medicare_claim_part_b: {
          table: 'Insurance',
          column: 'MedicareClaimPartB',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        medicaid_number: {
          table: 'Insurance',
          column: 'MedicaidNumb',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        case_number: {
          table: 'Insurance',
          column: 'CaseNumber',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        doctors_firstName: {
          table: 'Insurance',
          column: 'DoctorsFirstName',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        doctors_middleName: {
          table: 'Insurance',
          column: 'DoctorsMiddleName',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        doctors_lastName: {
          table: 'Insurance',
          column: 'DoctorsLastName',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        smoker: {
          table: 'Insurance',
          column: 'Smoker',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        scope_of_appointment: {
          table: 'Insurance',
          column: 'ScopeOfAppoint',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        occupation: {
          table: 'Insurance',
          column: 'Occupation',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        income: {
          table: 'Insurance',
          column: 'Income',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        incomeType: {
          table: 'Insurance',
          column: 'IncomeType',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        ssn: {
          table: 'ClientInfo',
          column: 'ClientLast',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        low_income_subsidy: {
          table: 'Insurance',
          column: 'LowIncomeSubsidy',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        mailing_address: {
          table: 'ClientInfo',
          column: 'ClientLast',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        mailing_address2: {
          table: 'ClientInfo',
          column: 'ClientLast',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        mailing_city: {
          table: 'ClientInfo',
          column: 'ClientLast',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        mailing_zipcode: {
          table: 'ClientInfo',
          column: 'ClientLast',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        mailing_state: {
          table: 'ClientInfo',
          column: 'ClientLast',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        mailing_county: {
          table: 'ClientInfo',
          column: 'ClientLast',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        emergency_firstName: {
          table: 'ClientInfo',
          column: 'CoClientFirst',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        emergency_middleName: {
          table: 'ClientInfo',
          column: 'CoClientMiddle',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        emergency_lastName: {
          table: 'ClientInfo',
          column: 'CoClientLast',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        emergencyHomePhone: {
          table: 'ClientInfo',
          column: 'CoClientHome',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        emergencyCellPhone: {
          table: 'ClientInfo',
          column: 'CoClientMobile',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        emergency_email: {
          table: 'ClientInfo',
          column: 'EmailCoClient',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        emergency_address: {
          table: 'ClientInfo',
          column: 'CoClientHomeAdd',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        emergency_address2: {
          table: 'ClientInfo',
          column: 'CoClientHomeAdd2',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        emergency_zipcode: {
          table: 'ClientInfo',
          column: 'CoClientHomePostal',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        emergency_city: {
          table: 'ClientInfo',
          column: 'CoClientHomeCity',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        emergency_state: {
          table: 'ClientInfo',
          column: 'CoClientHomeState',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        emergency_county: {
          table: 'ClientInfo',
          column: 'CoClientHomeCounty',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        source: {
          table: 'SalesMarketing',
          column: 'MKTSource1',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        price: {
          table: 'SalesMarketing',
          column: 'LeadCost',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        }, /*
            campaignId: {
              table: 'SalesMarketing',
              column: 'ClientLast',
              identifier: data.opportunityId,
              key: 'OpportunityId',
            },
            referenceId: {
              table: 'SalesMarketing',
              column: 'ClientLast',
              identifier: data.opportunityId,
              key: 'OpportunityId',
            },
            trackingId: {
              table: 'SalesMarketing',
              column: 'ClientLast',
              identifier: data.opportunityId,
              key: 'OpportunityId',
            }, */
        page: {
          table: 'SalesMarketing',
          column: 'PageUrl',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        },
        referrer: {
          table: 'SalesMarketing',
          column: 'ReferredBy',
          identifier: data.opportunityId,
          key: 'OpportunityId',
        }, /*
            createdDate: {
              table: 'ClientInfo',
              column: 'ClientLast',
              identifier: data.opportunityId,
              key: 'OpportunityId',
            },
            modifiedDate: {
              table: 'ClientInfo',
              column: 'ClientLast',
              identifier: data.opportunityId,
              key: 'OpportunityId',
            },
            frontedDate: {
              table: 'ClientInfo',
              column: 'ClientLast',
              identifier: data.opportunityId,
              key: 'OpportunityId',
            },
            convertedDate: {
              table: 'ClientInfo',
              column: 'ClientLast',
              identifier: data.opportunityId,
              key: 'OpportunityId',
            },
            createdBy: {
              table: 'ClientInfo',
              column: 'ClientLast',
              identifier: data.opportunityId,
              key: 'OpportunityId',
            },
            modifiedBy: {
              table: 'ClientInfo',
              column: 'ClientLast',
              identifier: data.opportunityId,
              key: 'OpportunityId',
            },
            frontedBy: {
              table: 'ClientInfo',
              column: 'ClientLast',
              identifier: data.opportunityId,
              key: 'OpportunityId',
            },
            convertedBy: {
              table: 'ClientInfo',
              column: 'ClientLast',
              identifier: data.opportunityId,
              key: 'OpportunityId',
            }*/
      };

      const controls = this.form.controls;
      for (const property in controls) {
        if (controls.hasOwnProperty(property)) {
          controls[property].setAsyncValidators(CustomValidator.validate(
            this.service,
            data.opportunityId,
            intakeFormData[property],
          ));
        }
      }
    });
  }

  initForm() {
    this.form = this.fb.group({
      agent: this.fb.control(''),
      status: this.fb.control(''),
      status_modified: this.fb.control(''),
      firstName: this.fb.control(''),
      middleName: this.fb.control(''),
      lastName: this.fb.control(''),
      mobilePhone: this.fb.control(''),
      homePhone: this.fb.control(''),
      dateOfBirth: this.fb.control(''),
      nativeLanguage: this.fb.control(''),
      gender: this.fb.control(''),
      address: this.fb.control(''),
      address2: this.fb.control(''),
      zipcode: this.fb.control(''),
      city: this.fb.control(''),
      state: this.fb.control(''),
      county: this.fb.control(''),
      medications: this.fb.control(''),
      height: this.fb.control(''),
      weight: this.fb.control(''),
      conditions: this.fb.control(''),
      medical_group: this.fb.control(''),
      medicare_claim_number: this.fb.control(''),
      medicare_claim_part_a: this.fb.control(''),
      medicare_claim_part_b: this.fb.control(''),
      medicaid_number: this.fb.control(''),
      case_number: this.fb.control(''),
      doctors_firstName: this.fb.control(''),
      doctors_lastName: this.fb.control(''),
      doctors_middleName: this.fb.control(''),
      smoker: this.fb.control(''),
      scope_of_appointment: this.fb.control(''),
      occupation: this.fb.control(''),
      income: this.fb.control(''),
      incomeType: this.fb.control(''),
      ssn: this.fb.control(''),
      low_income_subsidy: this.fb.control(''),
      mailing_address: this.fb.control(''),
      mailing_address2: this.fb.control(''),
      mailing_zipcode: this.fb.control(''),
      mailing_city: this.fb.control(''),
      mailing_state: this.fb.control(''),
      mailing_county: this.fb.control(''),
      emergency_firstName: this.fb.control(''),
      emergency_middleName: this.fb.control(''),
      emergency_lastName: this.fb.control(''),
      emergency_homePhone: this.fb.control(''),
      emergency_mobilePhone: this.fb.control(''),
      emergency_email: this.fb.control(''),
      emergency_address: this.fb.control(''),
      emergency_address2: this.fb.control(''),
      emergency_zipcode: this.fb.control(''),
      emergency_city: this.fb.control(''),
      emergency_state: this.fb.control(''),
      emergency_county: this.fb.control(''),
      source: this.fb.control(''),
      price: this.fb.control(''),
      campaignId: this.fb.control(''),
      referenceId: this.fb.control(''),
      trackingId: this.fb.control(''),
      page: this.fb.control(''),
      referrer: this.fb.control(''),
      createdDate: this.fb.control(''),
      modifiedDate: this.fb.control(''),
      frontedDate: this.fb.control(''),
      convertedDate: this.fb.control(''),
      createdBy: this.fb.control(''),
      modifiedBy: this.fb.control(''),
      frontedBy: this.fb.control(''),
      convertedBy: this.fb.control(''),
    }, { updateOn: 'blur' });
  }

  get agent() { return this.form.get('agent'); }
  get status() { return this.form.get('status'); }
  get status_modified() { return this.form.get('status_modified'); }
  get firstName() { return this.form.get('firstName'); }
  get middleName() { return this.form.get('middleName'); }
  get lastName() { return this.form.get('lastName'); }
  get mobilePhone() { return this.form.get('mobilePhone'); }
  get homePhone() { return this.form.get('homePhone'); }
  get dateOfBirth() { return this.form.get('dateOfBirth'); }
  get nativeLanguage() { return this.form.get('nativeLanguage'); }
  get gender() { return this.form.get('gender'); }
  get address() { return this.form.get('address'); }
  get address2() { return this.form.get('address2'); }
  get zipcode() { return this.form.get('zipcode'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get county() { return this.form.get('county'); }
  get medications() { return this.form.get('medications'); }
  get height() { return this.form.get('height'); }
  get weight() { return this.form.get('weight'); }
  get conditions() { return this.form.get('conditions'); }
  get medical_group() { return this.form.get('medical_group'); }
  get medicare_claim_number() { return this.form.get('medicare_claim_number'); }
  get medicare_claim_part_a() { return this.form.get('medicare_claim_part_a'); }
  get medicare_claim_part_b() { return this.form.get('medicare_claim_part_b'); }
  get medicaid_number() { return this.form.get('medicaid_number'); }
  get case_number() { return this.form.get('case_number'); }
  get doctors_firstName() { return this.form.get('doctors_firstName'); }
  get doctors_lastName() { return this.form.get('doctors_lastName'); }
  get doctors_middleName() { return this.form.get('doctors_middleName'); }
  get smoker() { return this.form.get('smoker'); }
  get scope_of_appointment() { return this.form.get('scope_of_appointment'); }
  get occupation() { return this.form.get('occupation'); }
  get income() { return this.form.get('income'); }
  get incomeType() { return this.form.get('incomeType'); }
  get ssn() { return this.form.get('ssn'); }
  get low_income_subsidy() { return this.form.get('low_income_subsidy'); }
  get mailing_address() { return this.form.get('mailing_address'); }
  get mailing_address2() { return this.form.get('mailing_address2'); }
  get mailing_zipcode() { return this.form.get('mailing_zipcode'); }
  get mailing_city() { return this.form.get('mailing_city'); }
  get mailing_state() { return this.form.get('mailing_state'); }
  get mailing_county() { return this.form.get('mailing_county'); }
  get emergency_firstName() { return this.form.get('emergency_firstName'); }
  get emergency_middleName() { return this.form.get('emergency_middleName'); }
  get emergency_lastName() { return this.form.get('emergency_lastName'); }
  get emergency_homePhone() { return this.form.get('emergency_homePhone'); }
  get emergency_mobilePhone() { return this.form.get('emergency_mobilePhone'); }
  get emergency_email() { return this.form.get('emergency_email'); }
  get emergency_address() { return this.form.get('emergency_address'); }
  get emergency_address2() { return this.form.get('emergency_address2'); }
  get emergency_zipcode() { return this.form.get('emergency_zipcode'); }
  get emergency_city() { return this.form.get('emergency_city'); }
  get emergency_state() { return this.form.get('emergency_state'); }
  get emergency_county() { return this.form.get('emergency_county'); }
  get source() { return this.form.get('source'); }
  get price() { return this.form.get('price'); }
  get campaignId() { return this.form.get('campaignId'); }
  get referenceId() { return this.form.get('referenceId'); }
  get trackingId() { return this.form.get('trackingId'); }
  get page() { return this.form.get('page'); }
  get referrer() { return this.form.get('referrer'); }
  get createdDate() { return this.form.get('createdDate'); }
  get modifiedDate() { return this.form.get('modifiedDate'); }
  get frontedDate() { return this.form.get('frontedDate'); }
  get convertedDate() { return this.form.get('convertedDate'); }
  get createdBy() { return this.form.get('createdBy'); }
  get modifiedBy() { return this.form.get('modifiedBy'); }
  get frontedBy() { return this.form.get('frontedBy'); }
  get convertedBy() { return this.form.get('convertedBy'); }
}
