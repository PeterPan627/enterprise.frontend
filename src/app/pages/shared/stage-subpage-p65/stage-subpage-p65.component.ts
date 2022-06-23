import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbToastrService, NbGlobalPhysicalPosition } from '@nebular/theme';
import { SalesStage } from '../../../@core/interfaces/common/SalesStage/SalesStage';
import { SalesStageP65Collection } from '../../../@core/interfaces/common/SalesStage/SalesStageP65Collection';
import { SalesStageService } from '../../../@core/interfaces/common/SalesStage/SalesStageService';
import { SalesStageWithDisposition } from '../../../@core/interfaces/common/SalesStage/SalesStageWithDisposition';
import { TransType } from '../../../@core/transtype';

@Component({
    selector: 'ngx-stage-subpage-p65',
    templateUrl: './stage-subpage-p65.component.html',
    styleUrls: ['./stage-subpage-p65.component.scss'],
})
export class StageSubPageP65Component implements OnInit {

    @Input() opportunityId: string;
    @Input() service: SalesStageService;
    @Output() close = new EventEmitter<boolean>();

    protected readonly unsubscribe$ = new Subject<void>();
    public stages: SalesStageP65Collection;
    public end: boolean = false;
    constructor(private toastrService: NbToastrService) {
        this.stages = new SalesStageP65Collection(
            '1 File Setup',
            '2 Product Submitted Verification',
            '3 Defendant Identified',
            '4 Additional Resources Needed',
            '4_5 Quality Control',
            '5 Violation Notice Drafted',
            '6 Attorney Review',
            '6_1 Violation Notice Approved',
            '6_2 Violation Notice Uploaded',
            '6_3 Pre-Lit Negotiations',
            '6_5 Complaint Drafting',
            '6_6 Complaint Attorney Review',
            '6_7 Complaint Filed',
            '6_705 Default Judgement',
            '6_71 In Contact Defendant/OPC',
            '6_72 Monetary Offer Made By Def.',
            '6_73 Settlement Agreed to Release Being Neg.',
            '6_74 Settle Agreement Finalized',
            '7 Settlement Funds Pending',
            '7_1 Settlement Funds Past Due',
            '7_5 Dismissed Case',
            '8 Future Case',
            '9 Closed File',
            'X Dead Lead',
        );
    }

    ngOnInit() {
        this.init();
    }

    init() {
        this.service.getSalesStage(this.opportunityId, TransType.Law_P65)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((s: any) => {
                this.stages.AStage = s.aStage;
                this.stages.stageX = s.stageX;
                this.stages.stage1 = s.stage1;
                this.stages.stage2 = s.stage2;
                this.stages.stage3 = s.stage3;
                this.stages.stage4 = s.stage4;
                this.stages.stage4_5 = s.stage4_5;
                this.stages.stage5 = s.stage5;
                this.stages.stage6 = s.stage6;
                this.stages.stage6_1 = s.stage6_1;
                this.stages.stage6_2 = s.stage6_2;
                this.stages.stage6_3 = s.stage6_3;
                this.stages.stage6_5 = s.stage6_5;
                this.stages.stage6_6 = s.stage6_6;
                this.stages.stage6_7 = s.stage6_7;
                this.stages.stage6_705 = s.stage6_705;
                this.stages.stage6_71 = s.stage6_71;
                this.stages.stage6_72 = s.stage6_72;
                this.stages.stage6_73 = s.stage6_73;
                this.stages.stage6_74 = s.stage6_74;
                this.stages.stage7 = s.stage7;
                this.stages.stage7_1 = s.stage7_1;
                this.stages.stage7_5 = s.stage7_5;
                this.stages.stage8 = s.stage8;
                this.stages.stage9 = s.stage9;
            });
    }

    isNotAdmin() {
        return true;
    }

    setStage(stage: string, date?: any) {
        if (date == null) {
            date = new Date();
            date.setHours(0, 0, 0, 0);
        }

        if (stage.indexOf('X') === -1) {
            const updated = new SalesStage();
            updated.date = date;
            this.stages[stage] = updated;
        } else {
            const updatedX = new SalesStageWithDisposition();
            if (isNullOrUndefined(this.stages.stageX.disposition) || this.stages.stageX.disposition === '') {
                updatedX.disposition = '';
                updatedX.date = new Date();
                this.stages[stage] = updatedX;
                setTimeout(() => {
                    updatedX.disposition = '';
                    updatedX.date = null;
                    this.stages[stage] = updatedX;
                    this.setAstage();
                    this.toastrService.danger('Please select a stage x disposition.',
                        'Error Updating!', { position: NbGlobalPhysicalPosition.TOP_RIGHT });
                }, 1);
            } else {
                updatedX.date = date;
                updatedX.disposition = this.stages.stageX.disposition;
                this.stages.stageX = updatedX;
            }
        }

        this.setAstage();
    }

    setStageXdisposition(val) {
        const updated = new SalesStageWithDisposition();
        updated.date = new Date();
        updated.disposition = val;
        this.stages.stageX = updated;
        this.setAstage();
    }

