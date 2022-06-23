import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LawAdaData } from '../../../interfaces/law/law-ada.data';
import { LawAdaApi } from '../api/law-ada.api';

@Injectable()
export class LawAdaService implements LawAdaData {
    constructor(private api: LawAdaApi) {
    }

    getSettlement(id: string): Observable<any> {
        return this.api.getSettlement(id);
    }

    getDemand(id: string): Observable<any> {
        return this.api.getDemand(id);
    }

    getLawAndMotion(id: string): Observable<any> {
        return this.api.getLawAndMotion(id);
    }

    update(id: string, update): Observable<any> {
        return this.api.update(id, update);
    }
}
