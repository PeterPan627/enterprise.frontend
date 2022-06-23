import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../../../../../@core/backend/common/services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { getNullableDataValue, getNullableDateValue } from '../../../../../../@core/utils/helpers';
@Component({
    selector: 'ngx-loan-mod',
    templateUrl: './loan-mod.component.html',
    styleUrls: ['./loan-mod.component.scss'],
})
export class DemandsTabComponent implements OnInit {
    accountName: '';
    form: FormGroup;
    private role: string | string[] = [];
    @Input() service: ContactService;
    @Input() data: Observable<any>;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.initForm(this.fb);
        this.loadAccountTestData(this.form);
    }

    loadAccountTestData(form: FormGroup) {
        const data = {
            mortPmtStat: '',
            monthDown: '',
            clientAppliedMod: '',
            prevPlanOffer: '',
            clientPmtTrial: '',
            homeForeclose: '',
            dateMonthLate: '',
            clientRcvdNotice: '',
            unlawDetain: '',
            filedBk: '',
            typeBkFile: '',
            whenFile: '',
            whenDis: '',
            grossInc1: '',
            grossInc2: '',
            total: '',
            monthAvg: '',
            typeIncome: '',
            householdSize: '',
            medianTarget: '',
            diff: '',
            amtDebt: '',
            numbVeh: '',
            totLoan: '',
            diff2: '',
            numbProp: '',
            stockBond: '',
            totValAsset: '',
            totAssetWorth: '',
            actSaleDt: '',
            initNos: '',
            notDefault: '',
            lender: '',
            trustee: '',
            homeOwner: '',
            ownerGoals: '',
            estHomeVal: '',
            occProperty: '',
            propType: '',
            purchDate: '',
            purchPrice: '',
            loanTakeDt: '',
            hardship: '',



        };
        this.setFormValues(form, data);
    }

    initForm(fb: FormBuilder): FormGroup {
        const form = fb.group({
            mortPmtStat: fb.control(''),
            monthDown: fb.control(''),
            clientAppliedMod: fb.control(''),
            prevPlanOffer: fb.control(''),
            clientPmtTrial: fb.control(''),
            homeForeclose: fb.control(''),
            dateMonthLate: fb.control(''),
            clientRcvdNotice: fb.control(''),
            unlawDetain: fb.control(''),
            filedBk: fb.control(''),
            typeBkFile: fb.control(''),
            whenFile: fb.control(''),
            whenDis: fb.control(''),
            grossInc1: fb.control(''),
            grossInc2: fb.control(''),
            total: fb.control(''),
            monthAvg: fb.control(''),
            typeIncome: fb.control(''),
            householdSize: fb.control(''),
            medianTarget: fb.control(''),
            diff: fb.control(''),
            amtDebt: fb.control(''),
            numbVeh: fb.control(''),
            totLoan: fb.control(''),
            diff2: fb.control(''),
            numbProp: fb.control(''),
            stockBond: fb.control(''),
            totValAsset: fb.control(''),
            totAssetWorth: fb.control(''),
            actSaleDt: fb.control(''),
            initNos: fb.control(''),
            notDefault: fb.control(''),
            lender: fb.control(''),
            trustee: fb.control(''),
            homeOwner: fb.control(''),
            ownerGoals: fb.control(''),
            estHomeVal: fb.control(''),
            occProperty: fb.control(''),
            propType: fb.control(''),
            purchDate: fb.control(''),
            purchPrice: fb.control(''),
            loanTakeDt: fb.control(''),
            hardship: fb.control(''),


        }, { updateOn: 'blur' });
        return form;
    }

    setFormValues(form: FormGroup, data: any) {
        form.setValue({
            mortPmtStat: getNullableDataValue(data.mortPmtStat, ''),
            monthDown: getNullableDataValue(data.monthDown, ''),
            clientAppliedMod: getNullableDataValue(data.clientAppliedMod, ''),
            prevPlanOffer: getNullableDataValue(data.prevPlanOffer, ''),
            clientPmtTrial: getNullableDataValue(data.clientPmtTrial, ''),
            homeForeclose: getNullableDataValue(data.homeForeclose, ''),
            dateMonthLate: getNullableDataValue(data.dateMonthLate, ''),
            clientRcvdNotice: getNullableDataValue(data.clientRcvdNotice, ''),
            unlawDetain: getNullableDataValue(data.unlawDetain, ''),
            filedBk: getNullableDataValue(data.filedBk, ''),
            typeBkFile: getNullableDataValue(data.typeBkFile, ''),
            whenFile: getNullableDataValue(data.whenFile, ''),
            whenDis: getNullableDataValue(data.whenDis, ''),
            grossInc1: getNullableDataValue(data.grossInc1, ''),
            grossInc2: getNullableDataValue(data.grossInc2, ''),
            total: getNullableDataValue(data.total, ''),
            monthAvg: getNullableDataValue(data.monthAvg, ''),
            typeIncome: getNullableDataValue(data.typeIncome, ''),
            householdSize: getNullableDataValue(data.householdSize, ''),
            medianTarget: getNullableDataValue(data.medianTarget, ''),
            diff: getNullableDataValue(data.diff, ''),
            amtDebt: getNullableDataValue(data.amtDebt, ''),
            numbVeh: getNullableDataValue(data.numbVeh, ''),
            totLoan: getNullableDataValue(data.totLoan, ''),
            diff2: getNullableDataValue(data.diff2, ''),
            numbProp: getNullableDataValue(data.numbProp, ''),
            stockBond: getNullableDataValue(data.stockBond, ''),
            totValAsset: getNullableDataValue(data.totValAsset, ''),
            totAssetWorth: getNullableDataValue(data.totAssetWorth, ''),
            initNos: getNullableDataValue(data.initNos, ''),
            actSaleDt: getNullableDataValue(data.actSaleDt, ''),
            notDefault: getNullableDataValue(data.notDefault, ''),
            lender: getNullableDataValue(data.lender, ''),
            trustee: getNullableDataValue(data.trustee, ''),
            homeOwner: getNullableDataValue(data.homeOwner, ''),
            ownerGoals: getNullableDataValue(data.ownerGoals, ''),
            estHomeVal: getNullableDataValue(data.estHomeVal, ''),
            occProperty: getNullableDataValue(data.occProperty, ''),
            propType: getNullableDataValue(data.propType, ''),
            purchDate: getNullableDataValue(data.purchDate, ''),
            purchPrice: getNullableDataValue(data.purchPrice, ''),
            loanTakeDt: getNullableDataValue(data.loanTakeDt, ''),
            hardship: getNullableDataValue(data.hardship, ''),



        });
    }
}
