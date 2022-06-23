import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../../../../../@core/backend/common/services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { User, UserData } from '../../../../../../@core/interfaces/common/users';
import { ROLES } from '../../../../../../@auth/roles';
import { NbRoleProvider } from '@nebular/security';
import { getNullableDataValue, getNullableDateValue } from '../../../../../../@core/utils/helpers';
@Component({
    selector: 'ngx-afg-accounting-tab',
    templateUrl: './afg-accounting.component.html',
    styleUrls: ['./afg-accounting.component.scss'],
})
export class AFGAccountingTabComponent implements OnInit {

    accountName: '';
    form: FormGroup;
    users: User[] = [];
    @Input() service: ContactService;
    @Input() data: Observable<any>;

    constructor(
        private fb: FormBuilder,
        private usersService: UserData,
        private roleService: NbRoleProvider,

    ) { }

    ngOnInit(): void {
        this.roleService.getRole().subscribe(r => {
            if (r.includes(ROLES.ADMIN)) {
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

    loadAccountData(form: any, response: any) {
        response.subscribe((data) => {
            this.setFormValues(form, data);
        });
    }

    loadAccountTestData(form: any) {
        const data = {
            actTransAcc: 'Active Transaction Accounting',
            ct: 'Cost',
            ctDt: new Date(),
            actTransAcc2: 'Active Transaction Accounting',
            ct2: 'Cost',
            ctDt2: new Date(),
            ct3: 'Cost',
            pType: 'Pay Type',
            pDt: new Date(),
            pType2: 'Pay Type',
            pDt2: new Date(),
            clsCrdNt: 'Closing and Credit Notes',
            dFeesBtn: 'btn',
            ckInDt: new Date(),
            gtr: 'Gross Total Revenue (GTR)',
            ct4: 'Cost',
            gtr2: 'Gross Total Revenue (GTR)',
            ct5: 'Cost',
            lnOffcGtr: 'Loan Officer',
            ct6: 'Cost',
            adminGtr: 'Admin',
            ct7: 'Cost',
            prcLcGtr: 'Proc/LC',
            ct8: 'Cost',
            apprsGtr: 'Appraisal',
            ct9: 'Cost',
            crdtGtr: 'Credit',
            ct10: 'Cost',
            mktGtr: 'Mkting',
            ct11: 'Cost',
            mscGtr: 'Misc',
            ct12: 'Cost',
            ct13: 'Cost',
            pType3: 'Pay Type',
            pDt3: new Date(),
            pType4: 'Pay Type',
            pDt4: new Date(),
            pType5: 'Pay Type',
            pDt5: new Date(),
            pType6: 'Pay Type',
            pDt6: new Date(),
            pType7: 'Pay Type',
            pDt7: new Date(),
            stgeDt: new Date(),
            stgeDt2: new Date(),
            opsSoDt: new Date(),
            prntScrnBtn: 'Print Screen',
            cC: 'CC1',
            cC2: '%',
            cC3: 'CC2',
            cC4: '%',
            cC5: 'CC3',
            cC6: '%',
            thrdPty: 'Third Party',
            msc: 'Misc',
            ct14: 'Cost',
            ct15: 'Cost',
            ctPrcnt: '%',
            ctPrcnt2: 'Cost',
            ct16: 'Cost',
            ctPrcnt3: '%',
            ctPrcnt4: 'Cost',
            ct17: 'Cost',
            ctPrcnt5: '%',
            ctPrcnt6: 'Cost',
            ct18: 'Cost',
            ct19: 'Cost',
            ct20: 'Cost',
            ctTotal: 'Cost Total',
            ctNcr: 'Net Company Revenue (NCR)',
            ctDesc1: 'Cost Description',
            ctDesc2: 'Cost Description',
            ctDesc3: 'Cost Description',
            ctDesc4: 'Cost Descritpion',
            ctDesc5: 'Cost Description',
            ctDesc6: 'Cost Description',
            pDt8: new Date(),
            pCom1: 'Payable Comission',
            pDt9: new Date(),
            pDt10: new Date(),
            pCom2: 'Payable Comission',
            pDt11: new Date(),
            pDt12: new Date(),
            pCom3: 'Payable Comission',
            pDt13: new Date(),
        };
        this.setFormValues(form, data);
    }

    setFormValues(form: any, data: any) {
        form.setValue({
            actTransAcc: getNullableDataValue(data.actTransAcc, ''),
            ct: getNullableDataValue(data.ct, ''),
            ctDt: getNullableDateValue(data.ctDt, ''),
            actTransAcc2: getNullableDataValue(data.actTransAcc2, ''),
            ct2: getNullableDataValue(data.ct2, ''),
            ctDt2: getNullableDateValue(data.ctDt2, ''),
            ct3: getNullableDataValue(data.ct3, ''),
            pType: getNullableDataValue(data.pType, ''),
            pDt: getNullableDateValue(data.pDt, ''),
            pType2: getNullableDataValue(data.pType2, ''),
            pDt2: getNullableDateValue(data.pDt2, ''),
            clsCrdNt: getNullableDataValue(data.clsCrdNt, ''),
            dFeesBtn: getNullableDataValue(data.dFeesBtn, ''),
            ckInDt: getNullableDateValue(data.ckInDt, ''),
            gtr: getNullableDataValue(data.gtr, ''),
            ct4: getNullableDataValue(data.ct4, ''),
            gtr2: getNullableDataValue(data.gtr2, ''),
            ct5: getNullableDataValue(data.ct5, ''),
            lnOffcGtr: getNullableDataValue(data.lnOffcGtr, ''),
            ct6: getNullableDataValue(data.ct6, ''),
            adminGtr: getNullableDataValue(data.adminGtr, ''),
            ct7: getNullableDataValue(data.ct7, ''),
            prcLcGtr: getNullableDataValue(data.prcLcGtr, ''),
            ct8: getNullableDataValue(data.ct8, ''),
            apprsGtr: getNullableDataValue(data.apprsGtr, ''),
            ct9: getNullableDataValue(data.ct9, ''),
            crdtGtr: getNullableDataValue(data.crdtGtr, ''),
            ct10: getNullableDataValue(data.ct10, ''),
            mktGtr: getNullableDataValue(data.mktGtr, ''),
            ct11: getNullableDataValue(data.ct11, ''),
            mscGtr: getNullableDataValue(data.mscGtr, ''),
            ct12: getNullableDataValue(data.ct12, ''),
            ct13: getNullableDataValue(data.ct13, ''),
            pType3: getNullableDataValue(data.pType3, ''),
            pDt3: getNullableDateValue(data.pDt3, ''),
            pType4: getNullableDataValue(data.pType4, ''),
            pDt4: getNullableDateValue(data.pDt4, ''),
            pType5: getNullableDataValue(data.pType5, ''),
            pDt5: getNullableDateValue(data.pDt5, ''),
            pType6: getNullableDataValue(data.pType6, ''),
            pDt6: getNullableDateValue(data.pDt6, ''),
            pType7: getNullableDataValue(data.pType7, ''),
            pDt7: getNullableDateValue(data.pDt7, ''),
            stgeDt: getNullableDateValue(data.stgeDt, ''),
            stgeDt2: getNullableDateValue(data.stgeDt2, ''),
            opsSoDt: getNullableDateValue(data.opsSoDt, ''),
            prntScrnBtn: getNullableDataValue(data.prntScrnBtn, ''),
            cC: getNullableDataValue(data.cC, ''),
            cC2: getNullableDataValue(data.cC2, ''),
            cC3: getNullableDataValue(data.cC3, ''),
            cC4: getNullableDataValue(data.cC4, ''),
            cC5: getNullableDataValue(data.cC5, ''),
            cC6: getNullableDataValue(data.cC6, ''),
            thrdPty: getNullableDataValue(data.thrdPty, ''),
            msc: getNullableDataValue(data.msc, ''),
            ct14: getNullableDataValue(data.ct14, ''),
            ct15: getNullableDataValue(data.ct15, ''),
            ctPrcnt: getNullableDataValue(data.ctPrcnt, ''),
            ctPrcnt2: getNullableDataValue(data.ctPrcnt2, ''),
            ct16: getNullableDataValue(data.ct16, ''),
            ctPrcnt3: getNullableDataValue(data.ctPrcnt3, ''),
            ctPrcnt4: getNullableDataValue(data.ctPrcnt4, ''),
            ct17: getNullableDataValue(data.ct17, ''),
            ctPrcnt5: getNullableDataValue(data.ctPrcnt5, ''),
            ctPrcnt6: getNullableDataValue(data.ctPrcnt6, ''),
            ct18: getNullableDataValue(data.ct18, ''),
            ct19: getNullableDataValue(data.ct19, ''),
            ct20: getNullableDataValue(data.ct20, ''),
            ctTotal: getNullableDataValue(data.ctTotal, ''),
            ctNcr: getNullableDataValue(data.ctNcr, ''),
            ctDesc1: getNullableDataValue(data.ctDesc1, ''),
            ctDesc2: getNullableDataValue(data.ctDesc2, ''),
            ctDesc3: getNullableDataValue(data.ctDesc3, ''),
            ctDesc4: getNullableDataValue(data.ctDesc4, ''),
            ctDesc5: getNullableDataValue(data.ctDesc5, ''),
            ctDesc6: getNullableDataValue(data.ctDesc6, ''),
            pDt8: getNullableDateValue(data.pDt8, ''),
            pCom1: getNullableDataValue(data.pCom1, ''),
            pDt9: getNullableDateValue(data.pDt9, ''),
            pDt10: getNullableDateValue(data.pDt10, ''),
            pCom2: getNullableDataValue(data.pCom2, ''),
            pDt11: getNullableDateValue(data.pDt11, ''),
            pDt12: getNullableDateValue(data.pDt12, ''),
            pCom3: getNullableDataValue(data.pCom3, ''),
            pDt13: getNullableDateValue(data.pDt13, ''),


        });

    }




    initForm(fb: any): any {

        const form = fb.group({
            actTransAcc: fb.control(''),
            ct: fb.control(''),
            ctDt: fb.control(''),
            actTransAcc2: fb.control(''),
            ct2: fb.control(''),
            ctDt2: fb.control(''),
            ct3: fb.control(''),
            pType: fb.control(''),
            pDt: fb.control(''),
            pType2: fb.control(''),
            pDt2: fb.control(''),
            clsCrdNt: fb.control(''),
            dFeesBtn: fb.control(''),
            ckInDt: fb.control(''),
            gtr: fb.control(''),
            ct4: fb.control(''),
            gtr2: fb.control(''),
            ct5: fb.control(''),
            lnOffcGtr: fb.control(''),
            ct6: fb.control(''),
            adminGtr: fb.control(''),
            ct7: fb.control(''),
            prcLcGtr: fb.control(''),
            ct8: fb.control(''),
            apprsGtr: fb.control(''),
            ct9: fb.control(''),
            crdtGtr: fb.control(''),
            ct10: fb.control(''),
            mktGtr: fb.control(''),
            ct11: fb.control(''),
            mscGtr: fb.control(''),
            ct12: fb.control(''),
            ct13: fb.control(''),
            pType3: fb.control(''),
            pDt3: fb.control(''),
            pType4: fb.control(''),
            pDt4: fb.control(''),
            pType5: fb.control(''),
            pDt5: fb.control(''),
            pType6: fb.control(''),
            pDt6: fb.control(''),
            pType7: fb.control(''),
            pDt7: fb.control(''),
            stgeDt: fb.control(''),
            stgeDt2: fb.control(''),
            opsSoDt: fb.control(''),
            prntScrnBtn: fb.control(''),
            cC: fb.control(''),
            cC2: fb.control(''),
            cC3: fb.control(''),
            cC4: fb.control(''),
            cC5: fb.control(''),
            cC6: fb.control(''),
            thrdPty: fb.control(''),
            msc: fb.control(''),
            ct14: fb.control(''),
            ct15: fb.control(''),
            ctPrcnt: fb.control(''),
            ctPrcnt2: fb.control(''),
            ct16: fb.control(''),
            ctPrcnt3: fb.control(''),
            ctPrcnt4: fb.control(''),
            ct17: fb.control(''),
            ctPrcnt5: fb.control(''),
            ctPrcnt6: fb.control(''),
            ct18: fb.control(''),
            ct19: fb.control(''),
            ct20: fb.control(''),
            ctTotal: fb.control(''),
            ctNcr: fb.control(''),
            ctDesc1: fb.control(''),
            ctDesc2: fb.control(''),
            ctDesc3: fb.control(''),
            ctDesc4: fb.control(''),
            ctDesc5: fb.control(''),
            ctDesc6: fb.control(''),
            pDt8: fb.control(''),
            pCom1: fb.control(''),
            pDt9: fb.control(''),
            pDt10: fb.control(''),
            pCom2: fb.control(''),
            pDt11: fb.control(''),
            pDt12: fb.control(''),
            pCom3: fb.control(''),
            pDt13: fb.control(''),
        }, { updateOn: 'blur' });
        return form;
    }
}





















