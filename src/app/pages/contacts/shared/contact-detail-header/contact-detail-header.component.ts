import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';
import { NbRoleProvider } from '@nebular/security';
import { User, UserData } from '../../../../@core/interfaces/common/users';
import { ContactService } from '../../../../@core/backend/common/services/contact.service';
import { ROLES } from '../../../../@auth/roles';
import { CustomValidator } from '../../../../@core/backend/common/services/validation.service';
import { getNullableBoolValue, getNullableDataValue, getNullableDateValue } from '../../../../@core/utils/helpers';

@Component({
  selector: 'ngx-contact-detail-header',
  templateUrl: './contact-detail-header.component.html',
  styleUrls: ['./contact-detail-header.component.scss'],
})
export class ContactDetailHeaderComponent implements OnInit {
  contactName: '';
  form: FormGroup;
  users: User[] = [];
  private role: string | string[] = [];
  @Input() service: ContactService;
  @Input() data: Observable<any>;

  constructor(
    private dialogService: NbDialogService,
    private fb: FormBuilder,
    private usersService: UserData,
    private roleService: NbRoleProvider,
  ) { }

  ngOnInit() {
    this.roleService.getRole().subscribe(r => {
      if (r.includes(ROLES.ADMIN)) {
        this.role = r;
        this.usersService.list(1, 90000).subscribe(u => {
          const items: User[] = u.items;
          this.users = items.sort((a, b) => {
            if (a.lastName > b.lastName) {
              return -1;
            }
            if (b.lastName > a.lastName) {
              return 1;
            }
            if (b.lastName === a.lastName) {
              if (a.firstName > b.firstName) {
                return -1;
              }
              if (b.firstName > a.firstName) {
                return 1;
              }
            }
            return 0;
          });
        });
      }
    });
    this.form = this.initForm(this.fb);
    this.loadAccountData(this.form, this.data, this.service);
  }

  loadAccountData(form: FormGroup, response: Observable<any>, service: ContactService) {
    response.subscribe((data) => {
      this.contactName = data.companyName;
      this.setFormValues(form, data, service);
    });
  }

