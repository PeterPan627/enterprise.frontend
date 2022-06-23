import { Observable } from 'rxjs';
import { TransType } from '../../../transtype';


export interface SalesStageService {
    updateSalesStage(id: string, data: any): Observable<any>;
    getSalesStage(id: string, type: string): Observable<any>;
}
