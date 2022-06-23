import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { NbRoleProvider } from '@nebular/security';
import { User, UserData } from '../../../../../../@core/interfaces/common/users';
import { ContactService } from '../../../../../../@core/backend/common/services/contact.service';
import { ROLES } from '../../../../../../@auth/roles';
import { getNullableDataValue } from '../../../../../../@core/utils/helpers';

@Component({
    selector: 'ngx-mortgage-1003',
    templateUrl: './mortgage-1003.component.html',
    styleUrls: ['./mortgage-1003.component.scss'],
})
export class Mortgage1003TabComponent implements OnInit {
    contactName: '';
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
            this.contactName = data.companyName;
            this.setFormValues(form, data);
        });
    }

    loadAccountTestData(form: FormGroup) {
        const data = {
            borrowerProperName: 'First/Last Name',
            ssn: 'SSN',
            mobilePhone: 'Mobile Phone',
            email: 'Email',
            currentAddress: 'Current Address',
            own: 'Own',
            rent: 'Rent',
            years: 'Years',
            months: 'Months',
            birthDate: 'Birth Date',
            yearsSchool: 'Years in School',
            martialStatus: '1',
            numberDependants: 'Number Dependants',
            employmentName: 'Employment Name',
            employmentPhone: 'Employment Phone',
            yearsOnJob: 'Years on the Job',
            monthsOnJob: 'Months on the Job',
            jobTitle: 'Job Title',
            yearsIndustry: 'Years in the Industry',
            monthlyGross: 'Monthly Gross',
            tenNineContractor: '1099 Contractor',
            salary: 'Salary',
            hourly: 'Hourly',
            childSupport: 'Child Suppport',
            alimony: 'Alimony',
            other: 'Other',
            previousEmployerName: 'Previous Employer Name',
            previousEmployerPhone: 'Previous Employer Phone',
            position: '1',
            previousYears: 'Previous Years',
            previousMonth: 'Previous Month',
            previousPhone: 'Previous Phone',
            COborrowerName: 'Co Name',
            COborrowerProperName: 'CO Proper Name',
            COssn: 'Co SSN',
            COmobilePhone: 'Co Mobile Phone',
            COemail: 'Co Email',
            COcurrentAddress: 'Co Current Address',
            COown: 'Co Own',
            COrent: 'Co Rent',
            COyears: 'Co Years',
            COmonths: 'Co Months',
            CObirthDate: 'Co Birth Date',
            COyearsSchool: 'Co Years in School',
            COmartialStatus: '2',
            COnumberDependants: 'Co Number Dependants',
            COemploymentName: 'Co Employment Name',
            COemploymentPhone: 'CO Employment Phone',
            COyearsOnJob: 'Co Years on the Job',
            COmonthsOnJob: 'Co Months on the Job',
            COjobTitle: 'Co Job Title',
            COyearsIndustry: 'Co Years in the Industry',
            COmonthlyGross: 'Co Monthly Gross',
            COtenNineContractor: 'Co 1099 Contractor',
            COsalary: 'Co Salary',
            COhourly: 'Co Hourly',
            COchildSupport: 'Co Child Suppport',
            COalimony: 'Co Alimony',
            COother: 'Co Other',
            COpreviousEmployerName: 'Co Previous EmployerName',
            COposition: 'Co Position',
            COpreviousYears: 'Co Previous Years',
            COpreviousMonth: 'Co Previous Month',
            cashBank: 'Cash in Bank/Savings',
            retirement401k: '401k Retirement Fund',
            assetOther: 'Other',
            sig1: 'Signature',
            sig2: 'Signature',
        };
        this.setFormValues(form, data);
    }

    isAdmin() {
        return this.role.includes(ROLES.ADMIN);
    }

    initForm(fb: FormBuilder): FormGroup {
        const form = fb.group({
            borrowerProperName: fb.control(''),
            ssn: fb.control(''),
            mobilePhone: fb.control(''),
            email: fb.control(''),
            currentAddress: fb.control(''),
            own: fb.control(''),
            rent: fb.control(''),
            years: fb.control(''),
            months: fb.control(''),
            birthDate: fb.control(''),
            yearsSchool: fb.control(''),
            martialStatus: fb.control(''),
            numberDependants: fb.control(''),
            employmentName: fb.control(''),
            employmentPhone: fb.control(''),
            COjobTitle: fb.control(''),
            yearsOnJob: fb.control(''),
            monthsOnJob: fb.control(''),
            jobTitle: fb.control(''),
            yearsIndustry: fb.control(''),
            monthlyGross: fb.control(''),
            tenNineContractor: fb.control(''),
            salary: fb.control(''),
            hourly: fb.control(''),
            childSupport: fb.control(''),
            alimony: fb.control(''),
            other: fb.control(''),
            previousEmployerName: fb.control(''),
            previousPhone: fb.control(''),
            previousEmployerPhone: fb.control(''),
            position: fb.control(''),
            previousYears: fb.control(''),
            previousMonth: fb.control(''),
            COborrowerName: fb.control(''),
            COborrowerProperName: fb.control(''),
            COssn: fb.control(''),
            COmobilePhone: fb.control(''),
            COemail: fb.control(''),
            COcurrentAddress: fb.control(''),
            COown: fb.control(''),
            COrent: fb.control(''),
            COyears: fb.control(''),
            COmonths: fb.control(''),
            CObirthDate: fb.control(''),
            COyearsSchool: fb.control(''),
            COmartialStatus: fb.control(''),
            COnumberDependants: fb.control(''),
            COemploymentName: fb.control(''),
            COyearsOnJob: fb.control(''),
            COmonthsOnJob: fb.control(''),
            COyearsIndustry: fb.control(''),
            COmonthlyGross: fb.control(''),
            COtenNineContractor: fb.control(''),
            COsalary: fb.control(''),
            COhourly: fb.control(''),
            COchildSupport: fb.control(''),
            COalimony: fb.control(''),
            COother: fb.control(''),
            COpreviousEmployerName: fb.control(''),
            COemploymentPhone: fb.control(''),
            COposition: fb.control(''),
            COpreviousYears: fb.control(''),
            COpreviousMonth: fb.control(''),
            cashBank: fb.control(''),
            retirement401k: fb.control(''),
            assetOther: fb.control(''),
            sig1: fb.control(''),
            sig2: fb.control(''),
        }, { updateOn: 'blur' });
        return form;
    }

    setFormValues(form: FormGroup, data: any) {
        form.setValue({
            borrowerProperName: getNullableDataValue(data.borrowerProperName, ''),
            ssn: getNullableDataValue(data.ssn, ''),
            mobilePhone: getNullableDataValue(data.mobilePhone, ''),
            email: getNullableDataValue(data.email, ''),
            currentAddress: getNullableDataValue(data.currentAddress, ''),
            own: getNullableDataValue(data.own, ''),
            rent: getNullableDataValue(data.rent, ''),
            years: getNullableDataValue(data.years, ''),
            months: getNullableDataValue(data.months, ''),
            birthDate: getNullableDataValue(data.birthDate, ''),
            yearsSchool: getNullableDataValue(data.yearsSchool, ''),
            martialStatus: getNullableDataValue(data.martialStatus, ''),
            numberDependants: getNullableDataValue(data.numberDependants, ''),
            employmentName: getNullableDataValue(data.employmentName, ''),
            employmentPhone: getNullableDataValue(data.employmentPhone, ''),
            yearsOnJob: getNullableDataValue(data.yearsOnJob, ''),
            monthsOnJob: getNullableDataValue(data.monthsOnJob, ''),
            jobTitle: getNullableDataValue(data.jobTitle, ''),
            yearsIndustry: getNullableDataValue(data.yearsIndustry, ''),
            COemploymentPhone: getNullableDataValue(data.COemploymentPhone, ''),
            monthlyGross: getNullableDataValue(data.monthlyGross, ''),
            tenNineContractor: getNullableDataValue(data.tenNineContractor, ''),
            salary: getNullableDataValue(data.salary, ''),
            hourly: getNullableDataValue(data.hourly, ''),
            childSupport: getNullableDataValue(data.childSupport, ''),
            alimony: getNullableDataValue(data.alimony, ''),
            other: getNullableDataValue(data.other, ''),
            previousEmployerName: getNullableDataValue(data.previousEmployerName, ''),
            previousEmployerPhone: getNullableDataValue(data.previousEmployerPhone, ''),
            position: getNullableDataValue(data.position, ''),
            previousYears: getNullableDataValue(data.previousYears, ''),
            previousMonth: getNullableDataValue(data.previousMonth, ''),
            previousPhone: getNullableDataValue(data.previousPhone, ''),
            COborrowerName: getNullableDataValue(data.COborrowerName, ''),
            COborrowerProperName: getNullableDataValue(data.COborrowerProperName, ''),
            COssn: getNullableDataValue(data.COssn, ''),
            COmobilePhone: getNullableDataValue(data.COmobilePhone, ''),
            COemail: getNullableDataValue(data.COemail, ''),
            COcurrentAddress: getNullableDataValue(data.COcurrentAddress, ''),
            COown: getNullableDataValue(data.COown, ''),
            COrent: getNullableDataValue(data.COrent, ''),
            COyears: getNullableDataValue(data.COyears, ''),
            COmonths: getNullableDataValue(data.COmonths, ''),
            CObirthDate: getNullableDataValue(data.CObirthDate, ''),
            COyearsSchool: getNullableDataValue(data.COyearsSchool, ''),
            COmartialStatus: getNullableDataValue(data.COmartialStatus, ''),
            COnumberDependants: getNullableDataValue(data.COnumberDependants, ''),
            COemploymentName: getNullableDataValue(data.COemploymentName, ''),
            COyearsOnJob: getNullableDataValue(data.COyearsOnJob, ''),
            COmonthsOnJob: getNullableDataValue(data.COmonthsOnJob, ''),
            COjobTitle: getNullableDataValue(data.COjobTitle, ''),
            COyearsIndustry: getNullableDataValue(data.COyearsIndustry, ''),
            COmonthlyGross: getNullableDataValue(data.COmonthlyGross, ''),
            COtenNineContractor: getNullableDataValue(data.COtenNineContractor, ''),
            COsalary: getNullableDataValue(data.COsalary, ''),
            COhourly: getNullableDataValue(data.COhourly, ''),
            COchildSupport: getNullableDataValue(data.COchildSupport, ''),
            COalimony: getNullableDataValue(data.COalimony, ''),
            COother: getNullableDataValue(data.COother, ''),
            COpreviousEmployerName: getNullableDataValue(data.COpreviousEmployerName, ''),
            COposition: getNullableDataValue(data.COposition, ''),
            COpreviousYears: getNullableDataValue(data.COpreviousYears, ''),
            COpreviousMonth: getNullableDataValue(data.COpreviousMonth, ''),
            cashBank: getNullableDataValue(data.cashBank, ''),
            retirement401k: getNullableDataValue(data.retirement401k, ''),
            assetOther: getNullableDataValue(data.assetOther, ''),
            sig1: getNullableDataValue(data.sig1, ''),
            sig2: getNullableDataValue(data.sig2, ''),
        });
    }
}
