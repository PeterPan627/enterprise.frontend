import { BaseSalesStageCollection } from './BaseSalesStageCollection';
import { SalesStage } from './SalesStage';
import { SalesStageWithDisposition } from './SalesStageWithDisposition';


export class SalesStageAdaCollection extends BaseSalesStageCollection {
    constructor(stage1, stage2, stage3, stage4, stage5, stage5_5, stage6, stage6_05, stage6_1, stage6_2, stage6_3, stage6_5, stage6_6, stage6_7, stage6_705, stage6_71, stage6_72, stage6_73, stage6_74, stage7, stage7_1, stage7_5, stage8, stage9, stageX) {
        super();

        this._stage1.stageName = stage1;
        this._stage2.stageName = stage2;
        this._stage3.stageName = stage3;
        this._stage4.stageName = stage4;
        this._stage5.stageName = stage5;
        this._stage5_5.stageName = stage5_5;
        this._stage6.stageName = stage6;
        this._stage6_05.stageName = stage6_05;
        this._stage6_1.stageName = stage6_1;
        this._stage6_2.stageName = stage6_2;
        this._stage6_3.stageName = stage6_3;
        this._stage6_5.stageName = stage6_5;
        this._stage6_6.stageName = stage6_6;
        this._stage6_7.stageName = stage6_7;
        this._stage6_705.stageName = stage6_705;
        this._stage6_71.stageName = stage6_71;
        this._stage6_72.stageName = stage6_72;
        this._stage6_73.stageName = stage6_73;
        this._stage6_74.stageName = stage6_74;
        this._stage7.stageName = stage7;
        this._stage7_1.stageName = stage7_1;
        this._stage7_5.stageName = stage7_5;
        this._stage8.stageName = stage8;
        this._stage9.stageName = stage9;
        this._stageX.stageName = stageX;
    }

    private _aStage: string = '';
    private _stage1: SalesStage = new SalesStage();
    private _stage2: SalesStage = new SalesStage();
    private _stage3: SalesStage = new SalesStage();
    private _stage4: SalesStage = new SalesStage();
    private _stage5: SalesStage = new SalesStage();
    private _stage5_5: SalesStage = new SalesStage();
    private _stage6: SalesStage = new SalesStage();
    private _stage6_05: SalesStage = new SalesStage();
    private _stage6_1: SalesStage = new SalesStage();
    private _stage6_2: SalesStage = new SalesStage();
    private _stage6_3: SalesStage = new SalesStage();
    private _stage6_5: SalesStage = new SalesStage();
    private _stage6_6: SalesStage = new SalesStage();
    private _stage6_7: SalesStage = new SalesStage();
    private _stage6_705: SalesStage = new SalesStage();
    private _stage6_71: SalesStage = new SalesStage();
    private _stage6_72: SalesStage = new SalesStage();
    private _stage6_73: SalesStage = new SalesStage();
    private _stage6_74: SalesStage = new SalesStage();
    private _stage7: SalesStage = new SalesStage();
    private _stage7_1: SalesStage = new SalesStage();
    private _stage7_5: SalesStage = new SalesStage();
    private _stage8: SalesStage = new SalesStage();
    private _stage9: SalesStage = new SalesStage();
    private _stageX: SalesStageWithDisposition = new SalesStageWithDisposition();

