import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { Observable } from 'rxjs';
import { SalesStageService } from '../common/SalesStage/SalesStageService';
import { NotesHistoryService } from '../common/history';
import { TransType } from '../../transtype';
export abstract class ContactData implements SalesStageService, NotesHistoryService {
    abstract createHistoryNote(id: string, type: string, data: any): Observable<any>;
    abstract getHistoryNotes(id: string, type: string): Observable<any>;
    abstract updateSalesStage(id: string, data: any): Observable<any>;
    abstract getSalesStage(id: string, type: string): Observable<any>;
    abstract getGridDataSource(type?: string): DataSource;
    abstract get(id: string, type: string): Observable<any>;
    abstract update(id: string, update): Observable<any>;
    abstract create(data: any): Observable<any>;
}