  isAdmin() {
    return this.role.includes(ROLES.ADMIN);
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
      salesStage: fb.control(''),
      stageModDate: fb.control(''),
      accountManager: fb.control(''),
      accountManagerId: fb.control(''),
      team: fb.control(''),
      primaryEntity: fb.control(''),
      sourceType1: fb.control(''),
      sourceType2: fb.control(''),
      contactId: fb.control(''),
      createDate: fb.control(''),
      notes: fb.control(''),
    }, { updateOn: 'blur' });
    return form;
  }

  setFormValues(form: FormGroup, data: any, service: ContactService) {
    form.setValue({
      company: getNullableDataValue(data.companyName, ''),
      firstName: getNullableDataValue(data.firstName, ''),
      lastName: getNullableDataValue(data.lastName, ''),
      title: getNullableDataValue(data.title, ''),
      emailPersonal: getNullableDataValue(data.emailPersonal, ''),
      fax: getNullableDataValue(data.fax, ''),
      primaryContact: getNullableBoolValue(data.primaryContact, false),
      preferredCom: getNullableDataValue(data.preferredCom, ''),
      address1: getNullableDataValue(data.address1, ''),
      address2: getNullableDataValue(data.address2, ''),
      zip: getNullableDataValue(data.zipcode, ''),
      city: getNullableDataValue(data.city, ''),
      state: getNullableDataValue(data.state, ''),
      county: getNullableDataValue(data.county, ''),
      workPhone: getNullableDataValue(data.workPhone, ''),
      email: getNullableDataValue(data.email, ''),
      web: getNullableDataValue(data.web, ''),
      mobilePhone: getNullableDataValue(data.mobilePhone, ''),
      mobilePhone2: getNullableDataValue(data.mobilePhone2, ''),
      homePhone: getNullableDataValue(data.homePhone, ''),
      mktPhone: getNullableDataValue(data.mktPhone, ''),
      dontSolicit: getNullableBoolValue(data.dontSolicit, false),
      dontCall: getNullableBoolValue(data.dontCall, false),
      dontSms: getNullableBoolValue(data.dontSms, false),
      dontEmail: getNullableBoolValue(data.dontEmail, false),
      contactType: getNullableDataValue(data.clientType, ''),
      salesStage: getNullableDataValue(data.stage, ''),
      stageModDate: getNullableDateValue(data.stageModDate, ''),
      team: getNullableDataValue(data.team, ''),
      primaryEntity: getNullableDataValue(data.primaryEntity, ''),
      sourceType1: getNullableDataValue(data.sourceType1, ''),
      sourceType2: getNullableDataValue(data.sourceType2, ''),
      contactId: getNullableDataValue(data.contactId, ''),
      createDate: getNullableDateValue(data.createDate, ''),
      accountManager: getNullableDataValue(data.accountManager, ''),
      accountManagerId: getNullableDataValue(data.accountManagerId, ''),
      notes: getNullableDataValue(data.notes, ''),
    });

    const intakeFormData = this.setIntakeFormData(data.contactId, data.addressId);
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

  setIntakeFormData(contactId: string, addressId: string) {
    return {
      company: {
        table: 'Contact',
        column: 'companyName',
        identifier: contactId,
        key: 'ContactId',
      },
      firstName: {
        table: 'Contact',
        column: 'firstname',
        identifier: contactId,
        key: 'ContactId',
      },
      lastName: {
        table: 'Contact',
        column: 'lastname',
        identifier: contactId,
        key: 'ContactId',
      },
      title: {
        table: 'Contact',
        column: 'title',
        identifier: contactId,
        key: 'ContactId',
      },
      email: {
        table: 'Contact',
        column: 'email',
        identifier: contactId,
        key: 'ContactId',
      },
      emailPersonal: {
        table: 'Contact',
        column: 'email3',
        identifier: contactId,
        key: 'ContactId',
      },
      primaryContact: {
        table: 'Contact',
        column: 'isPrimary',
        identifier: contactId,
        key: 'ContactId',
      },
      address1: {
        table: 'Address',
        column: 'Address1',
        identifier: addressId,
        key: 'addressId',
      },
      address2: {
        table: 'Address',
        column: 'Address2',
        identifier: addressId,
        key: 'addressId',
      },
      city: {
        table: 'Address',
        column: 'City',
        identifier: addressId,
        key: 'addressId',
      },
      state: {
        table: 'Address',
        column: 'State',
        identifier: addressId,
        key: 'addressId',
      },
      county: {
        table: 'Address',
        column: 'County',
        identifier: addressId,
        key: 'addressId',
      },
      zip: {
        table: 'Address',
        column: 'Postalcode',
        identifier: addressId,
        key: 'addressId',
      },
      web: {
        table: 'Contact',
        column: 'WebAddress',
        identifier: contactId,
        key: 'ContactId',
      },
      preferredCom: {
        table: 'Contact',
        column: 'Preferred_Contact',
        identifier: contactId,
        key: 'ContactId',
      },
      workPhone: {
        table: 'Contact',
        column: 'WorkPhone',
        identifier: contactId,
        key: 'ContactId',
      },
      mobilePhone: {
        table: 'Contact',
        column: 'Mobile',
        identifier: contactId,
        key: 'ContactId',
      },
      mobilePhone2: {
        table: 'Contact',
        column: 'Mobile2',
        identifier: contactId,
        key: 'ContactId',
      },
      homePhone: {
        table: 'Contact',
        column: 'HomePhone',
        identifier: contactId,
        key: 'ContactId',
      },
      fax: {
        table: 'Contact',
        column: 'Fax',
        identifier: contactId,
        key: 'ContactId',
      },
      mktPhone: {
        table: 'Contact',
        column: 'MKTPhoneNumb',
        identifier: contactId,
        key: 'ContactId',
      },
      dontSolicit: {
        table: 'Contact',
        column: 'DoNotSolicit',
        identifier: contactId,
        key: 'ContactId',
      },
      dontEmail: {
        table: 'Contact',
        column: 'DoNotEmail',
        identifier: contactId,
        key: 'ContactId',
      },
      dontCall: {
        table: 'Contact',
        column: 'DoNotPhone',
        identifier: contactId,
        key: 'ContactId',
      },
      dontSms: {
        table: 'Contact',
        column: 'DoNotSMS',
        identifier: contactId,
        key: 'ContactId',
      },
      contactType: {
        table: 'Contact',
        column: 'Type',
        identifier: contactId,
        key: 'ContactId',
      },
      salesStage: {
        table: 'SalesStage',
        column: 'aStage',
        identifier: contactId,
        key: 'ContactId',
      },
      stageModDate: {
        table: 'SalesStage',
        column: 'ModifyDate',
        identifier: contactId,
        key: 'ContactId',
      },
      accountManager: {
        table: 'Contact',
        column: 'donotupdate',
        identifier: contactId,
        key: 'ContactId',
      },
      accountManagerId: {
        table: 'Contact',
        column: 'accountmanagerId',
        identifier: contactId,
        key: 'ContactId',
      },
      team: {
        table: 'Contact',
        column: 'donotupdate',
        identifier: contactId,
        key: 'ContactId',
      },
      primaryEntity: {
        table: 'Contact',
        column: 'donotupdate',
        identifier: contactId,
        key: 'ContactId',
      },
      sourceType1: {
        table: 'Contact',
        column: 'MKTSOURCETYPE',
        identifier: contactId,
        key: 'ContactId',
      },
      sourceType2: {
        table: 'Contact',
        column: 'MKTSource2',
        identifier: contactId,
        key: 'ContactId',
      },
      contactId: {
        table: 'Contact',
        column: 'donotupdate',
        identifier: contactId,
        key: 'ContactId',
      },
      createDate: {
        table: 'Contact',
        column: 'donotupdate',
        identifier: contactId,
        key: 'ContactId',
      },
      notes: {
        table: 'Contact',
        column: 'notes',
        identifier: contactId,
        key: 'ContactId',
      },
    };
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
  get salesStage() { return this.form.get('salesStage'); }
  get stageModDate() { return this.form.get('stageModDate'); }
  get accountManager() { return this.form.get('accountManager'); }
  get team() { return this.form.get('team'); }
  get primaryEntity() { return this.form.get('primaryEntity'); }
  get sourceType1() { return this.form.get('sourceType1'); }
  get sourceType2() { return this.form.get('sourceType2'); }
  get contactId() { return this.form.get('contactId'); }
  get createDate() { return this.form.get('createDate'); }
  get notes() { return this.form.get('notes'); }

  refresh(ref) {
    ref.close();
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  showContactStage(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

  showSMSPopout(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

}