    get AStage(): string {
        return this._aStage;
    }
    set AStage(stage: string) {
        this._aStage = stage;
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
        this.checkAndSetFutureStages(this._stage1, this._stage5_5);
        this.checkAndSetFutureStages(this._stage1, this._stage6);
        this.checkAndSetFutureStages(this._stage1, this._stage6_05);
        this.checkAndSetFutureStages(this._stage1, this._stage6_1);
        this.checkAndSetFutureStages(this._stage1, this._stage6_2);
        this.checkAndSetFutureStages(this._stage1, this._stage6_3);
        this.checkAndSetFutureStages(this._stage1, this._stage6_5);
        this.checkAndSetFutureStages(this._stage1, this._stage6_6);
        this.checkAndSetFutureStages(this._stage1, this._stage6_7);
        this.checkAndSetFutureStages(this._stage1, this._stage6_705);
        this.checkAndSetFutureStages(this._stage1, this._stage6_71);
        this.checkAndSetFutureStages(this._stage1, this._stage6_72);
        this.checkAndSetFutureStages(this._stage1, this._stage6_73);
        this.checkAndSetFutureStages(this._stage1, this._stage6_74);
        this.checkAndSetFutureStages(this._stage1, this._stage7);
        this.checkAndSetFutureStages(this._stage1, this._stage7_1);
        this.checkAndSetFutureStages(this._stage1, this._stage7_5);
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
        this.checkAndSetFutureStages(this._stage2, this._stage5_5);
        this.checkAndSetFutureStages(this._stage2, this._stage6);
        this.checkAndSetFutureStages(this._stage2, this._stage6_05);
        this.checkAndSetFutureStages(this._stage2, this._stage6_1);
        this.checkAndSetFutureStages(this._stage2, this._stage6_2);
        this.checkAndSetFutureStages(this._stage2, this._stage6_3);
        this.checkAndSetFutureStages(this._stage2, this._stage6_5);
        this.checkAndSetFutureStages(this._stage2, this._stage6_6);
        this.checkAndSetFutureStages(this._stage2, this._stage6_7);
        this.checkAndSetFutureStages(this._stage2, this._stage6_705);
        this.checkAndSetFutureStages(this._stage2, this._stage6_71);
        this.checkAndSetFutureStages(this._stage2, this._stage6_72);
        this.checkAndSetFutureStages(this._stage2, this._stage6_73);
        this.checkAndSetFutureStages(this._stage2, this._stage6_74);
        this.checkAndSetFutureStages(this._stage2, this._stage7);
        this.checkAndSetFutureStages(this._stage2, this._stage7_1);
        this.checkAndSetFutureStages(this._stage2, this._stage7_5);
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
        this.checkAndSetFutureStages(this._stage3, this._stage5_5);
        this.checkAndSetFutureStages(this._stage3, this._stage6);
        this.checkAndSetFutureStages(this._stage3, this._stage6_05);
        this.checkAndSetFutureStages(this._stage3, this._stage6_1);
        this.checkAndSetFutureStages(this._stage3, this._stage6_2);
        this.checkAndSetFutureStages(this._stage3, this._stage6_3);
        this.checkAndSetFutureStages(this._stage3, this._stage6_5);
        this.checkAndSetFutureStages(this._stage3, this._stage6_6);
        this.checkAndSetFutureStages(this._stage3, this._stage6_7);
        this.checkAndSetFutureStages(this._stage3, this._stage6_705);
        this.checkAndSetFutureStages(this._stage3, this._stage6_71);
        this.checkAndSetFutureStages(this._stage3, this._stage6_72);
        this.checkAndSetFutureStages(this._stage3, this._stage6_73);
        this.checkAndSetFutureStages(this._stage3, this._stage6_74);
        this.checkAndSetFutureStages(this._stage3, this._stage7);
        this.checkAndSetFutureStages(this._stage3, this._stage7_1);
        this.checkAndSetFutureStages(this._stage3, this._stage7_5);
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
        this.checkAndSetFutureStages(this._stage4, this._stage5_5);
        this.checkAndSetFutureStages(this._stage4, this._stage6);
        this.checkAndSetFutureStages(this._stage4, this._stage6_05);
        this.checkAndSetFutureStages(this._stage4, this._stage6_1);
        this.checkAndSetFutureStages(this._stage4, this._stage6_2);
        this.checkAndSetFutureStages(this._stage4, this._stage6_3);
        this.checkAndSetFutureStages(this._stage4, this._stage6_5);
        this.checkAndSetFutureStages(this._stage4, this._stage6_6);
        this.checkAndSetFutureStages(this._stage4, this._stage6_7);
        this.checkAndSetFutureStages(this._stage4, this._stage6_705);
        this.checkAndSetFutureStages(this._stage4, this._stage6_71);
        this.checkAndSetFutureStages(this._stage4, this._stage6_72);
        this.checkAndSetFutureStages(this._stage4, this._stage6_73);
        this.checkAndSetFutureStages(this._stage4, this._stage6_74);
        this.checkAndSetFutureStages(this._stage4, this._stage7);
        this.checkAndSetFutureStages(this._stage4, this._stage7_1);
        this.checkAndSetFutureStages(this._stage4, this._stage7_5);
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
        this.checkAndSetFutureStages(this._stage5, this._stage5_5);
        this.checkAndSetFutureStages(this._stage5, this._stage6);
        this.checkAndSetFutureStages(this._stage5, this._stage6_05);
        this.checkAndSetFutureStages(this._stage5, this._stage6_1);
        this.checkAndSetFutureStages(this._stage5, this._stage6_2);
        this.checkAndSetFutureStages(this._stage5, this._stage6_3);
        this.checkAndSetFutureStages(this._stage5, this._stage6_5);
        this.checkAndSetFutureStages(this._stage5, this._stage6_6);
        this.checkAndSetFutureStages(this._stage5, this._stage6_7);
        this.checkAndSetFutureStages(this._stage5, this._stage6_705);
        this.checkAndSetFutureStages(this._stage5, this._stage6_71);
        this.checkAndSetFutureStages(this._stage5, this._stage6_72);
        this.checkAndSetFutureStages(this._stage5, this._stage6_73);
        this.checkAndSetFutureStages(this._stage5, this._stage6_74);
        this.checkAndSetFutureStages(this._stage5, this._stage7);
        this.checkAndSetFutureStages(this._stage5, this._stage7_1);
        this.checkAndSetFutureStages(this._stage5, this._stage7_5);
        this.checkAndSetFutureStages(this._stage5, this._stage8);
        this.checkAndSetFutureStages(this._stage5, this._stage9);
    }

