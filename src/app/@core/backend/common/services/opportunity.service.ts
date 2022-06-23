import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { OpportunityData } from '../../../interfaces/opportunity/opportunity.data';
import { OpportunityApi } from '../api/opportunity.api';
import { SalesStageApi } from '../api/salesStage.api';
import { NotesHistoryApi } from '../api/notes-history.api';
import { LawAdaApi } from '../api/law-ada.api';
import { LawPersonalInjuryApi } from '../api/law-personal-injury.api';
import { LawP65Api } from '../api/law-p65.api';
import { TransType } from '../../../transtype';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable()
export class OpportunityService extends OpportunityData {
    constructor(
        private api: OpportunityApi,
        private ss_api: SalesStageApi,
        private nh_api: NotesHistoryApi,
        private law_ada_api: LawAdaApi,
        private law_pi_api: LawPersonalInjuryApi,
        private law_p65_api: LawP65Api,

    ) {
        super();
    }

    getGridDataSource(type?: string): DataSource {
        return this.api.getDataSource(type);
    }

    get(id: string, type?: string): Observable<any> {
        return this.api.get(id, type);
    }

    update(id: string, update): Observable<any> {
        return this.api.update(id, update);
    }

    create(data: any): Observable<any> {
        return this.api.create(data);
    }

    updateSalesStage(id: string, data: any): Observable<any> {
        return this.ss_api.updateSalesStages(id, 'Opportunity', data);
    }

    getSalesStage(id: string, type: string): Observable<any> {
        switch (type) {
            case TransType.Law_Ada_Ab:
                return this.law_ada_api.getSalesStages(id, 'Opportunity');
            case TransType.Law_P65:
                return this.law_p65_api.getSalesStages(id, 'Opportunity');
            case TransType.Law_Pi:
                return this.law_pi_api.getSalesStages(id, 'Opportunity');
            default:
                return this.ss_api.getSalesStages(id, 'Opportunity');
        }
    }
    createHistoryNote(id: string, type: string, data: any): Observable<any> {
        return this.nh_api.createHistoryNote(id, type, data);
    }
    getHistoryNotes(id: string, type: string): Observable<any> {
        return this.nh_api.getHistoryNotes(id, type);
    }

    // ADA Apis

    getAdaLawAndMotion(id: string): Observable<any> {
        return this.law_ada_api.getLawAndMotion(id);
    }

    getAdaDemands(id: string): Observable<any> {
        return this.law_ada_api.getDemand(id);
    }

    getSettlementAda(id: string): Observable<any> {
        return this.law_ada_api.getSettlement(id);
    }

    // P65 Apis
    getDemandP65(id: string): Observable<any> {
        return this.law_p65_api.getDemand(id);
    }

    getLawAndMotionP65(id: string): Observable<any> {
        return this.law_p65_api.getLawAndMotion(id);
    }

    getSettlementP65(id: string): Observable<any> {
        return this.law_p65_api.getSettlement(id);
    }


    // Personal Injury Apis
    getPersonalInjuryLawAndMotion(id: string): Observable<any> {
        return this.law_pi_api.getLawAndMotion(id);
    }

    getPersonalInjuryAccounting(id: string): Observable<any> {
        return this.law_pi_api.getAccounting(id);
    }

    getPersonalInjuryProcessing(id: string): Observable<any> {
        return this.law_pi_api.getProcessing(id);
    }
}
