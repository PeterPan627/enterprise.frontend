import { Component, OnInit, TemplateRef } from '@angular/core';
import { ContactService } from '../../../@core/backend/common/services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  submitted: boolean = false;
  success: boolean = false;
  today: Date = new Date();
  form: FormGroup;
  constructor(
    private service: ContactService,
    private dialogService: NbDialogService,
    private router: Router,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.initForm(this.fb);
  }

  initForm(fb: FormBuilder): FormGroup {
    const form = fb.group({
      company: fb.control(''),
      firstName: fb.control(''),
      lastName: fb.control(''),
      title: fb.control(''),
      email: fb.control(''),
      emailPersonal: fb.control(''),
      primaryContact: fb.control(''),
      address1: fb.control(''),
      address2: fb.control(''),
      city: fb.control(''),
      state: fb.control(''),
      county: fb.control(''),
      zip: fb.control(''),
      web: fb.control(''),
      preferredCom: fb.control(''),
      workPhone: fb.control(''),
      mobilePhone: fb.control(''),
      mobilePhone2: fb.control(''),
      homePhone: fb.control(''),
      fax: fb.control(''),
      mktPhone: fb.control(''),
      dontSolicit: fb.control(''),
      dontEmail: fb.control(''),
      dontCall: fb.control(''),
      dontSms: fb.control(''),
      contactType: fb.control(''),
      sourceType1: fb.control(''),
      sourceType2: fb.control(''),
    }, { updateOn: 'change' });
    return form;
  }

  get company() { return this.form.get('company'); }
  get firstName() { return this.form.get('firstName'); }
  get lastName() { return this.form.get('lastName'); }
  get title() { return this.form.get('title'); }
  get email() { return this.form.get('email'); }
  get emailPersonal() { return this.form.get('emailPersonal'); }
  get primaryContact() { return this.form.get('primaryContact'); }
  get address1() { return this.form.get('address1'); }
  get address2() { return this.form.get('address2'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get county() { return this.form.get('county'); }
  get zip() { return this.form.get('zip'); }
  get web() { return this.form.get('web'); }
  get preferredCom() { return this.form.get('preferredCom'); }
  get workPhone() { return this.form.get('workPhone'); }
  get mobilePhone() { return this.form.get('mobilePhone'); }
  get mobilePhone2() { return this.form.get('mobilePhone2'); }
  get homePhone() { return this.form.get('homePhone'); }
  get fax() { return this.form.get('fax'); }
  get mktPhone() { return this.form.get('mktPhone'); }
  get dontSolicit() { return this.form.get('dontSolicit'); }
  get dontEmail() { return this.form.get('dontEmail'); }
  get dontCall() { return this.form.get('dontCall'); }
  get dontSms() { return this.form.get('dontSms'); }
  get contactType() { return this.form.get('contactType'); }
  get sourceType1() { return this.form.get('sourceType1'); }
  get sourceType2() { return this.form.get('sourceType2'); }

  submit(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
    this.service.create([
      { key: 'Company', value: this.company.value },
      { key: 'NameFirst', value: this.firstName.value },
      { key: 'NameLast', value: this.lastName.value },
      { key: 'title', value: this.title.value },
      { key: 'Email1', value: this.email.value },
      { key: 'Email2', value: this.emailPersonal.value },
      { key: 'IsPrimary', value: this.primaryContact.value },
      { key: 'Address1CO', value: this.address1.value },
      { key: 'Address2CO', value: this.address2.value },
      { key: 'AddCityCO', value: this.city.value },
      { key: 'AddStateCO', value: this.state.value },
      { key: 'AddCountyCO', value: this.county.value },
      { key: 'AddZipCO', value: this.zip.value },
      { key: 'WebAddress', value: this.web.value },
      { key: 'Preferred_Contact', value: this.preferredCom.value },
      { key: 'PhoneWork', value: this.workPhone.value },
      { key: 'Phonemobile', value: this.mobilePhone.value },
      { key: 'Phonemobileco', value: this.mobilePhone2.value },
      { key: 'PhoneHome', value: this.homePhone.value },
      { key: 'PhoneFax', value: this.fax.value },
      { key: 'mktleadphonenumb', value: this.mktPhone.value },
      { key: 'DoNotSolicit', value: this.dontSolicit.value },
      { key: 'DoNotEmail', value: this.dontEmail.value },
      { key: 'DoNotPhone', value: this.dontCall.value },
      { key: 'DoNotSMS', value: this.dontSms.value },
      { key: 'ContactType', value: this.contactType.value },
      { key: 'MKTSource1', value: this.sourceType1.value },
      { key: 'MKTSource2', value: this.sourceType2.value },
    ]).subscribe(() => {
      this.submitted = true;
      this.success = true;
      setTimeout(() => {
        this.router.navigate(['/pages/contacts/list/']);
      }, 1000 * 2);
    }, () => {
      this.submitted = true;
      this.success = false;
    });
  }
}