    get stage5_5(): SalesStage {
        return this._stage5;
    }
    set stage5_5(data: SalesStage) {
        this._stage5_5.date = data.date ? new Date(data.date) : null;

        this.checkAndSetPastStages(this._stage5_5, this._stage1);
        this.checkAndSetPastStages(this._stage5_5, this._stage2);
        this.checkAndSetPastStages(this._stage5_5, this._stage3);
        this.checkAndSetPastStages(this._stage5_5, this._stage4);
        this.checkAndSetPastStages(this._stage5_5, this._stage5);
        this.checkAndSetFutureStages(this._stage5_5, this._stage6);
        this.checkAndSetFutureStages(this._stage5_5, this._stage6_05);
        this.checkAndSetFutureStages(this._stage5_5, this._stage6_1);
        this.checkAndSetFutureStages(this._stage5_5, this._stage6_2);
        this.checkAndSetFutureStages(this._stage5_5, this._stage6_3);
        this.checkAndSetFutureStages(this._stage5_5, this._stage6_5);
        this.checkAndSetFutureStages(this._stage5_5, this._stage6_6);
        this.checkAndSetFutureStages(this._stage5_5, this._stage6_7);
        this.checkAndSetFutureStages(this._stage5_5, this._stage6_705);
        this.checkAndSetFutureStages(this._stage5_5, this._stage6_71);
        this.checkAndSetFutureStages(this._stage5_5, this._stage6_72);
        this.checkAndSetFutureStages(this._stage5_5, this._stage6_73);
        this.checkAndSetFutureStages(this._stage5_5, this._stage6_74);
        this.checkAndSetFutureStages(this._stage5_5, this._stage7);
        this.checkAndSetFutureStages(this._stage5_5, this._stage7_1);
        this.checkAndSetFutureStages(this._stage5_5, this._stage7_5);
        this.checkAndSetFutureStages(this._stage5_5, this._stage8);
        this.checkAndSetFutureStages(this._stage5_5, this._stage9);
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
        this.checkAndSetPastStages(this._stage6, this._stage5_5);
        this.checkAndSetFutureStages(this._stage6, this._stage6_05);
        this.checkAndSetFutureStages(this._stage6, this._stage6_1);
        this.checkAndSetFutureStages(this._stage6, this._stage6_2);
        this.checkAndSetFutureStages(this._stage6, this._stage6_3);
        this.checkAndSetFutureStages(this._stage6, this._stage6_5);
        this.checkAndSetFutureStages(this._stage6, this._stage6_6);
        this.checkAndSetFutureStages(this._stage6, this._stage6_7);
        this.checkAndSetFutureStages(this._stage6, this._stage6_705);
        this.checkAndSetFutureStages(this._stage6, this._stage6_71);
        this.checkAndSetFutureStages(this._stage6, this._stage6_72);
        this.checkAndSetFutureStages(this._stage6, this._stage6_73);
        this.checkAndSetFutureStages(this._stage6, this._stage6_74);
        this.checkAndSetFutureStages(this._stage6, this._stage7);
        this.checkAndSetFutureStages(this._stage6, this._stage7_1);
        this.checkAndSetFutureStages(this._stage6, this._stage7_5);
        this.checkAndSetFutureStages(this._stage6, this._stage8);
        this.checkAndSetFutureStages(this._stage6, this._stage9);
    }

    get stage6_05(): SalesStage {
        return this._stage6_05;
    }
    set stage6_05(data: SalesStage) {
        this._stage6_05.date = data.date ? new Date(data.date) : null;

        this.checkAndSetPastStages(this._stage6_05, this._stage1);
        this.checkAndSetPastStages(this._stage6_05, this._stage2);
        this.checkAndSetPastStages(this._stage6_05, this._stage3);
        this.checkAndSetPastStages(this._stage6_05, this._stage4);
        this.checkAndSetPastStages(this._stage6_05, this._stage5);
        this.checkAndSetPastStages(this._stage6_05, this._stage5_5);
        this.checkAndSetPastStages(this._stage6_05, this._stage6);
        this.checkAndSetFutureStages(this._stage6_05, this._stage6_1);
        this.checkAndSetFutureStages(this._stage6_05, this._stage6_2);
        this.checkAndSetFutureStages(this._stage6_05, this._stage6_3);
        this.checkAndSetFutureStages(this._stage6_05, this._stage6_5);
        this.checkAndSetFutureStages(this._stage6_05, this._stage6_6);
        this.checkAndSetFutureStages(this._stage6_05, this._stage6_7);
        this.checkAndSetFutureStages(this._stage6_05, this._stage6_705);
        this.checkAndSetFutureStages(this._stage6_05, this._stage6_71);
        this.checkAndSetFutureStages(this._stage6_05, this._stage6_72);
        this.checkAndSetFutureStages(this._stage6_05, this._stage6_73);
        this.checkAndSetFutureStages(this._stage6_05, this._stage6_74);
        this.checkAndSetFutureStages(this._stage6_05, this._stage7);
        this.checkAndSetFutureStages(this._stage6_05, this._stage7_1);
        this.checkAndSetFutureStages(this._stage6_05, this._stage7_5);
        this.checkAndSetFutureStages(this._stage6_05, this._stage8);
        this.checkAndSetFutureStages(this._stage6_05, this._stage9);
    }

    get stage6_1(): SalesStage {
        return this._stage6_1;
    }
    set stage6_1(data: SalesStage) {
        this._stage6_1.date = data.date ? new Date(data.date) : null;

        this.checkAndSetPastStages(this._stage6_1, this._stage1);
        this.checkAndSetPastStages(this._stage6_1, this._stage2);
        this.checkAndSetPastStages(this._stage6_1, this._stage3);
        this.checkAndSetPastStages(this._stage6_1, this._stage4);
        this.checkAndSetPastStages(this._stage6_1, this._stage5);
        this.checkAndSetPastStages(this._stage6_1, this._stage5_5);
        this.checkAndSetPastStages(this._stage6_1, this._stage6);
        this.checkAndSetPastStages(this._stage6_1, this._stage6_05);
        this.checkAndSetFutureStages(this._stage6_1, this._stage6_2);
        this.checkAndSetFutureStages(this._stage6_1, this._stage6_3);
        this.checkAndSetFutureStages(this._stage6_1, this._stage6_5);
        this.checkAndSetFutureStages(this._stage6_1, this._stage6_6);
        this.checkAndSetFutureStages(this._stage6_1, this._stage6_7);
        this.checkAndSetFutureStages(this._stage6_1, this._stage6_705);
        this.checkAndSetFutureStages(this._stage6_1, this._stage6_71);
        this.checkAndSetFutureStages(this._stage6_1, this._stage6_72);
        this.checkAndSetFutureStages(this._stage6_1, this._stage6_73);
        this.checkAndSetFutureStages(this._stage6_1, this._stage6_74);
        this.checkAndSetFutureStages(this._stage6_1, this._stage7);
        this.checkAndSetFutureStages(this._stage6_1, this._stage7_1);
        this.checkAndSetFutureStages(this._stage6_1, this._stage7_5);
        this.checkAndSetFutureStages(this._stage6_1, this._stage8);
        this.checkAndSetFutureStages(this._stage6_1, this._stage9);
    }

