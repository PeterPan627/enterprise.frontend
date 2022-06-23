import { BaseSalesStageCollection } from './BaseSalesStageCollection';
import { SalesStage } from './SalesStage';
import { SalesStageWithDisposition } from './SalesStageWithDisposition';


export class SalesStageCollection extends BaseSalesStageCollection {

    constructor(stage0, stage1, stage2, stage3, stage4, stage5, stage6, stage7, stage8, stage9, stageX) {
        super();
        this._stage0.stageName = stage0;
        this._stage1.stageName = stage1;
        this._stage2.stageName = stage2;
        this._stage3.stageName = stage3;
        this._stage4.stageName = stage4;
        this._stage5.stageName = stage5;
        this._stage6.stageName = stage6;
        this._stage7.stageName = stage7;
        this._stage8.stageName = stage8;
        this._stage9.stageName = stage9;
        this._stageX.stageName = stageX;
    }
    private _aStage: string = '';
    private _stage0: SalesStage = new SalesStage();
    private _stage1: SalesStage = new SalesStage();
    private _stage2: SalesStage = new SalesStage();
    private _stage3: SalesStage = new SalesStage();
    private _stage4: SalesStage = new SalesStage();
    private _stage5: SalesStage = new SalesStage();
    private _stage6: SalesStage = new SalesStage();
    private _stage7: SalesStage = new SalesStage();
    private _stage8: SalesStage = new SalesStage();
    private _stage9: SalesStage = new SalesStage();
    private _stageX: SalesStageWithDisposition = new SalesStageWithDisposition();

    get AStage(): string {
        return this._aStage;
    }
    set AStage(stage: string) {
        this._aStage = stage;
    }

    get stage0(): SalesStage {
        return this._stage0;
    }
    set stage0(data: SalesStage) {
        this._stage0.date = data.date ? new Date(data.date) : null;
    }

    get stage1(): SalesStage {
        return this._stage1;
    }
    set stage1(data: SalesStage) {
        this._stage1.date = data.date ? new Date(data.date) : null;

        this.checkAndSetFutureStages(this._stage1, this._stage2);
        this.checkAndSetFutureStages(this._stage1, this._stage3);
        this.checkAndSetFutureStages(this._stage1, this._stage4);
        this.checkAndSetFutureStages(this._stage1, this._stage5);
        this.checkAndSetFutureStages(this._stage1, this._stage6);
        this.checkAndSetFutureStages(this._stage1, this._stage7);
        this.checkAndSetFutureStages(this._stage1, this._stage8);
        this.checkAndSetFutureStages(this._stage1, this._stage9);
    }

    get stage2(): SalesStage {
        return this._stage2;
    }
    set stage2(data: SalesStage) {
        this._stage2.date = data.date ? new Date(data.date) : null;
        this.checkAndSetPastStages(this._stage2, this._stage1);
        this.checkAndSetFutureStages(this._stage2, this._stage3);
        this.checkAndSetFutureStages(this._stage2, this._stage4);
        this.checkAndSetFutureStages(this._stage2, this._stage5);
        this.checkAndSetFutureStages(this._stage2, this._stage6);
        this.checkAndSetFutureStages(this._stage2, this._stage7);
        this.checkAndSetFutureStages(this._stage2, this._stage8);
        this.checkAndSetFutureStages(this._stage2, this._stage9);
    }

    get stage3(): SalesStage {
        return this._stage3;
    }
    set stage3(data: SalesStage) {
        this._stage3.date = data.date ? new Date(data.date) : null;
        this.checkAndSetPastStages(this._stage3, this._stage1);
        this.checkAndSetPastStages(this._stage3, this._stage2);
        this.checkAndSetFutureStages(this._stage3, this._stage4);
        this.checkAndSetFutureStages(this._stage3, this._stage5);
        this.checkAndSetFutureStages(this._stage3, this._stage6);
        this.checkAndSetFutureStages(this._stage3, this._stage7);
        this.checkAndSetFutureStages(this._stage3, this._stage8);
        this.checkAndSetFutureStages(this._stage3, this._stage9);
    }

