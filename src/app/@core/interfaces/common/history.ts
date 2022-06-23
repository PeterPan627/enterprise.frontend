import { Observable } from 'rxjs';

export interface NotesHistoryService {
    createHistoryNote(id: string, type: string, data: any): Observable<any>;
    getHistoryNotes(id: string, type: string): Observable<any>;
}