    get stage6_2(): SalesStage {
        return this._stage6_2;
    }
    set stage6_2(data: SalesStage) {
        this._stage6_2.date = data.date ? new Date(data.date) : null;

        this.checkAndSetPastStages(this._stage6_2, this._stage1);
        this.checkAndSetPastStages(this._stage6_2, this._stage2);
        this.checkAndSetPastStages(this._stage6_2, this._stage3);
        this.checkAndSetPastStages(this._stage6_2, this._stage4);
        this.checkAndSetPastStages(this._stage6_2, this._stage5);
        this.checkAndSetPastStages(this._stage6_2, this._stage5_5);
        this.checkAndSetPastStages(this._stage6_2, this._stage6);
        this.checkAndSetPastStages(this._stage6_2, this._stage6_05);
        this.checkAndSetPastStages(this._stage6_2, this._stage6_1);
        this.checkAndSetFutureStages(this._stage6_2, this._stage6_3);
        this.checkAndSetFutureStages(this._stage6_2, this._stage6_5);
        this.checkAndSetFutureStages(this._stage6_2, this._stage6_6);
        this.checkAndSetFutureStages(this._stage6_2, this._stage6_7);
        this.checkAndSetFutureStages(this._stage6_2, this._stage6_705);
        this.checkAndSetFutureStages(this._stage6_2, this._stage6_71);
        this.checkAndSetFutureStages(this._stage6_2, this._stage6_72);
        this.checkAndSetFutureStages(this._stage6_2, this._stage6_73);
        this.checkAndSetFutureStages(this._stage6_2, this._stage6_74);
        this.checkAndSetFutureStages(this._stage6_2, this._stage7);
        this.checkAndSetFutureStages(this._stage6_2, this._stage7_1);
        this.checkAndSetFutureStages(this._stage6_2, this._stage7_5);
        this.checkAndSetFutureStages(this._stage6_2, this._stage8);
        this.checkAndSetFutureStages(this._stage6_2, this._stage9);
    }

    get stage6_3(): SalesStage {
        return this._stage6_3;
    }
    set stage6_3(data: SalesStage) {
        this._stage6_3.date = data.date ? new Date(data.date) : null;

        this.checkAndSetPastStages(this._stage6_3, this._stage1);
        this.checkAndSetPastStages(this._stage6_3, this._stage2);
        this.checkAndSetPastStages(this._stage6_3, this._stage3);
        this.checkAndSetPastStages(this._stage6_3, this._stage4);
        this.checkAndSetPastStages(this._stage6_3, this._stage5);
        this.checkAndSetPastStages(this._stage6_3, this._stage5_5);
        this.checkAndSetPastStages(this._stage6_3, this._stage6);
        this.checkAndSetPastStages(this._stage6_3, this._stage6_05);
        this.checkAndSetPastStages(this._stage6_3, this._stage6_1);
        this.checkAndSetPastStages(this._stage6_3, this._stage6_2);
        this.checkAndSetFutureStages(this._stage6_3, this._stage6_5);
        this.checkAndSetFutureStages(this._stage6_3, this._stage6_6);
        this.checkAndSetFutureStages(this._stage6_3, this._stage6_7);
        this.checkAndSetFutureStages(this._stage6_3, this._stage6_705);
        this.checkAndSetFutureStages(this._stage6_3, this._stage6_71);
        this.checkAndSetFutureStages(this._stage6_3, this._stage6_72);
        this.checkAndSetFutureStages(this._stage6_3, this._stage6_73);
        this.checkAndSetFutureStages(this._stage6_3, this._stage6_74);
        this.checkAndSetFutureStages(this._stage6_3, this._stage7);
        this.checkAndSetFutureStages(this._stage6_3, this._stage7_1);
        this.checkAndSetFutureStages(this._stage6_3, this._stage7_5);
        this.checkAndSetFutureStages(this._stage6_3, this._stage8);
        this.checkAndSetFutureStages(this._stage6_3, this._stage9);
    }

    get stage6_5(): SalesStage {
        return this._stage6_5;
    }
    set stage6_5(data: SalesStage) {
        this._stage6_5.date = data.date ? new Date(data.date) : null;

        this.checkAndSetPastStages(this._stage6_5, this._stage1);
        this.checkAndSetPastStages(this._stage6_5, this._stage2);
        this.checkAndSetPastStages(this._stage6_5, this._stage3);
        this.checkAndSetPastStages(this._stage6_5, this._stage4);
        this.checkAndSetPastStages(this._stage6_5, this._stage5);
        this.checkAndSetPastStages(this._stage6_5, this._stage5_5);
        this.checkAndSetPastStages(this._stage6_5, this._stage6);
        this.checkAndSetPastStages(this._stage6_5, this._stage6_05);
        this.checkAndSetPastStages(this._stage6_5, this._stage6_1);
        this.checkAndSetPastStages(this._stage6_5, this._stage6_2);
        this.checkAndSetPastStages(this._stage6_5, this._stage6_3);
        this.checkAndSetFutureStages(this._stage6_5, this._stage6_6);
        this.checkAndSetFutureStages(this._stage6_5, this._stage6_7);
        this.checkAndSetFutureStages(this._stage6_5, this._stage6_705);
        this.checkAndSetFutureStages(this._stage6_5, this._stage6_71);
        this.checkAndSetFutureStages(this._stage6_5, this._stage6_72);
        this.checkAndSetFutureStages(this._stage6_5, this._stage6_73);
        this.checkAndSetFutureStages(this._stage6_5, this._stage6_74);
        this.checkAndSetFutureStages(this._stage6_5, this._stage7);
        this.checkAndSetFutureStages(this._stage6_5, this._stage7_1);
        this.checkAndSetFutureStages(this._stage6_5, this._stage7_5);
        this.checkAndSetFutureStages(this._stage6_5, this._stage8);
        this.checkAndSetFutureStages(this._stage6_5, this._stage9);
    }

