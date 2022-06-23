

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { NbToastrService } from '@nebular/theme';
import { UserData, User } from '../../../@core/interfaces/common/users';
import { EMAIL_PATTERN, NUMBERS_PATTERN } from '../../../@auth/components';
import { ROLES } from '../../../@auth/roles';
import { NbRoleProvider } from '@nebular/security';
import { UserRolesService } from '../../../@core/backend/common/services/user-roles.service';


export enum UserFormMode {
  VIEW = 'View',
  EDIT = 'Edit',
  ADD = 'Add',
  EDIT_SELF = 'EditSelf',
}

@Component({
  selector: 'ngx-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.scss'],
})
export class UserEditPageComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  private UserRole: string | string[] = [];
  listOfRoles: string[] = [];

  protected readonly unsubscribe$ = new Subject<void>();

  get crmPhoneNumber() { return this.userForm.get('crmPhoneNumber'); }

  get routingIncomingCalls() { return this.userForm.get('routingIncomingCalls'); }

  get forwardCalls() { return this.userForm.get('forwardCalls'); }

  get forwardTo() { return this.userForm.get('forwardTo'); }

  get callWhisper() { return this.userForm.get('callWhisper'); }

  get recordCalls() { return this.userForm.get('recordCalls'); }

  get employType() { return this.userForm.get('employType'); }

  get firstName() { return this.userForm.get('firstName'); }

  get lastName() { return this.userForm.get('lastName'); }

  get title() { return this.userForm.get('title'); }

  get email() { return this.userForm.get('email'); }

  get region() { return this.userForm.get('region'); }

  get division() { return this.userForm.get('division'); }

  get area() { return this.userForm.get('area'); }

  get Street() { return this.userForm.get('address').get('street'); }

  get state() { return this.userForm.get('address').get('state'); }

  get City() { return this.userForm.get('address').get('City'); }

  get zip() { return this.userForm.get('address').get('zip'); }

  get mobilePhone() { return this.userForm.get('mobilePhone'); }

  get department() { return this.userForm.get('department'); }

  get teams() { return this.userForm.get('teams'); }

  get tenant() { return this.userForm.get('tenant'); }

  get portalAccess() { return this.userForm.get('portalAccess'); }

  get accManager() { return this.userForm.get('accManager'); }

  get areaManager() { return this.userForm.get('areaManager'); }

  get regManager() { return this.userForm.get('regManager'); }

  get vicePresident() { return this.userForm.get('vicePresident'); }

  get admin() { return this.userForm.get('admin'); }

  get superAdmin() { return this.userForm.get('superAdmin'); }

  get globalAdmin() { return this.userForm.get('globalAdmin'); }

  get type() { return this.userForm.get('type'); }

  get compPercent() { return this.userForm.get('compPercent'); }

  get ranking() { return this.userForm.get('ranking'); }

  get licenseType() { return this.userForm.get('licenseType'); }

  get dateLicense() { return this.userForm.get('dateLicense'); }

  get notes() { return this.userForm.get('notes'); }

  get expdateLicense() { return this.userForm.get('expdateLicense'); }

  get password() { return this.userForm.get('password'); }

  get hPhone() { return this.userForm.get('hPhone'); }

  get emailPersonal() { return this.userForm.get('emailPersonal'); }

  get linkManager() { return this.fb.control('linkManager'); }

  get license() { return this.userForm.get('license'); }

  get contactId() { return this.userForm.get('contactId'); }



  mode: UserFormMode;
  setViewMode(viewMode: UserFormMode) {
    this.mode = viewMode;
  }

  isAdmin() {
    return this.UserRole.includes(ROLES.ADMIN);
  }

  constructor(private usersService: UserData,
    private userRoleService: UserRolesService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: NbToastrService,
    private fb: FormBuilder,
    private roleService: NbRoleProvider) {
  }

  ngOnInit(): void {
    this.initUserForm();
    this.loadUserData();

    this.roleService.getRole().subscribe(r => {
      if (r.includes(ROLES.ADMIN)) {
        this.UserRole = r;
      }
    });

    this.listOfRoles = this.getListOfRoles();
  }

  initUserForm() {
    this.userForm = this.fb.group({
      crmPhoneNumber: this.fb.control(''),
      routingIncomingCalls: this.fb.control(''),
      forwardCalls: this.fb.control(''),
      forwardTo: this.fb.control(''),
      callWhisper: this.fb.control(''),
      recordCalls: this.fb.control(''),
      hPhone: this.fb.control(''),
      employType: this.fb.control(''),
      title: this.fb.control(''),
      region: this.fb.control(''),
      division: this.fb.control(''),
      area: this.fb.control(''),
      department: this.fb.control(''),
      teams: this.fb.control(''),
      tenant: this.fb.control(''),
      portalAccess: this.fb.control(''),
      role: this.fb.control(''),
      password: this.fb.control(''),
      contactId: this.fb.control(''),
      emailPersonal: this.fb.control('', [
        Validators.required,
        Validators.pattern(EMAIL_PATTERN),
      ]),
      linkManager: this.fb.control(''),
      accManager: this.fb.control(''),
      areaManager: this.fb.control(''),
      regManager: this.fb.control(''),
      vicePresident: this.fb.control(''),
      admin: this.fb.control(''),
      superAdmin: this.fb.control(''),
      globalAdmin: this.fb.control(''),
      type: this.fb.control(''),
      compPercent: this.fb.control(''),
      ranking: this.fb.control(''),
      licenseType: this.fb.control(''),
      license: this.fb.control(''),
      dateLicense: this.fb.control(''),
      expdateLicense: this.fb.control(''),
      notes: this.fb.control(''),
      mobilePhone: this.fb.control('', [
        Validators.required,
      ]),
      firstName: this.fb.control('', [Validators.minLength(3), Validators.maxLength(20)]),
      lastName: this.fb.control('', [Validators.minLength(3), Validators.maxLength(20)]),
      login: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      age: this.fb.control(''),
      email: this.fb.control('', [
        Validators.required,
        Validators.pattern(EMAIL_PATTERN),
      ]),
      address: this.fb.group({
        Street: this.fb.control(''),
        City: this.fb.control(''),
        zip: this.fb.control(''),
        state: this.fb.control(''),
      }),
    });
  }

  get canEdit(): boolean {
    return this.mode !== UserFormMode.VIEW;
  }

  getListOfRoles(): string[] {
    const listOfRoles = Object.values(ROLES);
    return listOfRoles.filter(a => a !== ROLES.SUPER_ADMIN && a !== ROLES.GLOBAL_ADMIN);
  }

  loadUserData() {
    const id = this.route.snapshot.paramMap.get('id');
    const isProfile = this.route.snapshot.queryParamMap.get('profile');
    if (isProfile) {
      this.setViewMode(UserFormMode.EDIT_SELF);
      this.loadUser();
    } else {
      if (id) {
        this.setViewMode(UserFormMode.EDIT);
        this.loadUser(id);
      } else {
        this.setViewMode(UserFormMode.ADD);
      }
    }
  }

  loadUser(id?) {
    const loadUser = this.mode === UserFormMode.EDIT_SELF
      ? this.usersService.getCurrentUser() : this.usersService.get(id);
    loadUser
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user) => {
        this.userForm.setValue({
          contactId: user.id,
          role: false, //true?
          firstName: user.firstName ? user.firstName : '',
          lastName: user.lastName ? user.lastName : '',
          login: user.login ? user.login : '',
          mobilePhone: user.mobilePhone ? user.mobilePhone : '',
          hPhone: user.hPhone ? user.hPhone : '',
          employType: user.employType ? user.employType : '',
          department: user.department ? user.department : '',
          emailPersonal: user.emailPersonal ? user.emailPersonal : '',
          type: user.type ? user.type : '',
          compPercent: user.compPercent ? user.compPercent : '',
          ranking: user.ranking ? user.ranking : '',
          licenseType: user.licenseType ? user.licenseType : '',
          dateLicense: user.dateLicense ? user.dateLicense : '',
          expdateLicense: user.expdateLicense ? user.expdateLicense : '',
          notes: user.notes ? user.notes : '',
          title: user.title ? user.title : '',
          email: user.email,
          address: {
            state: (user.address && user.address.state) ? user.address.state : '',
            Street: (user.address && user.address.Street) ? user.address.Street : '',
            City: (user.address && user.address.city) ? user.address.city : '',
            zip: (user.address && user.address.zipCode) ? user.address.zipCode : '',
          },
          crmPhoneNumber: 'CRM Phone Number',
          routingIncomingCalls: 'crmPhoneReco',
          forwardCalls: 'dontForward',
          forwardTo: 'personalNumber',
          callWhisper: 'whisperDisable',
          recordCalls: 'recordDisable',
          region: '2',
          division: '1',
          area: '2',
          teams: '1',
          tenant: '2',
          portalAccess: '1',
          password: 'password',
          linkManager: 'linkManager',
          accManager: 'accManager',
          areaManager: 'areaManager',
          regManager: 'regManager',
          vicePresident: 'vicePresident',
          admin: 'admin',
          superAdmin: 'superAdmin',
          globalAdmin: 'globalAdmin',
          license: 'license',
          age: 'number',



        });




        const loadUserRoles = this.userRoleService.get(id);
        loadUserRoles
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((userRoles) => {
            this.userForm.patchValue({
              role: userRoles.roles ? userRoles.roles : '',
            });
          });



        // this is a place for value changes handling
        // this.userForm.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe((value) => {   });
      });
  }

  convertToUser(value: any): User {
    const user: User = value;
    return user;
  }

  save() {
    const user: User = this.convertToUser(this.userForm.value);

    let observable = new Observable<User>();
    if (this.mode === UserFormMode.EDIT_SELF) {
      observable = this.usersService.updateCurrent(user);
    } else {
      observable = user.id
        ? this.usersService.update(user)
        : this.usersService.create(user);
    }

    observable
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.toasterService.success('', `Item ${this.mode === UserFormMode.ADD ? 'created' : 'updated'}!`);
        this.back();
      });
  }

  back() {
    this.router.navigate(['/pages']);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
