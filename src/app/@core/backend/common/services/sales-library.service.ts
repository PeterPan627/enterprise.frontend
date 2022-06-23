import { SalesLibraryData } from '../../../interfaces/common/sales-library';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesLibraryApi } from '../api/sales-library.api';

@Injectable()
export class SalesLibraryService implements SalesLibraryData {
    constructor(private api: SalesLibraryApi) {
    }

    list(path: string): Observable<any> {
        return this.api.list(path);
    }

    download(file: string): void {
        this.api.download(file);
    }
}