    get stage6_6(): SalesStage {
        return this._stage6_6;
    }
    set stage6_6(data: SalesStage) {
        this._stage6_6.date = data.date ? new Date(data.date) : null;

        this.checkAndSetPastStages(this._stage6_6, this._stage1);
        this.checkAndSetPastStages(this._stage6_6, this._stage2);
        this.checkAndSetPastStages(this._stage6_6, this._stage3);
        this.checkAndSetPastStages(this._stage6_6, this._stage4);
        this.checkAndSetPastStages(this._stage6_6, this._stage5);
        this.checkAndSetPastStages(this._stage6_6, this._stage5_5);
        this.checkAndSetPastStages(this._stage6_6, this._stage6);
        this.checkAndSetPastStages(this._stage6_6, this._stage6_05);
        this.checkAndSetPastStages(this._stage6_6, this._stage6_1);
        this.checkAndSetPastStages(this._stage6_6, this._stage6_2);
        this.checkAndSetPastStages(this._stage6_6, this._stage6_3);
        this.checkAndSetPastStages(this._stage6_6, this._stage6_5);
        this.checkAndSetFutureStages(this._stage6_6, this._stage6_7);
        this.checkAndSetFutureStages(this._stage6_6, this._stage6_705);
        this.checkAndSetFutureStages(this._stage6_6, this._stage6_71);
        this.checkAndSetFutureStages(this._stage6_6, this._stage6_72);
        this.checkAndSetFutureStages(this._stage6_6, this._stage6_73);
        this.checkAndSetFutureStages(this._stage6_6, this._stage6_74);
        this.checkAndSetFutureStages(this._stage6_6, this._stage7);
        this.checkAndSetFutureStages(this._stage6_6, this._stage7_1);
        this.checkAndSetFutureStages(this._stage6_6, this._stage7_5);
        this.checkAndSetFutureStages(this._stage6_6, this._stage8);
        this.checkAndSetFutureStages(this._stage6_6, this._stage9);
    }

    get stage6_7(): SalesStage {
        return this._stage6_7;
    }
    set stage6_7(data: SalesStage) {
        this._stage6_7.date = data.date ? new Date(data.date) : null;

        this.checkAndSetPastStages(this._stage6_7, this._stage1);
        this.checkAndSetPastStages(this._stage6_7, this._stage2);
        this.checkAndSetPastStages(this._stage6_7, this._stage3);
        this.checkAndSetPastStages(this._stage6_7, this._stage4);
        this.checkAndSetPastStages(this._stage6_7, this._stage5);
        this.checkAndSetPastStages(this._stage6_7, this._stage5_5);
        this.checkAndSetPastStages(this._stage6_7, this._stage6);
        this.checkAndSetPastStages(this._stage6_7, this._stage6_05);
        this.checkAndSetPastStages(this._stage6_7, this._stage6_1);
        this.checkAndSetPastStages(this._stage6_7, this._stage6_2);
        this.checkAndSetPastStages(this._stage6_7, this._stage6_3);
        this.checkAndSetPastStages(this._stage6_7, this._stage6_5);
        this.checkAndSetPastStages(this._stage6_7, this._stage6_6);
        this.checkAndSetFutureStages(this._stage6_7, this._stage6_705);
        this.checkAndSetFutureStages(this._stage6_7, this._stage6_71);
        this.checkAndSetFutureStages(this._stage6_7, this._stage6_72);
        this.checkAndSetFutureStages(this._stage6_7, this._stage6_73);
        this.checkAndSetFutureStages(this._stage6_7, this._stage6_74);
        this.checkAndSetFutureStages(this._stage6_7, this._stage7);
        this.checkAndSetFutureStages(this._stage6_7, this._stage7_1);
        this.checkAndSetFutureStages(this._stage6_7, this._stage7_5);
        this.checkAndSetFutureStages(this._stage6_7, this._stage8);
        this.checkAndSetFutureStages(this._stage6_7, this._stage9);
    }

