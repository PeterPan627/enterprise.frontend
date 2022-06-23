import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { ContactData } from '../../../interfaces/contact/contact.data';
import { ContactApi } from '../api/contact.api';
import { SalesStageApi } from '../api/salesStage.api';
import { NotesHistoryApi } from '../api/notes-history.api';
@Injectable()
export class ContactService extends ContactData {
    constructor(private api: ContactApi,
        private ss_api: SalesStageApi,
        private nh_api: NotesHistoryApi,
    ) {
        super();
    }
    getGridDataSource(type?: string): DataSource {
        return this.api.getDataSource(type);
    }
    get(id: string, type: string): Observable<any> {
        return this.api.get(id, type);
    }
    update(id: string, update): Observable<any> {
        return this.api.update(id, update);
    }
    create(data: any): Observable<any> {
        return this.api.create(data);
    }
    updateSalesStage(id: string, data: any): Observable<any> {
        return this.ss_api.updateSalesStages(id, 'Contact', data);
    }
    getSalesStage(id: string): Observable<any> {
        return this.ss_api.getSalesStages(id, 'Contact');
    }
    createHistoryNote(id: string, type: string, data: any): Observable<any> {
        return this.nh_api.createHistoryNote(id, type, data);
    }
    getHistoryNotes(id: string, type: string): Observable<any> {
        return this.nh_api.getHistoryNotes(id, type);
    }
}
