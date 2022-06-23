import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { NbDialogService, NbDialogConfig } from '@nebular/theme';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { NbRoleProvider } from '@nebular/security';
import { OpportunityService } from '../../../../@core/backend/common/services/opportunity.service';
import { User, UserData } from '../../../../@core/interfaces/common/users';
import { ROLES } from '../../../../@auth/roles';
import { CustomValidator } from '../../../../@core/backend/common/services/validation.service';
import { getNullableBoolValue, getNullableDataValue, getNullableDateValue, getSelectorValue } from '../../../../@core/utils/helpers';
import { TransType } from '../../../../@core/transtype';
@Component({
  selector: 'ngx-client-detail-header',
  templateUrl: './client-detail-header.component.html',
  styleUrls: ['./client-detail-header.component.scss'],
})
export class ClientDetailHeaderComponent implements OnInit {
  TransType = TransType;
  @Input() service: OpportunityService;
  @Input() data: Observable<any>;
  @Output() transTypeChanged = new EventEmitter<string>();
  public client: Client = {
    firstName: '',
    lastName: '',
    opportunityId: '',
    clientId: '',
  };
  users: User[] = [];
  private role: string | string[] = [];
  transTypeOptions: { display: string, value: string }[] = [
    { display: 'Qualifying', value: TransType.Qualifying },
    { display: 'Law ADA AB', value: TransType.Law_Ada_Ab },
    { display: 'Law ADA Other', value: TransType.Law_Ada_Other },
    { display: 'Law ADAR', value: TransType.Law_Adar },
    { display: 'Law ADA Web', value: TransType.Law_Ada_Web },
    { display: 'Law FDCPA', value: TransType.Law_Fdcpa },
    { display: 'Law GenLit', value: TransType.Law_GenLit },
    { display: 'Law Hourly', value: TransType.Law_Hourly },
    { display: 'Law HR LenderLit', value: TransType.Law_Hr_LenderLit },
    { display: 'Law HR LenderLit IL', value: TransType.Law_Hr_LenderLit_IL },
    { display: 'Law HR LoanMod', value: TransType.Law_Hr_LoanMod },
    { display: 'Law P65', value: TransType.Law_P65 },
    { display: 'Law PI', value: TransType.Law_Pi },
    { display: 'Law TCPA', value: TransType.Law_Tcpa },

  ];
  form: FormGroup;
  protected readonly unsubscribe$ = new Subject<void>();
  constructor(
    private dialogService: NbDialogService,
    private fb: FormBuilder,
    private usersService: UserData,
    private roleService: NbRoleProvider,
  ) { }