    private setAstage() {
        this.stages.AStage = '';
        if (!isNullOrUndefined(this.stages.stage9.date)) {
            this.stages.AStage = this.stages.stage9.stageName;
        } else if (!isNullOrUndefined(this.stages.stage8.date)) {
            this.stages.AStage = this.stages.stage8.stageName;
        } else if (!isNullOrUndefined(this.stages.stage7.date)) {
            this.stages.AStage = this.stages.stage7.stageName;
        } else if (!isNullOrUndefined(this.stages.stage6.date)) {
            this.stages.AStage = this.stages.stage6.stageName;
        } else if (!isNullOrUndefined(this.stages.stage5.date)) {
            this.stages.AStage = this.stages.stage5.stageName;
        } else if (!isNullOrUndefined(this.stages.stage4.date)) {
            this.stages.AStage = this.stages.stage4.stageName;
        } else if (!isNullOrUndefined(this.stages.stage3.date)) {
            this.stages.AStage = this.stages.stage3.stageName;
        } else if (!isNullOrUndefined(this.stages.stage2.date)) {
            this.stages.AStage = this.stages.stage2.stageName;
        } else if (!isNullOrUndefined(this.stages.stage1.date)) {
            this.stages.AStage = this.stages.stage1.stageName;
        } else if (!isNullOrUndefined(this.stages.stage4_5.date)) {
            this.stages.AStage = this.stages.stage4_5.stageName;
        } else if (!isNullOrUndefined(this.stages.stage6_1.date)) {
            this.stages.AStage = this.stages.stage6_1.stageName;
        } else if (!isNullOrUndefined(this.stages.stage6_2.date)) {
            this.stages.AStage = this.stages.stage6_2.stageName;
        } else if (!isNullOrUndefined(this.stages.stage6_3.date)) {
            this.stages.AStage = this.stages.stage6_3.stageName;
        } else if (!isNullOrUndefined(this.stages.stage6_5.date)) {
            this.stages.AStage = this.stages.stage6_5.stageName;
        } else if (!isNullOrUndefined(this.stages.stage6_6.date)) {
            this.stages.AStage = this.stages.stage6_6.stageName;
        } else if (!isNullOrUndefined(this.stages.stage6_7.date)) {
            this.stages.AStage = this.stages.stage6_7.stageName;
        } else if (!isNullOrUndefined(this.stages.stage6_705.date)) {
            this.stages.AStage = this.stages.stage6_705.stageName;
        } else if (!isNullOrUndefined(this.stages.stage6_71.date)) {
            this.stages.AStage = this.stages.stage6_71.stageName;
        } else if (!isNullOrUndefined(this.stages.stage6_72.date)) {
            this.stages.AStage = this.stages.stage6_72.stageName;
        } else if (!isNullOrUndefined(this.stages.stage6_73.date)) {
            this.stages.AStage = this.stages.stage6_73.stageName;
        } else if (!isNullOrUndefined(this.stages.stage6_74.date)) {
            this.stages.AStage = this.stages.stage6_74.stageName;
        } else if (!isNullOrUndefined(this.stages.stage7_1.date)) {
            this.stages.AStage = this.stages.stage7_1.stageName;
        } else if (!isNullOrUndefined(this.stages.stage7_5.date)) {
            this.stages.AStage = this.stages.stage7_5.stageName;
        }


        if (!isNullOrUndefined(this.stages.stageX.date)) {
            this.stages.AStage = this.stages.stageX.stageName;
        }
    }

    save() {

        const properties = Object.getOwnPropertyNames(Object.getPrototypeOf(this.stages));
        properties.splice(properties.indexOf('constructor'), 1);
        properties.splice(properties.indexOf('checkAndSetFutureStages'), 1);
        properties.splice(properties.indexOf('checkAndSetPastStages'), 1);

        const updates = [];
        const that = this;
        const update = function (i, key, value) {
            that.service.updateSalesStage(that.opportunityId, {
                table: 'SalesStage',
                column: key,
                identifier: that.opportunityId,
                key: 'OpportunityId',
                value: value,
            }).toPromise().then((response) => {
                updates[i].completed = true;
                updates[i].success = response;
                if (!response) {
                    that.toastrService.danger(that.stages[properties[i]].stageName + ' was not updated. Please check the value and try again.', 'Error Updating!', { position: NbGlobalPhysicalPosition.BOTTOM_RIGHT });
                } else {
                    if (isNullOrUndefined(updates.find(u => u.completed === false))) {
                        // all updates are completed
                        if (isNullOrUndefined(updates.find(u => u.success === false))) {
                            // all updates are successful
                            that.toastrService.success('Client Stage(s) updated!', 'Success', {
                                preventDuplicates: true,
                            });
                            that.close.emit();
                        }
                    }
                }
            }).catch(() => {
                updates[i].completed = true;
                updates[i].success = false;
                that.toastrService.danger(that.stages[properties[i]].stageName + ' was not updated. Please check the value and try again.', 'Error Updating!', { position: NbGlobalPhysicalPosition.BOTTOM_RIGHT });
            });
        };

        for (let index = 0; index < properties.length; index++) {
            const key = properties[index];
            updates[index] = {
                request: key,
                success: false,
                completed: false,
            };
            if (key === 'AStage') {
                update(index, key, this.stages[key]);
            } else {
                update(index, key, this.stages[key].date);
                if (key === 'stageX') {
                    update(index, key, this.stages[key].disposition);
                }
            }
        }
    }
}
