import { Observable } from 'rxjs';

export abstract class LawPersonalInjuryData {
    abstract getLawAndMotion(id: string): Observable<any>;
    abstract getProcessing(id: string): Observable<any>;
    abstract update(id: string, update): Observable<any>;
}

