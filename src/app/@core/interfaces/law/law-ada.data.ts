import { Observable } from 'rxjs';

export abstract class LawAdaData {
    abstract getLawAndMotion(id: string): Observable<any>;
    abstract getSettlement(id: string): Observable<any>;
    abstract getDemand(id: string): Observable<any>;
    abstract update(id: string, update): Observable<any>;
}