    get stage6_705(): SalesStage {
        return this._stage6_705;
    }
    set stage6_705(data: SalesStage) {
        this._stage6_705.date = data.date ? new Date(data.date) : null;

        this.checkAndSetPastStages(this._stage6_705, this._stage1);
        this.checkAndSetPastStages(this._stage6_705, this._stage2);
        this.checkAndSetPastStages(this._stage6_705, this._stage3);
        this.checkAndSetPastStages(this._stage6_705, this._stage4);
        this.checkAndSetPastStages(this._stage6_705, this._stage5);
        this.checkAndSetPastStages(this._stage6_705, this._stage5_5);
        this.checkAndSetPastStages(this._stage6_705, this._stage6);
        this.checkAndSetPastStages(this._stage6_705, this._stage6_05);
        this.checkAndSetPastStages(this._stage6_705, this._stage6_1);
        this.checkAndSetPastStages(this._stage6_705, this._stage6_2);
        this.checkAndSetPastStages(this._stage6_705, this._stage6_3);
        this.checkAndSetPastStages(this._stage6_705, this._stage6_5);
        this.checkAndSetPastStages(this._stage6_705, this._stage6_6);
        this.checkAndSetPastStages(this._stage6_705, this._stage6_7);
        this.checkAndSetFutureStages(this._stage6_705, this._stage6_71);
        this.checkAndSetFutureStages(this._stage6_705, this._stage6_72);
        this.checkAndSetFutureStages(this._stage6_705, this._stage6_73);
        this.checkAndSetFutureStages(this._stage6_705, this._stage6_74);
        this.checkAndSetFutureStages(this._stage6_705, this._stage7);
        this.checkAndSetFutureStages(this._stage6_705, this._stage7_1);
        this.checkAndSetFutureStages(this._stage6_705, this._stage7_5);
        this.checkAndSetFutureStages(this._stage6_705, this._stage8);
        this.checkAndSetFutureStages(this._stage6_705, this._stage9);
    }

    get stage6_71(): SalesStage {
        return this._stage6_71;
    }
    set stage6_71(data: SalesStage) {
        this._stage6_71.date = data.date ? new Date(data.date) : null;

        this.checkAndSetPastStages(this._stage6_71, this._stage1);
        this.checkAndSetPastStages(this._stage6_71, this._stage2);
        this.checkAndSetPastStages(this._stage6_71, this._stage3);
        this.checkAndSetPastStages(this._stage6_71, this._stage4);
        this.checkAndSetPastStages(this._stage6_71, this._stage5);
        this.checkAndSetPastStages(this._stage6_71, this._stage5_5);
        this.checkAndSetPastStages(this._stage6_71, this._stage6);
        this.checkAndSetPastStages(this._stage6_71, this._stage6_05);
        this.checkAndSetPastStages(this._stage6_71, this._stage6_1);
        this.checkAndSetPastStages(this._stage6_71, this._stage6_2);
        this.checkAndSetPastStages(this._stage6_71, this._stage6_3);
        this.checkAndSetPastStages(this._stage6_71, this._stage6_5);
        this.checkAndSetPastStages(this._stage6_71, this._stage6_6);
        this.checkAndSetPastStages(this._stage6_71, this._stage6_7);
        this.checkAndSetPastStages(this._stage6_71, this._stage6_705);
        this.checkAndSetFutureStages(this._stage6_71, this._stage6_72);
        this.checkAndSetFutureStages(this._stage6_71, this._stage6_73);
        this.checkAndSetFutureStages(this._stage6_71, this._stage6_74);
        this.checkAndSetFutureStages(this._stage6_71, this._stage7);
        this.checkAndSetFutureStages(this._stage6_71, this._stage7_1);
        this.checkAndSetFutureStages(this._stage6_71, this._stage7_5);
        this.checkAndSetFutureStages(this._stage6_71, this._stage8);
        this.checkAndSetFutureStages(this._stage6_71, this._stage9);
    }

    get stage6_72(): SalesStage {
        return this._stage6_72;
    }
    set stage6_72(data: SalesStage) {
        this._stage6_72.date = data.date ? new Date(data.date) : null;

        this.checkAndSetPastStages(this._stage6_72, this._stage1);
        this.checkAndSetPastStages(this._stage6_72, this._stage2);
        this.checkAndSetPastStages(this._stage6_72, this._stage3);
        this.checkAndSetPastStages(this._stage6_72, this._stage4);
        this.checkAndSetPastStages(this._stage6_72, this._stage5);
        this.checkAndSetPastStages(this._stage6_72, this._stage5_5);
        this.checkAndSetPastStages(this._stage6_72, this._stage6);
        this.checkAndSetPastStages(this._stage6_72, this._stage6_05);
        this.checkAndSetPastStages(this._stage6_72, this._stage6_1);
        this.checkAndSetPastStages(this._stage6_72, this._stage6_2);
        this.checkAndSetPastStages(this._stage6_72, this._stage6_3);
        this.checkAndSetPastStages(this._stage6_72, this._stage6_5);
        this.checkAndSetPastStages(this._stage6_72, this._stage6_6);
        this.checkAndSetPastStages(this._stage6_72, this._stage6_7);
        this.checkAndSetPastStages(this._stage6_72, this._stage6_705);
        this.checkAndSetPastStages(this._stage6_72, this._stage6_71);
        this.checkAndSetFutureStages(this._stage6_72, this._stage6_73);
        this.checkAndSetFutureStages(this._stage6_72, this._stage6_74);
        this.checkAndSetFutureStages(this._stage6_72, this._stage7);
        this.checkAndSetFutureStages(this._stage6_72, this._stage7_1);
        this.checkAndSetFutureStages(this._stage6_72, this._stage7_5);
        this.checkAndSetFutureStages(this._stage6_72, this._stage8);
        this.checkAndSetFutureStages(this._stage6_72, this._stage9);
    }

