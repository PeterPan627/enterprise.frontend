import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../../../../../@core/backend/common/services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { User, UserData } from '../../../../../../@core/interfaces/common/users';
import { ROLES } from '../../../../../../@auth/roles';
import { NbRoleProvider } from '@nebular/security';
import { getNullableDataValue } from '../../../../../../@core/utils/helpers';

@Component({
    selector: 'ngx-insur-submiss-tab',
    templateUrl: './insur-submiss-tab.component.html',
    styleUrls: ['./insur-submiss-tab.component.scss'],
})
export class InsurSubmissTabComponent implements OnInit {
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
            initSubm: 'initSubm',
            refax: 'refax',
            resendMissPages: 'rmp',
            submitDirect: 'submitDirect',
            date: '11/28/2000',
            brokerName: 'brokername',
            effectiveDate: '11/28/2000',
            firstName: 'firstName',
            lastName: 'lastName',
            carrier: 'carrier',
            county: 'county',
            planName: 'plan Name',
            medicalGroup: 'medicalgroup',
            pcpFirstName: 'pcpFN',
            pcpLastName: 'pcpLN',
            existPatient: 'EP',
            newPatient: 'newPatient',
            existMember: 'existMember',
            newMember: 'newMember',
            yes: 'yes',
            english: 'english',
            spanish: 'spanish',
            other: 'other',
            noPlanSwitch: 'NPS',
            inboundCall: 'inboundCall',
            leadCard: 'leadCard',
            internet: 'internet',
            campOut: 'campOut',
            bizCard: 'bizC',
            doctorRefer: 'DR',
            walkIn: 'walkIn',
            office: 'office',
            mgLetter: 'mgLetter',
            otherInput: 'input',
            newsPaper: 'news',
            referral: 'referral',
            postCards: 'PC',
            flyer: 'flyer',
            hrbcLetter: 'letter',
            pharmacy: 'pharmacy',
            seniorCenter: 'seniorC',
            notes: 'notes',
            officeInput: 'OI',
            clientfirstName: 'Client First Name',
            clientlastName: 'Client Last Name',
        };
        this.setFormValues(form, data);
    }

    isAdmin() {
        return this.role.includes(ROLES.ADMIN);
    }

    initForm(fb: FormBuilder): FormGroup {
        const form = fb.group({
            initSubm: fb.control(''),
            refax: fb.control(''),
            resendMissPages: fb.control(''),
            submitDirect: fb.control(''),
            date: fb.control(''),
            brokerName: fb.control(''),
            effectiveDate: fb.control(''),
            firstName: fb.control(''),
            lastName: fb.control(''),
            carrier: fb.control(''),
            county: fb.control(''),
            planName: fb.control(''),
            medicalGroup: fb.control(''),
            pcpFirstName: fb.control(''),
            pcpLastName: fb.control(''),
            existPatient: fb.control(''),
            newPatient: fb.control(''),
            existMember: fb.control(''),
            newMember: fb.control(''),
            yes: fb.control(''),
            english: fb.control(''),
            spanish: fb.control(''),
            other: fb.control(''),
            noPlanSwitch: fb.control(''),
            inboundCall: fb.control(''),
            leadCard: fb.control(''),
            internet: fb.control(''),
            campOut: fb.control(''),
            bizCard: fb.control(''),
            doctorRefer: fb.control(''),
            walkIn: fb.control(''),
            office: fb.control(''),
            mgLetter: fb.control(''),
            otherInput: fb.control(''),
            newsPaper: fb.control(''),
            referral: fb.control(''),
            postCards: fb.control(''),
            flyer: fb.control(''),
            hrbcLetter: fb.control(''),
            pharmacy: fb.control(''),
            seniorCenter: fb.control(''),
            notes: fb.control(''),
            clientfirstName: fb.control(''),
            clientlastName: fb.control(''),
            officeInput: fb.control(''),
        }, { updateOn: 'blur' });
        return form;
    }

    setFormValues(form: FormGroup, data: any) {
        form.setValue({
            officeInput: getNullableDataValue(data.officeInput, ''),
            initSubm: getNullableDataValue(data.initSubm, ''),
            refax: getNullableDataValue(data.refax, ''),
            resendMissPages: getNullableDataValue(data.resendMissPages, ''),
            submitDirect: getNullableDataValue(data.submitDirect, ''),
            date: getNullableDataValue(data.date, ''),
            brokerName: getNullableDataValue(data.brokerName, ''),
            effectiveDate: getNullableDataValue(data.effectiveDate, ''),
            firstName: getNullableDataValue(data.firstName, ''),
            lastName: getNullableDataValue(data.lastName, ''),
            carrier: getNullableDataValue(data.carrier, ''),
            county: getNullableDataValue(data.county, ''),
            planName: getNullableDataValue(data.planName, ''),
            medicalGroup: getNullableDataValue(data.medicalGroup, ''),
            pcpFirstName: getNullableDataValue(data.pcpFirstName, ''),
            pcpLastName: getNullableDataValue(data.pcpLastName, ''),
            existPatient: getNullableDataValue(data.existPatient, ''),
            newPatient: getNullableDataValue(data.newPatient, ''),
            existMember: getNullableDataValue(data.existMember, ''),
            newMember: getNullableDataValue(data.newMember, ''),
            yes: getNullableDataValue(data.yes, ''),
            english: getNullableDataValue(data.english, ''),
            spanish: getNullableDataValue(data.spanish, ''),
            other: getNullableDataValue(data.other, ''),
            noPlanSwitch: getNullableDataValue(data.noPlanSwitch, ''),
            inboundCall: getNullableDataValue(data.inboundCall, ''),
            leadCard: getNullableDataValue(data.leadCard, ''),
            internet: getNullableDataValue(data.internet, ''),
            campOut: getNullableDataValue(data.campOut, ''),
            bizCard: getNullableDataValue(data.bizCard, ''),
            doctorRefer: getNullableDataValue(data.doctorRefer, ''),
            walkIn: getNullableDataValue(data.walkIn, ''),
            office: getNullableDataValue(data.office, ''),
            mgLetter: getNullableDataValue(data.mgLetter, ''),
            otherInput: getNullableDataValue(data.otherInput, ''),
            newsPaper: getNullableDataValue(data.newsPaper, ''),
            referral: getNullableDataValue(data.referral, ''),
            postCards: getNullableDataValue(data.postCards, ''),
            flyer: getNullableDataValue(data.flyer, ''),
            hrbcLetter: getNullableDataValue(data.hrbcLetter, ''),
            pharmacy: getNullableDataValue(data.pharmacy, ''),
            seniorCenter: getNullableDataValue(data.seniorCenter, ''),
            notes: getNullableDataValue(data.notes, ''),
            clientfirstName: getNullableDataValue(data.clientfirstName, ''),
            clientlastName: getNullableDataValue(data.clientlastName, ''),
        });
    }
}