    get stage4(): SalesStage {
        return this._stage4;
    }
    set stage4(data: SalesStage) {
        this._stage4.date = data.date ? new Date(data.date) : null;
        this.checkAndSetPastStages(this._stage4, this._stage1);
        this.checkAndSetPastStages(this._stage4, this._stage2);
        this.checkAndSetPastStages(this._stage4, this._stage3);
        this.checkAndSetFutureStages(this._stage4, this._stage5);
        this.checkAndSetFutureStages(this._stage4, this._stage6);
        this.checkAndSetFutureStages(this._stage4, this._stage7);
        this.checkAndSetFutureStages(this._stage4, this._stage8);
        this.checkAndSetFutureStages(this._stage4, this._stage9);
    }

    get stage5(): SalesStage {
        return this._stage5;
    }
    set stage5(data: SalesStage) {
        this._stage5.date = data.date ? new Date(data.date) : null;
        this.checkAndSetPastStages(this._stage5, this._stage1);
        this.checkAndSetPastStages(this._stage5, this._stage2);
        this.checkAndSetPastStages(this._stage5, this._stage3);
        this.checkAndSetPastStages(this._stage5, this._stage4);
        this.checkAndSetFutureStages(this._stage5, this._stage6);
        this.checkAndSetFutureStages(this._stage5, this._stage7);
        this.checkAndSetFutureStages(this._stage5, this._stage8);
        this.checkAndSetFutureStages(this._stage5, this._stage9);
    }

    get stage6(): SalesStage {
        return this._stage6;
    }
    set stage6(data: SalesStage) {
        this._stage6.date = data.date ? new Date(data.date) : null;
        this.checkAndSetPastStages(this._stage6, this._stage1);
        this.checkAndSetPastStages(this._stage6, this._stage2);
        this.checkAndSetPastStages(this._stage6, this._stage3);
        this.checkAndSetPastStages(this._stage6, this._stage4);
        this.checkAndSetPastStages(this._stage6, this._stage5);
        this.checkAndSetFutureStages(this._stage6, this._stage7);
        this.checkAndSetFutureStages(this._stage6, this._stage8);
        this.checkAndSetFutureStages(this._stage6, this._stage9);
    }

    get stage7(): SalesStage {
        return this._stage7;
    }
    set stage7(data: SalesStage) {
        this._stage7.date = data.date ? new Date(data.date) : null;
        this.checkAndSetPastStages(this._stage7, this._stage1);
        this.checkAndSetPastStages(this._stage7, this._stage2);
        this.checkAndSetPastStages(this._stage7, this._stage3);
        this.checkAndSetPastStages(this._stage7, this._stage4);
        this.checkAndSetPastStages(this._stage7, this._stage5);
        this.checkAndSetPastStages(this._stage7, this._stage6);
        this.checkAndSetFutureStages(this._stage7, this._stage8);
        this.checkAndSetFutureStages(this._stage7, this._stage9);
    }

    get stage8(): SalesStage {
        return this._stage8;
    }
    set stage8(data: SalesStage) {
        this._stage8.date = data.date ? new Date(data.date) : null;
        this.checkAndSetPastStages(this._stage8, this._stage1);
        this.checkAndSetPastStages(this._stage8, this._stage2);
        this.checkAndSetPastStages(this._stage8, this._stage3);
        this.checkAndSetPastStages(this._stage8, this._stage4);
        this.checkAndSetPastStages(this._stage8, this._stage5);
        this.checkAndSetPastStages(this._stage8, this._stage6);
        this.checkAndSetPastStages(this._stage8, this._stage7);
        this.checkAndSetFutureStages(this._stage8, this._stage9);
    }

    get stage9(): SalesStage {
        return this._stage9;
    }
    set stage9(data: SalesStage) {
        this._stage9.date = data.date ? new Date(data.date) : null;
        this.checkAndSetPastStages(this._stage9, this._stage1);
        this.checkAndSetPastStages(this._stage9, this._stage2);
        this.checkAndSetPastStages(this._stage9, this._stage3);
        this.checkAndSetPastStages(this._stage9, this._stage4);
        this.checkAndSetPastStages(this._stage9, this._stage5);
        this.checkAndSetPastStages(this._stage9, this._stage6);
        this.checkAndSetPastStages(this._stage9, this._stage7);
        this.checkAndSetPastStages(this._stage9, this._stage8);
    }

    get stageX(): SalesStageWithDisposition {
        return this._stageX;
    }
    set stageX(data: SalesStageWithDisposition) {
        this._stageX.date = data.date ? new Date(data.date) : null;
        this.stageX.disposition = data.disposition;
    }
}