    get stage6_73(): SalesStage {
        return this._stage6_73;
    }
    set stage6_73(data: SalesStage) {
        this._stage6_73.date = data.date ? new Date(data.date) : null;

        this.checkAndSetPastStages(this._stage6_73, this._stage1);
        this.checkAndSetPastStages(this._stage6_73, this._stage2);
        this.checkAndSetPastStages(this._stage6_73, this._stage3);
        this.checkAndSetPastStages(this._stage6_73, this._stage4);
        this.checkAndSetPastStages(this._stage6_73, this._stage5);
        this.checkAndSetPastStages(this._stage6_73, this._stage5_5);
        this.checkAndSetPastStages(this._stage6_73, this._stage6);
        this.checkAndSetPastStages(this._stage6_73, this._stage6_05);
        this.checkAndSetPastStages(this._stage6_73, this._stage6_1);
        this.checkAndSetPastStages(this._stage6_73, this._stage6_2);
        this.checkAndSetPastStages(this._stage6_73, this._stage6_3);
        this.checkAndSetPastStages(this._stage6_73, this._stage6_5);
        this.checkAndSetPastStages(this._stage6_73, this._stage6_6);
        this.checkAndSetPastStages(this._stage6_73, this._stage6_7);
        this.checkAndSetPastStages(this._stage6_73, this._stage6_705);
        this.checkAndSetPastStages(this._stage6_73, this._stage6_71);
        this.checkAndSetPastStages(this._stage6_73, this._stage6_72);
        this.checkAndSetFutureStages(this._stage6_73, this._stage6_74);
        this.checkAndSetFutureStages(this._stage6_73, this._stage7);
        this.checkAndSetFutureStages(this._stage6_73, this._stage7_1);
        this.checkAndSetFutureStages(this._stage6_73, this._stage7_5);
        this.checkAndSetFutureStages(this._stage6_73, this._stage8);
        this.checkAndSetFutureStages(this._stage6_73, this._stage9);
    }

    get stage6_74(): SalesStage {
        return this._stage6_74;
    }
    set stage6_74(data: SalesStage) {
        this._stage6_74.date = data.date ? new Date(data.date) : null;

        this.checkAndSetPastStages(this._stage6_74, this._stage1);
        this.checkAndSetPastStages(this._stage6_74, this._stage2);
        this.checkAndSetPastStages(this._stage6_74, this._stage3);
        this.checkAndSetPastStages(this._stage6_74, this._stage4);
        this.checkAndSetPastStages(this._stage6_74, this._stage5);
        this.checkAndSetPastStages(this._stage6_74, this._stage5_5);
        this.checkAndSetPastStages(this._stage6_74, this._stage6);
        this.checkAndSetPastStages(this._stage6_74, this._stage6_05);
        this.checkAndSetPastStages(this._stage6_74, this._stage6_1);
        this.checkAndSetPastStages(this._stage6_74, this._stage6_2);
        this.checkAndSetPastStages(this._stage6_74, this._stage6_3);
        this.checkAndSetPastStages(this._stage6_74, this._stage6_5);
        this.checkAndSetPastStages(this._stage6_74, this._stage6_6);
        this.checkAndSetPastStages(this._stage6_74, this._stage6_7);
        this.checkAndSetPastStages(this._stage6_74, this._stage6_705);
        this.checkAndSetPastStages(this._stage6_74, this._stage6_71);
        this.checkAndSetPastStages(this._stage6_74, this._stage6_72);
        this.checkAndSetPastStages(this._stage6_74, this._stage6_73);
        this.checkAndSetFutureStages(this._stage6_74, this._stage7);
        this.checkAndSetFutureStages(this._stage6_74, this._stage7_1);
        this.checkAndSetFutureStages(this._stage6_74, this._stage7_5);
        this.checkAndSetFutureStages(this._stage6_74, this._stage8);
        this.checkAndSetFutureStages(this._stage6_74, this._stage9);
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
        this.checkAndSetPastStages(this._stage7, this._stage5_5);
        this.checkAndSetPastStages(this._stage7, this._stage6);
        this.checkAndSetPastStages(this._stage7, this._stage6_05);
        this.checkAndSetPastStages(this._stage7, this._stage6_1);
        this.checkAndSetPastStages(this._stage7, this._stage6_2);
        this.checkAndSetPastStages(this._stage7, this._stage6_3);
        this.checkAndSetPastStages(this._stage7, this._stage6_5);
        this.checkAndSetPastStages(this._stage7, this._stage6_6);
        this.checkAndSetPastStages(this._stage7, this._stage6_7);
        this.checkAndSetPastStages(this._stage7, this._stage6_705);
        this.checkAndSetPastStages(this._stage7, this._stage6_71);
        this.checkAndSetPastStages(this._stage7, this._stage6_72);
        this.checkAndSetPastStages(this._stage7, this._stage6_73);
        this.checkAndSetPastStages(this._stage7, this._stage6_74);
        this.checkAndSetFutureStages(this._stage7, this._stage7_1);
        this.checkAndSetFutureStages(this._stage7, this._stage7_5);
        this.checkAndSetFutureStages(this._stage7, this._stage8);
        this.checkAndSetFutureStages(this._stage7, this._stage9);
    }

