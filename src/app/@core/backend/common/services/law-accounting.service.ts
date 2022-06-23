import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LawAccountingData } from '../../../interfaces/law/law-accounting.data';
import { LawAccountingApi } from '../api/law-accounting.api';

@Injectable()
export class LawAccountingService implements LawAccountingData {
    constructor(private api: LawAccountingApi) {
    }

    get(id: string): Observable<any> {
        return this.api.get(id);
    }

    update(id: string, update): Observable<any> {
        return this.api.update(id, update);
    }
}
