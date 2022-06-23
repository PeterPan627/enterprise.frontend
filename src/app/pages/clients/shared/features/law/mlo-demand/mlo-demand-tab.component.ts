import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../../../../../@core/backend/common/services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { User, UserData } from '../../../../../../@core/interfaces/common/users';
import { ROLES } from '../../../../../../@auth/roles';
import { NbRoleProvider } from '@nebular/security';
import { getNullableDataValue } from '../../../../../../@core/utils/helpers';

@Component({
    selector: 'ngx-mlo-demand-tab',
    templateUrl: './mlo-demand-tab.component.html',
    styleUrls: ['./mlo-demand-tab.component.scss'],
})
export class MLOdemandTabComponent implements OnInit {
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
            typeBarrier: 'typeBarrier',
            hotelName: 'hotelName',
            travelDate: '11/28/2000',
            travelEndDate: '11/28/2000',
            clientId: 'clientId',
            dateVisit: '11/28/2000',
            dateVisit2: '11/28/2000',
            fileMonth: '11/28/2000',
            offenderVisited: 'offenderVisited',
            notes: 'Notes',
            fileSetup: '11/28/2000',
            selector: 'selector',
            barrierIdentified: '11/28/2000',
            defendantIdentified: '11/28/2000',
            recourceCreated: '11/28/2000',
            complaintDrafted: '11/28/2000',
            assessmentNeeded: '11/28/2000',
            rule11Sent: '11/28/2000',
            rule11Rcvd: '11/28/2000',
            filingDrafted: '11/28/2000',
            noiDate: '11/28/2000',
            storeFront: 'storeFront',
            address: 'address',
            field: 'field',
            defendant1: 'defendant1',
            offenderComp: 'offenderComp',
            offenderName: 'offenderName',
            title: 'title',
            inhouseCounsel: 'inhouseCounsel',
            shortName: 'shortName',
            phone: 'phone',
            email: 'email',
            defendant2: 'defendant2',
            checkbox: 'checked',
            caseNumber: 'caseNumber',
            courtHouse: 'courtHouse',
            judge: 'judge',
            department: 'department',
            mobile: 'mobile',
            judgeLink: 'judgelink',
            removeToFed: '11/28/2000',
            opcLink: 'opcLink',
            firm: 'firm',
            attorney: 'attorney',
            direct: 'direct',
            genOffice: 'genOffice',
            fax: 'fax',
            lawFirm: 'lawFirm',
            stateFiled: 'stateFiled',
            opc1: 'opc1',
            bar: 'bar',
            opc2: 'opc2',
        };
        this.setFormValues(form, data);
    }

    isAdmin() {
        return this.role.includes(ROLES.ADMIN);
    }

    initForm(fb: FormBuilder): FormGroup {

        const form = fb.group({
            phone: fb.control(''),
            storeFront: fb.control(''),
            firm: fb.control(''),
            attorney: fb.control(''),
            direct: fb.control(''),
            genOffice: fb.control(''),
            mobile: fb.control(''),
            fax: fb.control(''),
            email: fb.control(''),
            address: fb.control(''),
            lawFirm: fb.control(''),
            stateFiled: fb.control(''),
            opc1: fb.control(''),
            bar: fb.control(''),
            field: fb.control(''),
            checkbox: fb.control(''),
            opc2: fb.control(''),
            opcLink: fb.control(''),
            typeBarrier: fb.control(''),
            hotelName: fb.control(''),
            travelDate: fb.control(''),
            travelEndDate: fb.control(''),
            clientId: fb.control(''),
            dateVisit: fb.control(''),
            dateVisit2: fb.control(''),
            fileMonth: fb.control(''),
            offenderVisited: fb.control(''),
            notes: fb.control(''),
            fileSetup: fb.control(''),
            selector: fb.control(''),
            barrierIdentified: fb.control(''),
            defendantIdentified: fb.control(''),
            recourceCreated: fb.control(''),
            complaintDrafted: fb.control(''),
            assessmentNeeded: fb.control(''),
            rule11Sent: fb.control(''),
            rule11Rcvd: fb.control(''),
            filingDrafted: fb.control(''),
            noiDate: fb.control(''),
            defendant1: fb.control(''),
            offenderComp: fb.control(''),
            offenderName: fb.control(''),
            title: fb.control(''),
            inhouseCounsel: fb.control(''),
            shortName: fb.control(''),
            defendant2: fb.control(''),
            caseNumber: fb.control(''),
            courtHouse: fb.control(''),
            judge: fb.control(''),
            department: fb.control(''),
            judgeLink: fb.control(''),
            removeToFed: fb.control(''),
        }, { updateOn: 'blur' });
        return form;
    }

    setFormValues(form: FormGroup, data: any) {
        form.setValue({
            removeToFed: getNullableDataValue(data.removeToFed, ''),
            judgeLink: getNullableDataValue(data.judgeLink, ''),
            department: getNullableDataValue(data.department, ''),
            judge: getNullableDataValue(data.judge, ''),
            courtHouse: getNullableDataValue(data.courtHouse, ''),
            caseNumber: getNullableDataValue(data.caseNumber, ''),
            defendant2: getNullableDataValue(data.defendant2, ''),
            phone: getNullableDataValue(data.phone, ''),
            shortName: getNullableDataValue(data.shortName, ''),
            inhouseCounsel: getNullableDataValue(data.inhouseCounsel, ''),
            title: getNullableDataValue(data.title, ''),
            offenderName: getNullableDataValue(data.offenderName, ''),
            offenderComp: getNullableDataValue(data.offenderComp, ''),
            defendant1: getNullableDataValue(data.defendant1, ''),
            storeFront: getNullableDataValue(data.storeFront, ''),
            opcLink: getNullableDataValue(data.opcLink, ''),
            firm: getNullableDataValue(data.firm, ''),
            attorney: getNullableDataValue(data.attorney, ''),
            direct: getNullableDataValue(data.direct, ''),
            genOffice: getNullableDataValue(data.genOffice, ''),
            mobile: getNullableDataValue(data.mobile, ''),
            fax: getNullableDataValue(data.fax, ''),
            email: getNullableDataValue(data.email, ''),
            lawFirm: getNullableDataValue(data.lawFirm, ''),
            stateFiled: getNullableDataValue(data.stateFiled, ''),
            opc1: getNullableDataValue(data.opc1, ''),
            bar: getNullableDataValue(data.bar, ''),
            field: getNullableDataValue(data.field, ''),
            address: getNullableDataValue(data.mobile, ''),
            opc2: getNullableDataValue(data.opc2, ''),
            fileSetup: getNullableDataValue(data.fileSetup, ''),
            typeBarrier: getNullableDataValue(data.typeBarrier, ''),
            hotelName: getNullableDataValue(data.hotelName, ''),
            travelDate: getNullableDataValue(data.travelDate, ''),
            travelEndDate: getNullableDataValue(data.travelEndDate, ''),
            clientId: getNullableDataValue(data.clientId, ''),
            dateVisit: getNullableDataValue(data.dateVisit, ''),
            dateVisit2: getNullableDataValue(data.dateVisit2, ''),
            fileMonth: getNullableDataValue(data.fileMonth, ''),
            offenderVisited: getNullableDataValue(data.offenderVisited, ''),
            notes: getNullableDataValue(data.notes, ''),
            selector: getNullableDataValue(data.selector, ''),
            barrierIdentified: getNullableDataValue(data.barrierIdentified, ''),
            defendantIdentified: getNullableDataValue(data.defendantIdentified, ''),
            recourceCreated: getNullableDataValue(data.recourceCreated, ''),
            assessmentNeeded: getNullableDataValue(data.assessmentNeeded, ''),
            rule11Sent: getNullableDataValue(data.rule11Sent, ''),
            rule11Rcvd: getNullableDataValue(data.rule11Rcvd, ''),
            filingDrafted: getNullableDataValue(data.filingDrafted, ''),
            noiDate: getNullableDataValue(data.noiDate, ''),
            checkbox: getNullableDataValue(data.checkbox, ''),
            complaintDrafted: getNullableDataValue(data.complaintDrafted, ''),
        });
    }
}
