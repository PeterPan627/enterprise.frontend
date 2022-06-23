import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LawPersonalInjuryData } from '../../../interfaces/law/law-personal-injury.data';
import { LawPersonalInjuryApi } from '../api/law-personal-injury.api';

@Injectable()
export class LawPersonalInjuryService implements LawPersonalInjuryData {
    constructor(private api: LawPersonalInjuryApi) {
    }

    getProcessing(id: string): Observable<any> {
        return this.api.getProcessing(id);
    }

    getLawAndMotion(id: string): Observable<any> {
        return this.api.getLawAndMotion(id);
    }

    update(id: string, update): Observable<any> {
        return this.api.update(id, update);
    }
}
