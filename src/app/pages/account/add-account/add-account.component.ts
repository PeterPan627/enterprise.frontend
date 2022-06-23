import { Component, OnInit, TemplateRef } from '@angular/core';
import { AccountService } from '../../../@core/backend/common/services/account.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss'],
})
export class AddAccountComponent implements OnInit {
  submitted: boolean = false;
  success: boolean = false;
  today: Date = new Date();
  form: FormGroup;
  constructor(
    private service: AccountService,
    private dialogService: NbDialogService,
    private router: Router,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.initForm(this.fb);
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
    }, { updateOn: 'change' });
    return form;
  }

  get account() { return this.form.get('account'); }
  get division() { return this.form.get('division'); }
  get quickName() { return this.form.get('quickName'); }
  get mainPhone() { return this.form.get('mainPhone'); }
  get fax() { return this.form.get('fax'); }
  get primary() { return this.form.get('primary'); }
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

  submit(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
    this.service.create([
      { key: 'company', value: this.account.value },
      { key: 'division', value: this.division.value },
      { key: 'department', value: this.quickName.value },
      { key: 'PHONEWORK', value: this.mainPhone.value },
      { key: 'PHONEFAX', value: this.fax.value },
      { key: 'address1', value: this.address1.value },
      { key: 'address2', value: this.address2.value },
      { key: 'addcity', value: this.city.value },
      { key: 'addstate', value: this.state.value },
      { key: 'addcounty', value: this.county.value },
      { key: 'addzip', value: this.zip.value },
      { key: 'STRING2L200', value: this.web.value },
      { key: 'string3', value: this.userId.value },
      { key: 'string4', value: this.password.value },
      { key: 'email1', value: this.email.value },
      { key: 'string5', value: this.accountNumber.value },
      { key: 'string6', value: this.code.value },
      { key: 'string7', value: this.monthlyAmount.value },
    ]).subscribe(() => {
      this.submitted = true;
      this.success = true;
      setTimeout(() => {
        this.router.navigate(['/pages/accounts/list/']);
      }, 1000 * 2);
    }, () => {
      this.submitted = true;
      this.success = false;
    });
  }
}
