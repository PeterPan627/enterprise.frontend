import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../../../../../../@core/backend/common/services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { User, UserData } from '../../../../../../../@core/interfaces/common/users';
import { ROLES } from '../../../../../../../@auth/roles';
import { NbRoleProvider } from '@nebular/security';
import { getNullableDataValue, getNullableDateValue } from '../../../../../../../@core/utils/helpers';

@Component({
  selector: 'ngx-ada-lamcourt-tab',
  templateUrl: './ada-lamcourt-tab.component.html',
  styleUrls: ['./ada-lamcourt-tab.component.scss'],
})
export class AdalamcourtTabComponent implements OnInit {
  accountName: '';
  form: FormGroup;
  users: User[] = [];
  private role: string | string[] = [];
  @Input() service: ContactService;
  @Input() data: Observable<any>;


  constructor(
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
    this.loadAccountTestData(this.form);
  }

  loadAccountData(form: FormGroup, response: Observable<any>) {
    response.subscribe((data) => {
      this.accountName = data.companyName;
      this.setFormValues(form, data);
    });
  }

  loadAccountTestData(form: FormGroup) {
    const data = {
      tentativeRuling: 'TentativeRuling',
      judgeName: '1',
      assigned: '2',
      date: new Date(),
      completedDate: new Date(),
      phone: 'phone',
      department: 'department',
      caseNumber: 'caseNumber',
      courtHouse: '2',
      judge: 'judge',
      statJudge: 'statJudge',
      company: 'company',
      email: 'email',
      address1: 'address1',
      city: 'city',
      state: 'state',
      county: '1',
      zip: 'zip',
      contactType: 'contactType',
      contactId: 'contactId',
      createDate: new Date(),
      notes: 'notes',
      removeFed: new Date(),
    };
    this.setFormValues(form, data);
  }

  isAdmin() {
    return this.role.includes(ROLES.ADMIN);
  }

  initForm(fb: FormBuilder): FormGroup {
    const form = fb.group({
      judgeName: fb.control(''),
      tentativeRuling: fb.control(''),
      assigned: fb.control(''),
      date: fb.control(''),
      completedDate: fb.control(''),
      phone: fb.control(''),
      department: fb.control(''),
      caseNumber: fb.control(''),
      courtHouse: fb.control(''),
      judge: fb.control(''),
      statJudge: fb.control(''),
      company: fb.control(''),
      email: fb.control(''),
      address1: fb.control(''),
      city: fb.control(''),
      state: fb.control(''),
      county: fb.control(''),
      zip: fb.control(''),
      contactType: fb.control(''),
      contactId: fb.control(''),
      createDate: fb.control(''),
      notes: fb.control(''),
      removeFed: fb.control(''),
    }, { updateOn: 'blur' });
    return form;
  }

  setFormValues(form: FormGroup, data: any) {
    form.setValue({
      completedDate: getNullableDataValue(data.completedDate, ''),
      date: getNullableDataValue(data.date),
      assigned: getNullableDataValue(data.assigned, ''),
      judgeName: getNullableDataValue(data.judgeName, ''),
      tentativeRuling: getNullableDataValue(data.tentativeRuling, ''),
      courtHouse: getNullableDataValue(data.courtHouse),
      caseNumber: getNullableDataValue(data.caseNumber, ''),
      department: getNullableDataValue(data.department, ''),
      phone: getNullableDataValue(data.phone, ''),
      removeFed: getNullableDataValue(data.removeFed, ''),
      judge: getNullableDataValue(data.judge, ''),
      statJudge: getNullableDataValue(data.statJudge, ''),
      company: getNullableDataValue(data.companyName, ''),
      address1: getNullableDataValue(data.address1, ''),
      zip: getNullableDataValue(data.zip, ''),
      city: getNullableDataValue(data.city, ''),
      state: getNullableDataValue(data.state, ''),
      county: getNullableDataValue(data.county, ''),
      email: getNullableDataValue(data.email, ''),
      contactType: getNullableDataValue(data.clientType, ''),
      contactId: getNullableDataValue(data.contactId, ''),
      createDate: getNullableDateValue(data.createDate, ''),
      notes: getNullableDataValue(data.notes, ''),
    });

  }
}
