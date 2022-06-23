import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OpportunityService } from '../../../@core/backend/common/services/opportunity.service';
import { NbDialogService } from '@nebular/theme';
import { UsersService } from '../../../@core/backend/common/services/users.service';
import { User } from '../../../@core/interfaces/common/users';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent implements OnInit {
  submitted: boolean = false;
  success: boolean = false;
  today: Date = new Date();
  form: FormGroup;
  private currentUser: User;

  constructor(
    private service: OpportunityService,
    private dialogService: NbDialogService,
    private userService: UsersService,
    private router: Router,
    private fb: FormBuilder) {
    this.userService.getCurrentUser().subscribe(u => {
      this.currentUser = u;
    });
  }

  ngOnInit() {
    this.initForm();
  }
  get firstName() { return this.form.get('firstName'); }
  get middleName() { return this.form.get('middleName'); }
  get lastName() { return this.form.get('lastName'); }
  get mobilePhone() { return this.form.get('mobilePhone'); }
  get email() { return this.form.get('email'); }
  get workPhone() { return this.form.get('workPhone'); }
  get fax() { return this.form.get('fax'); }
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

  initForm() {
    this.form = this.fb.group({
      firstName: this.fb.control(''),
      middleName: this.fb.control(''),
      lastName: this.fb.control(''),
      mobilePhone: this.fb.control(''),
      homePhone: this.fb.control(''),
      workPhone: this.fb.control(''),
      fax: this.fb.control(''),
      email: this.fb.control(''),
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
    }, { updateOn: 'change' });
  }

  submit(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
    this.service.create([
      { key: 'NameFirst', value: this.firstName.value },
      { key: 'NameMiddle', value: this.middleName.value },
      { key: 'NameLast', value: this.lastName.value },
      { key: 'NativeLanguage', value: this.nativeLanguage.value },
      { key: 'Gender', value: this.gender.value },
      { key: 'PhoneHome', value: this.homePhone.value },
      { key: 'PhoneWork', value: this.workPhone.value },
      { key: 'PhoneFax', value: this.fax.value },
      { key: 'Email1', value: this.email.value },
      { key: 'PhoneMobile', value: this.mobilePhone.value },
      { key: 'address1', value: this.address.value },
      { key: 'Address2', value: this.address2.value },
      { key: 'AddCity', value: this.city.value },
      { key: 'AddState', value: this.state.value },
      { key: 'AddZip', value: this.zipcode.value },
      { key: 'AddCounty', value: this.county.value },
      { key: 'NameFirstCo', value: this.emergency_firstName.value },
      { key: 'NameMiddleCo', value: this.emergency_middleName.value },
      { key: 'NameLastCo', value: this.emergency_lastName.value },
      { key: 'Email2', value: this.emergency_email.value },
      { key: 'PhoneHomeCo', value: this.emergency_homePhone.value },
      { key: 'PhoneMobileCo', value: this.emergency_mobilePhone.value },
      { key: 'address1Co', value: this.emergency_address.value },
      { key: 'Address2Co', value: this.emergency_address2.value },
      { key: 'AddCityCo', value: this.emergency_city.value },
      { key: 'AddStateCo', value: this.emergency_state.value },
      { key: 'AddZipCo', value: this.emergency_zipcode.value },
      { key: 'AddCountyCo', value: this.emergency_county.value },
      { key: 'String1', value: this.medications.value },
      { key: 'String2', value: this.height.value },
      { key: 'String3', value: this.weight.value },
      { key: 'String4', value: this.conditions.value },
      { key: 'String5', value: this.medical_group.value },
      { key: 'String6', value: this.medicare_claim_number.value },
      { key: 'String7', value: this.medicare_claim_part_a.value },
      { key: 'String8', value: this.medicare_claim_part_b.value },
      { key: 'String9', value: this.medicaid_number.value },
      { key: 'String_10', value: this.case_number.value },
      { key: 'String_11', value: this.doctors_firstName.value },
      { key: 'String_12', value: this.doctors_middleName.value },
      { key: 'String_13', value: this.doctors_lastName.value },
      { key: 'String_14', value: this.smoker.value },
      { key: 'String_15', value: this.occupation.value },
      { key: 'String_16', value: this.income.value },
      { key: 'String_17', value: this.incomeType.value },
      { key: 'String_18', value: this.ssn.value },
      { key: 'String_19', value: this.low_income_subsidy.value },
      { key: 'String_20', value: this.scope_of_appointment.value },
      { key: 'MKTSource1', value: this.source.value },
      { key: 'MKTSource2', value: this.source.value },
      { key: 'MKTSource3', value: this.source.value },
      { key: 'LeadCost', value: this.price.value },
      { key: 'PageUrl', value: this.page.value },
      { key: 'ReferredBy', value: this.referrer.value },
      { key: 'BizDev1', value: this.currentUser.contactId },
    ]).subscribe(() => {
      this.submitted = true;
      this.success = true;
      setTimeout(() => {
        this.router.navigate(['/pages/clients/list/']);
      }, 1000 * 2);
    }, (err) => {
      this.submitted = true;
      this.success = false;
    });
  }
}