    get stage7_1(): SalesStage {
        return this._stage7_1;
    }
    set stage7_1(data: SalesStage) {
        this._stage7_1.date = data.date ? new Date(data.date) : null;

        this.checkAndSetPastStages(this._stage7_1, this._stage1);
        this.checkAndSetPastStages(this._stage7_1, this._stage2);
        this.checkAndSetPastStages(this._stage7_1, this._stage3);
        this.checkAndSetPastStages(this._stage7_1, this._stage4);
        this.checkAndSetPastStages(this._stage7_1, this._stage5);
        this.checkAndSetPastStages(this._stage7_1, this._stage5_5);
        this.checkAndSetPastStages(this._stage7_1, this._stage6);
        this.checkAndSetPastStages(this._stage7_1, this._stage6_05);
        this.checkAndSetPastStages(this._stage7_1, this._stage6_1);
        this.checkAndSetPastStages(this._stage7_1, this._stage6_2);
        this.checkAndSetPastStages(this._stage7_1, this._stage6_3);
        this.checkAndSetPastStages(this._stage7_1, this._stage6_5);
        this.checkAndSetPastStages(this._stage7_1, this._stage6_6);
        this.checkAndSetPastStages(this._stage7_1, this._stage6_7);
        this.checkAndSetPastStages(this._stage7_1, this._stage6_705);
        this.checkAndSetPastStages(this._stage7_1, this._stage6_71);
        this.checkAndSetPastStages(this._stage7_1, this._stage6_72);
        this.checkAndSetPastStages(this._stage7_1, this._stage6_73);
        this.checkAndSetPastStages(this._stage7_1, this._stage6_74);
        this.checkAndSetPastStages(this._stage7_1, this._stage7);
        this.checkAndSetFutureStages(this._stage7_1, this._stage7_5);
        this.checkAndSetFutureStages(this._stage7_1, this._stage8);
        this.checkAndSetFutureStages(this._stage7_1, this._stage9);
    }

    get stage7_5(): SalesStage {
        return this._stage7_5;
    }
    set stage7_5(data: SalesStage) {
        this._stage7_5.date = data.date ? new Date(data.date) : null;

        this.checkAndSetPastStages(this._stage7_5, this._stage1);
        this.checkAndSetPastStages(this._stage7_5, this._stage2);
        this.checkAndSetPastStages(this._stage7_5, this._stage3);
        this.checkAndSetPastStages(this._stage7_5, this._stage4);
        this.checkAndSetPastStages(this._stage7_5, this._stage5);
        this.checkAndSetPastStages(this._stage7_5, this._stage5_5);
        this.checkAndSetPastStages(this._stage7_5, this._stage6);
        this.checkAndSetPastStages(this._stage7_5, this._stage6_05);
        this.checkAndSetPastStages(this._stage7_5, this._stage6_1);
        this.checkAndSetPastStages(this._stage7_5, this._stage6_2);
        this.checkAndSetPastStages(this._stage7_5, this._stage6_3);
        this.checkAndSetPastStages(this._stage7_5, this._stage6_5);
        this.checkAndSetPastStages(this._stage7_5, this._stage6_6);
        this.checkAndSetPastStages(this._stage7_5, this._stage6_7);
        this.checkAndSetPastStages(this._stage7_5, this._stage6_705);
        this.checkAndSetPastStages(this._stage7_5, this._stage6_71);
        this.checkAndSetPastStages(this._stage7_5, this._stage6_72);
        this.checkAndSetPastStages(this._stage7_5, this._stage6_73);
        this.checkAndSetPastStages(this._stage7_5, this._stage7);
        this.checkAndSetPastStages(this._stage7_5, this._stage7_1);
        this.checkAndSetPastStages(this._stage7_5, this._stage6_74);
        this.checkAndSetFutureStages(this._stage7_5, this._stage8);
        this.checkAndSetFutureStages(this._stage7_5, this._stage9);
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
        this.checkAndSetPastStages(this._stage8, this._stage5_5);
        this.checkAndSetPastStages(this._stage8, this._stage6);
        this.checkAndSetPastStages(this._stage8, this._stage6_05);
        this.checkAndSetPastStages(this._stage8, this._stage6_1);
        this.checkAndSetPastStages(this._stage8, this._stage6_2);
        this.checkAndSetPastStages(this._stage8, this._stage6_3);
        this.checkAndSetPastStages(this._stage8, this._stage6_5);
        this.checkAndSetPastStages(this._stage8, this._stage6_6);
        this.checkAndSetPastStages(this._stage8, this._stage6_7);
        this.checkAndSetPastStages(this._stage8, this._stage6_705);
        this.checkAndSetPastStages(this._stage8, this._stage6_71);
        this.checkAndSetPastStages(this._stage8, this._stage6_72);
        this.checkAndSetPastStages(this._stage8, this._stage6_73);
        this.checkAndSetPastStages(this._stage8, this._stage7);
        this.checkAndSetPastStages(this._stage8, this._stage7_1);
        this.checkAndSetPastStages(this._stage8, this._stage6_74);
        this.checkAndSetPastStages(this._stage8, this._stage7_5);
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
        this.checkAndSetPastStages(this._stage9, this._stage5_5);
        this.checkAndSetPastStages(this._stage9, this._stage6);
        this.checkAndSetPastStages(this._stage9, this._stage6_05);
        this.checkAndSetPastStages(this._stage9, this._stage6_1);
        this.checkAndSetPastStages(this._stage9, this._stage6_2);
        this.checkAndSetPastStages(this._stage9, this._stage6_3);
        this.checkAndSetPastStages(this._stage9, this._stage6_5);
        this.checkAndSetPastStages(this._stage9, this._stage6_6);
        this.checkAndSetPastStages(this._stage9, this._stage6_7);
        this.checkAndSetPastStages(this._stage9, this._stage6_705);
        this.checkAndSetPastStages(this._stage9, this._stage6_71);
        this.checkAndSetPastStages(this._stage9, this._stage6_72);
        this.checkAndSetPastStages(this._stage9, this._stage6_73);
        this.checkAndSetPastStages(this._stage9, this._stage7);
        this.checkAndSetPastStages(this._stage9, this._stage7_1);
        this.checkAndSetPastStages(this._stage9, this._stage6_74);
        this.checkAndSetPastStages(this._stage9, this._stage7_5);
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
