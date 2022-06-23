import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SalesStageCollection } from '../../../@core/interfaces/common/SalesStage/SalesStageCollection';
import { SalesStage } from '../../../@core/interfaces/common/SalesStage/SalesStage';
import { SalesStageWithDisposition } from '../../../@core/interfaces/common/SalesStage/SalesStageWithDisposition';
import { SalesStageService } from '../../../@core/interfaces/common/SalesStage/SalesStageService';
import { isNullOrUndefined } from 'util';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbToastrService, NbGlobalPhysicalPosition } from '@nebular/theme';
import { TransType } from '../../../@core/transtype';

@Component({
  selector: 'ngx-stage-subpage-contact',
  templateUrl: './stage-subpage-contact.component.html',
  styleUrls: ['./stage-subpage-contact.component.scss'],
})
export class StageSubPageContactComponent implements OnInit {

  @Input() contactId: string;
  @Input() service: SalesStageService;
  @Output() close = new EventEmitter<boolean>();

  protected readonly unsubscribe$ = new Subject<void>();
  public stages: SalesStageCollection;
  public end: boolean = false;
  constructor(private toastrService: NbToastrService) {
    this.stages = new SalesStageCollection(
      '0 Open PTR(s)',
      '1 New Contact',
      '2 Contacted-need Meeting',
      '3 intro Sent-Pending Meeting',
      '4 Meeting Scheduled',
      '5 Referring',
      '6 PTR Referring',
      '7 PTR Gold',
      '8 Future PTR',
      '9 ',
      'X Dead Lead',
    );
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.service.getSalesStage(this.contactId, TransType.Other)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((s: any) => {
        this.stages.AStage = s.aStage;
        this.stages.stageX = s.stageX;
        this.stages.stage0 = s.stage0;
        this.stages.stage1 = s.stage1;
        this.stages.stage2 = s.stage2;
        this.stages.stage3 = s.stage3;
        this.stages.stage4 = s.stage4;
        this.stages.stage5 = s.stage5;
        this.stages.stage6 = s.stage6;
        this.stages.stage7 = s.stage7;
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
    }

    if (!isNullOrUndefined(this.stages.stage0.date)) {
      this.stages.AStage = this.stages.stage0.stageName;
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
      that.service.updateSalesStage(that.contactId, {
        table: 'SALESTAGES',
        column: key,
        identifier: that.contactId,
        key: 'contactId',
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