  isAdmin() {
    return this.role.includes(ROLES.ADMIN);
  }

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
    this.loadUserData(this.form, this.data, this.service);
  }

  loadUserData(form: FormGroup, response: Observable<any>, service: OpportunityService) {
    response.subscribe((data) => {
      this.client = this.loadUser(data);
      this.setFormValues(form, data, service);
    });
  }

  getCurrentTransType(): string {
    const currentTranstype = this.transType.value as string;
    if (currentTranstype === TransType.Law_Ada_Ab) {
      return TransType.Law_Ada_Ab;
    } else if (currentTranstype === TransType.Law_P65) {
      return TransType.Law_P65;
    } else if (currentTranstype === TransType.Law_Pi) {
      return TransType.Law_Pi;
    }
    return TransType.Other;
  }

  private setIntakeFormData(opportunityId: string) {
    return {
      email: {
        table: 'ClientInfo',
        column: 'EmailClient',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      leadPhone: {
        table: 'SalesMarketing',
        column: 'mktleadphonenumb',
        identifier: opportunityId,
        key: 'opportunityId',
      },
      status: {
        table: 'SalesStage',
        column: 'aStage',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      transType: {
        table: 'opportunity',
        column: 'TRANSTYPE',
        identifier: opportunityId,
        key: 'OpportunityId',
      },

      firstName: {
        table: 'ClientInfo',
        column: 'ClientFirst',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      middleName: {
        table: 'ClientInfo',
        column: 'ClientMiddle',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      lastName: {
        table: 'ClientInfo',
        column: 'ClientLast',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      clientId: {
        table: 'opportunity',
        column: 'ClientId',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Attorney1Name: {
        table: 'parties_involved',
        column: 'Attorney1Name',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      fax: {
        table: 'ClientInfo',
        column: 'ClientFax',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      homePhone: {
        table: 'ClientInfo',
        column: 'ClientHome',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      workPhone: {
        table: 'ClientInfo',
        column: 'ClientWork',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      mobilePhone: {
        table: 'ClientInfo',
        column: 'ClientMobile',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      address: {
        table: 'ClientInfo',
        column: 'ClientHomeAdd',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      address2: {
        table: 'ClientInfo',
        column: 'ClientHomeAdd2',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      zipcode: {
        table: 'ClientInfo',
        column: 'ClientHomePostal',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      city: {
        table: 'ClientInfo',
        column: 'ClientHomeCity',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      state: {
        table: 'ClientInfo',
        column: 'ClientHomeState',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      county: {
        table: 'ClientInfo',
        column: 'ClientHomeCounty',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      source1: {
        table: 'salesmarketing',
        column: 'MKTsource1',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      source2: {
        table: 'salesmarketing',
        column: 'MKTsource2',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      source3: {
        table: 'salesmarketing',
        column: 'MKTsource3',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      accountManagerId: {
        table: 'parties_involved',
        column: 'UserO1007',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      notes: {
        table: 'opportunity',
        column: 'notes',
        identifier: opportunityId,
        key: 'OpportunityId',

      },
    };
  }

  setFormValues(form: FormGroup, data: any, service: OpportunityService) {
    form.setValue({
      Attorney1Name: getNullableDataValue(data.attorneyName, 'Not available'),
      transType: getSelectorValue(data.transType, this.transTypeOptions.map(o => o.value), TransType.Other),
      accountManagerId: data.accountManagerId ? data.accountManagerId : '',
      accountManager: data.accountManager ? data.accountManager : '',
      status: data.status ? data.status : '',
      status_modified: '',
      firstName: data.firstName ? data.firstName : '',
      middleName: data.middleName ? data.middleName : '',
      lastName: data.lastName ? data.lastName : '',
      mobilePhone: data.mobilePhone ? data.mobilePhone : '',
      homePhone: data.homePhone ? data.homePhone : '',
      workPhone: data.workPhone ? data.workPhone : '',
      email: data.email ? data.email : '',
      fax: data.fax ? data.fax : '',
      dateOfBirth: '',
      clientId: data.clientId ? data.clientId : '',
      address: data.address ? data.address : '',
      address2: data.address2 ? data.address2 : '',
      zipcode: data.zipcode ? data.zipcode : '',
      city: data.city ? data.city : '',
      state: data.state ? data.state : '',
      county: data.county ? data.county : '',
      source1: data.source1 ? data.source1 : '',
      source2: data.source2 ? data.source2 : '',
      source3: data.source3 ? data.source3 : '',
      notes: data.notes ? data.notes : '',
      leadPhone: data.leadPhone ? data.leadPhone : '',
    });
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

  loadUser(data: any): Client {
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      opportunityId: data.opportunityId,
      clientId: data.clientId,
    };
  }

  initForm(fb: FormBuilder): FormGroup {
    const form = fb.group({
      clientId: fb.control(''),
      Attorney1Name: fb.control(''),
      transType: fb.control(''),
      accountManagerId: fb.control(''),
      accountManager: fb.control(''),
      status: fb.control(''),
      status_modified: fb.control(''),
      firstName: fb.control(''),
      middleName: fb.control(''),
      lastName: fb.control(''),
      mobilePhone: fb.control(''),
      workPhone: fb.control(''),
      fax: fb.control(''),
      email: fb.control(''),
      homePhone: fb.control(''),
      dateOfBirth: fb.control(''),
      source1: fb.control(''),
      source2: fb.control(''),
      source3: fb.control(''),
      address: fb.control(''),
      address2: fb.control(''),
      zipcode: fb.control(''),
      city: fb.control(''),
      state: fb.control(''),
      county: fb.control(''),
      notes: fb.control(''),
      leadPhone: fb.control(''),
    }, { updateOn: 'blur' });

    return form;
  }

  showClientStage(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }


  showSMSPopout(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, new NbDialogConfig({
      hasBackdrop: true,
      closeOnBackdropClick: false,
      closeOnEsc: true,
      autoFocus: true,
      hasScroll: false,
    }));
  }

  onTransTypeChanged(event) {
    const changed = event.target.value as string;
    this.transTypeChanged.emit(changed);
  }

  get accountManagerId() { return this.form.get('accountManagerId'); }
  get accountManager() { return this.form.get('accountManager'); }
  get status() { return this.form.get('status'); }
  get status_modified() { return this.form.get('status_modified'); }
  get firstName() { return this.form.get('firstName'); }
  get middleName() { return this.form.get('middleName'); }
  get lastName() { return this.form.get('lastName'); }
  get mobilePhone() { return this.form.get('mobilePhone'); }
  get homePhone() { return this.form.get('homePhone'); }
  get workPhone() { return this.form.get('workPhone'); }
  get email() { return this.form.get('email'); }
  get fax() { return this.form.get('fax'); }
  get dateOfBirth() { return this.form.get('dateOfBirth'); }
  get source1() { return this.form.get('source1'); }
  get source2() { return this.form.get('source2'); }
  get source3() { return this.form.get('source3'); }
  get address() { return this.form.get('address'); }
  get address2() { return this.form.get('address2'); }
  get zipcode() { return this.form.get('zipcode'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get county() { return this.form.get('county'); }
  get notes() { return this.form.get('notes'); }
  get leadPhone() { return this.form.get('leadPhone'); }
  get transType() { return this.form.get('transType'); }
  get Attorney1Name() { return this.form.get('Attorney1Name'); }
  get clientId() { return this.form.get('clientId'); }


  refresh(ref) {
    ref.close();
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}

interface Client {
  firstName: string;
  lastName: string;
  opportunityId: string;
  clientId: string;
}

