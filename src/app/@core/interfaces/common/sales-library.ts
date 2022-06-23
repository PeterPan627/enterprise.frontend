import { Observable } from 'rxjs';

export interface SalesLibrary {
    name: string;
    type: string;
    path: string;
}

export abstract class SalesLibraryData {
    abstract list(path: string): Observable<any>;
    abstract download(file: string): void;
}
