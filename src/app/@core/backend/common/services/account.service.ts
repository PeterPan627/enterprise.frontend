import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { AccountApi } from '../api/account.api';
import { SalesStageApi } from '../api/salesStage.api';
import { AccountData } from '../../../interfaces/account/account.data';
import { NotesHistoryApi } from '../api/notes-history.api';
@Injectable()
export class AccountService extends AccountData {
    constructor(
        private api: AccountApi,
        private ss_api: SalesStageApi,
        private nh_api: NotesHistoryApi,
    ) {
        super();
    }
    getGridDataSource(type?: string): DataSource {
        return this.api.getDataSource(type);
    }
    get(id: string,  type: string): Observable<any> {
        return this.api.get(id, type);
    }
    update(id: string, update): Observable<any> {
        return this.api.update(id, update);
    }
    create(data: any): Observable<any> {
        return this.api.create(data);
    }
    updateSalesStage(id: string, data: any): Observable<any> {
        return this.ss_api.updateSalesStages(id, 'Account', data);
    }
    getSalesStage(id: string): Observable<any> {
        return this.ss_api.getSalesStages(id, 'Account');
    }
    createHistoryNote(id: string, type: string, data: any): Observable<any> {
        return this.nh_api.createHistoryNote(id, type, data);
    }
    getHistoryNotes(id: string, type: string): Observable<any> {
        return this.nh_api.getHistoryNotes(id, type);
    }
}
