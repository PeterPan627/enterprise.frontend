import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../../../@core/backend/common/services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { getNullableDataValue, getNullableDateValue } from '../../../../@core/utils/helpers';
import { OpportunityService } from '../../../../@core/backend/common/services/opportunity.service';
import { takeUntil } from 'rxjs/operators';
import { CustomValidator } from '../../../../@core/backend/common/services/validation.service';

@Component({
    selector: 'ngx-law-court',
    templateUrl: './law-court.component.html',
    styleUrls: ['./law-court.component.scss'],
})
export class LawCourtTabComponent implements OnInit {
    protected readonly unsubscribe$ = new Subject<void>();
    data: Observable<any>;
    form: FormGroup;
    @Input() service: OpportunityService;
    @Input() id: string;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.initForm(this.fb);
        this.data = this.service.getAdaLawAndMotion(this.id).pipe(takeUntil(this.unsubscribe$));
        this.data.subscribe(d => {
            console.log(d);
            this.setFormValues(this.form, d, this.service);
        })
    }

    private setIntakeFormData(opportunityId: String) {

        return {
            reviewNeeded: {
                table: 'PropertyInfo',
                column: 'ForeclosureDate1',
                identifier: opportunityId,
                key: 'OpportunityId',
            },
            Conf15: {
                table: 'CaseInfo',
                column: 'Conf15',
                identifier: opportunityId,
                key: 'OpportunityId',
            },






        }
    }

    initForm(fb: FormBuilder): FormGroup {

        const form = fb.group({
            FedJudge: fb.control(''),
            CourtJudgeName: fb.control(''),
            CaseDistrict: fb.control(''),
            CourtName: fb.control(''),
            CourtCaseNumber: fb.control(''),
            CaseDivision: fb.control(''),
            CourtPhone: fb.control(''),
            JudgeEmail: fb.control(''),
            RemovedToFedCourt: fb.control(''),
            CourtAddress1: fb.control(''),
            CourtCity: fb.control(''),
            CourtState: fb.control(''),
            CourtZip: fb.control(''),
            FedCourtHouse: fb.control(''),
            FedJudAdd2: fb.control(''),
            FedCaseNumber: fb.control(''),
            FedJudAdd: fb.control(''),
            FedJudCity: fb.control(''),
            FedJudST: fb.control(''),
            FedJudZip: fb.control(''),
            FedCourtDept: fb.control(''),
            FedCourtPhone: fb.control(''),
            FedJudgeEmail: fb.control(''),
            DismissFromFed: fb.control(''),
            DepoDate: fb.control(''),
            DepoAssignedTo: fb.control(''),
            DepoCompleted: fb.control(''),
            DepoDate2: fb.control(''),
            DepoDate3: fb.control(''),
            DepoAssigned2: fb.control(''),
            DepoAssigned3: fb.control(''),
            DepoCompleted2: fb.control(''),
            DepoCompleted3: fb.control(''),
            DepoDate4: fb.control(''),
            DepoAssined4: fb.control(''),
            DepoCompleted4: fb.control(''),
            Magastrate: fb.control(''),
            MagastrateEmail: fb.control(''),









        }, { updateOn: 'blur' });
        return form;
    }


    setFormValues(form: FormGroup, data: any, service: OpportunityService) {
        form.setValue({
            FedJudge: getNullableDataValue(data.FedJudge, ''),
            CourtJudgeName: getNullableDataValue(data.CourtJudgeName, ''),
            CaseDistrict: getNullableDataValue(data.CaseDistrict, ''),
            CourtName: getNullableDataValue(data.CourtName, ''),
            CourtCaseNumber: getNullableDataValue(data.CourtCaseNumber, ''),
            CaseDivision: getNullableDataValue(data.CaseDivision, ''),
            CourtPhone: getNullableDataValue(data.CourtPhone, ''),
            JudgeEmail: getNullableDataValue(data.JudgeEmail, ''),
            RemovedToFedCourt: getNullableDateValue(data.RemovedToFedCourt, ''),
            CourtAddress1: getNullableDataValue(data.CourtAddress1, ''),
            CourtCity: getNullableDataValue(data.CourtCity, ''),
            CourtState: getNullableDataValue(data.CourtState, ''),
            CourtZip: getNullableDataValue(data.CourtZip, ''),
            FedCourtHouse: getNullableDataValue(data.FedCourtHouse, ''),
            FedJudAdd2: getNullableDataValue(data.FedJudAdd2, ''),
            FedCaseNumber: getNullableDataValue(data.FedCaseNumber, ''),
            FedJudAdd: getNullableDataValue(data.FedJudAdd, ''),
            FedJudCity: getNullableDataValue(data.FedJudCity, ''),
            FedJudST: getNullableDataValue(data.FedJudST, ''),
            FedJudZip: getNullableDataValue(data.FedJudZip, ''),
            FedCourtDept: getNullableDataValue(data.FedCourtDept, ''),
            FedCourtPhone: getNullableDataValue(data.FedCourtPhone, ''),
            FedJudgeEmail: getNullableDataValue(data.FedJudgeEmail, ''),
            DismissFromFed: getNullableDateValue(data.DismissFromFed, ''),
            DepoDate: getNullableDateValue(data.DepoDate, ''),
            DepoAssignedTo: getNullableDataValue(data.DepoAssignedTo, ''),
            DepoCompleted: getNullableDateValue(data.DepoCompleted, ''),
            DepoDate2: getNullableDateValue(data.DepoDate2, ''),
            DepoDate3: getNullableDateValue(data.DepoDate3, ''),
            DepoAssigned2: getNullableDataValue(data.DepoAssigned2, ''),
            DepoAssigned3: getNullableDataValue(data.DepoAssigned3, ''),
            DepoCompleted2: getNullableDateValue(data.DepoCompleted2, ''),
            DepoCompleted3: getNullableDateValue(data.DepoCompleted3, ''),
            DepoDate4: getNullableDateValue(data.DepoDate4, ''),
            DepoAssined4: getNullableDataValue(data.DepoAssined4, ''),
            DepoCompleted4: getNullableDateValue(data.DepoCompleted4, ''),
            Magastrate: getNullableDataValue(data.Magastrate, ''),
            MagastrateEmail: getNullableDataValue(data.MagastrateEmail, ''),





        });
        this.pushFormValues(form, data, service);

    }
    private pushFormValues(form: FormGroup, data: any, service: OpportunityService) {
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
}
