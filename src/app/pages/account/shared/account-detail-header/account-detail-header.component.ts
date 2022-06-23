import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AccountService } from '../../../../@core/backend/common/services/account.service';
import { CustomValidator } from '../../../../@core/backend/common/services/validation.service';

@Component({
  selector: 'ngx-account-detail-header',
  templateUrl: './account-detail-header.component.html',
  styleUrls: ['./account-detail-header.component.scss'],
})
export class AccountDetailHeaderComponent implements OnInit {
  accountName: '';
  form: FormGroup;
  @Input() service: AccountService;
  @Input() data: Observable<any>;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.initForm(this.fb);
    this.loadAccountData(this.form, this.data, this.service);
  }

  loadAccountData(form: FormGroup, response: Observable<any>, service: AccountService) {
    response.subscribe((data) => {
      this.accountName = data.accountName;
      this.setFormValues(form, data, service);
    });
  }

  initForm(fb: FormBuilder): FormGroup {
    const form = fb.group({
      account: fb.control(''),
      division: fb.control(''),
      quickName: fb.control(''),
      mainPhone: fb.control(''),
      fax: fb.control(''),
      primary: fb.control(''),
      address1: fb.control(''),
      address2: fb.control(''),
      city: fb.control(''),
      state: fb.control(''),
      county: fb.control(''),
      zip: fb.control(''),
      web: fb.control(''),
      userId: fb.control(''),
      password: fb.control(''),
      email: fb.control(''),
      accountNumber: fb.control(''),
      code: fb.control(''),
      monthlyAmount: fb.control(''),
      type: fb.control(''),
      subType: fb.control(''),
      status: fb.control(''),
      entity: fb.control(''),
      accountManager: fb.control(''),
      accountId: fb.control(''),
      partnerId: fb.control(''),
      notes: fb.control(''),
    }, { updateOn: 'blur' });
    return form;
  }

  setFormValues(form: FormGroup, data: any, service: AccountService) {
    form.setValue({
      accountId: data.accountId ? data.accountId : '',
      account: data.accountName ? data.accountName : '',
      division: data.division ? data.division : '',
      quickName: data.quickName ? data.quickName : '',
      mainPhone: data.mainPhone ? data.mainPhone : '',
      fax: data.fax ? data.fax : '',
      primary: data.primary ? data.primary : '',
      address1: data.address.streetAddress ? data.address.streetAddress : '',
      address2: data.address.streetAddress2 ? data.address.streetAddress2 : '',
      zip: data.address.zip ? data.address.zip : '',
      city: data.address.city ? data.address.city : '',
      state: data.address.state ? data.address.state : '',
      county: data.address.county ? data.address.county : '',
      web: data.web ? data.web : '',
      userId: data.userId ? data.userId : '',
      password: data.password ? data.password : '',
      email: data.email ? data.email : '',
      accountNumber: data.accountNumber ? data.accountNumber : '',
      code: data.code ? data.code : '',
      monthlyAmount: data.monthlyAmount ? data.monthlyAmount : '',
      type: data.type ? data.type : '',
      subType: data.subType ? data.subType : '',
      status: data.status ? data.status : '',
      entity: data.entity ? data.entity : '',
      accountManager: data.accountManager ? data.accountManager : '',
      partnerId: data.partnerId ? data.partnerId : '',
      notes: data.notes ? data.notes : '',
    });

    const intakeFormData = this.setIntakeFormData(data.accountId, data.addressId);
    const controls = form.controls;
    for (const property in controls) {
      if (controls.hasOwnProperty(property)) {
        controls[property].setAsyncValidators(CustomValidator.validate(
          service,
          intakeFormData[property].identifier,
          intakeFormData[property],
        ));
      }
    }
  }

  setIntakeFormData(accountId: string, addressId: string) {
    return {
      account: {
        table: 'Account',
        column: 'Account',
        identifier: accountId,
        key: 'AccountId',
      },
      division: {
        table: 'Account',
        column: 'division',
        identifier: accountId,
        key: 'AccountId',
      },
      quickName: {
        table: 'Account',
        column: 'UserField1',
        identifier: accountId,
        key: 'AccountId',
      },
      mainPhone: {
        table: 'Account',
        column: 'mainphone',
        identifier: accountId,
        key: 'AccountId',
      },
      fax: {
        table: 'Account',
        column: 'fax',
        identifier: accountId,
        key: 'AccountId',
      },
      web: {
        table: 'Account',
        column: 'WEBADDRESS',
        identifier: accountId,
        key: 'AccountId',
      },
      address1: {
        table: 'ADDRESS',
        column: 'ADDRESS1',
        identifier: addressId,
        key: 'ADDRESSID',
      },
      address2: {
        table: 'Address',
        column: 'Address2',
        identifier: addressId,
        key: 'ADDRESSID',
      },
      city: {
        table: 'Address',
        column: 'city',
        identifier: addressId,
        key: 'AddressId',
      },
      state: {
        table: 'Address',
        column: 'state',
        identifier: addressId,
        key: 'AddressId',
      },
      zip: {
        table: 'Address',
        column: 'postalCode',
        identifier: addressId,
        key: 'AddressId',
      },
      county: {
        table: 'Address',
        column: 'county',
        identifier: addressId,
        key: 'AddressId',
      },
      userId: {
        table: 'Account',
        column: 'webUserId',
        identifier: accountId,
        key: 'AccountId',
      },
      password: {
        table: 'Account',
        column: 'webUserPW',
        identifier: accountId,
        key: 'AccountId',
      },
      email: {
        table: 'Account',
        column: 'email',
        identifier: accountId,
        key: 'AccountId',
      },
      accountNumber: {
        table: 'Account',
        column: 'externalAccountNo',
        identifier: accountId,
        key: 'AccountId',
      },
      code: {
        table: 'Account',
        column: 'alternateKeySuffix',
        identifier: accountId,
        key: 'AccountId',
      },
      monthlyAmount: {
        table: 'Account',
        column: 'monthlyamtdue',
        identifier: accountId,
        key: 'AccountId',
      },
      type: {
        table: 'Account',
        column: 'type',
        identifier: accountId,
        key: 'AccountId',
      },
      subType: {
        table: 'Account',
        column: 'subtype',
        identifier: accountId,
        key: 'AccountId',
      },
      status: {
        table: 'Account',
        column: 'status',
        identifier: accountId,
        key: 'AccountId',
      },
      entity: {
        table: 'Account',
        column: 'PRIMARYENTITY',
        identifier: accountId,
        key: 'AccountId',
      },
      partnerId: {
        table: 'Account',
        column: 'userField2',
        identifier: accountId,
        key: 'AccountId',
      },
      notes: {
        table: 'Account',
        column: 'businessDescription',
        identifier: accountId,
        key: 'AccountId',
      },
      primary: {
        table: 'Account',
        column: 'donotupdate',
        identifier: accountId,
        key: 'AccountId',
      },
      accountManager: {
        table: 'Account',
        column: 'donotupdate',
        identifier: accountId,
        key: 'AccountId',
      },
      accountId: {
        table: 'Account',
        column: 'donotupdate',
        identifier: accountId,
        key: 'AccountId',
      },
    };
  }

  get account() { return this.form.get('account'); }
  get division() { return this.form.get('division'); }
  get quickName() { return this.form.get('quickName'); }
  get mainPhone() { return this.form.get('mainPhone'); }
  get fax() { return this.form.get('fax'); }
  get address1() { return this.form.get('address1'); }
  get address2() { return this.form.get('address2'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get county() { return this.form.get('county'); }
  get zip() { return this.form.get('zip'); }
  get web() { return this.form.get('web'); }
  get userId() { return this.form.get('userId'); }
  get password() { return this.form.get('password'); }
  get email() { return this.form.get('email'); }
  get accountNumber() { return this.form.get('accountNumber'); }
  get code() { return this.form.get('code'); }
  get monthlyAmount() { return this.form.get('monthlyAmount'); }
  get type() { return this.form.get('type'); }
  get subType() { return this.form.get('subType'); }
  get status() { return this.form.get('status'); }
  get entity() { return this.form.get('entity'); }
  get accountManager() { return this.form.get('accountManager'); }
  get accountId() { return this.form.get('accountId'); }
  get partnerId() { return this.form.get('partnerId'); }
  get notes() { return this.form.get('notes'); }
}
