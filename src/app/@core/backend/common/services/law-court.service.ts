import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LawCourtData } from '../../../interfaces/law/law-court.data';
import { LawCourtApi } from '../api/law-court.api';

@Injectable()
export class LawCourtService implements LawCourtData {
    constructor(private api: LawCourtApi) {
    }

    get(id: string): Observable<any> {
        return this.api.get(id);
    }

    update(id: string, update): Observable<any> {
        return this.api.update(id, update);
    }
}
