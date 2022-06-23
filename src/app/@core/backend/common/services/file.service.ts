import { FileApi } from '../api/file.api';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FileData } from '../../../interfaces/common/file';

@Injectable()
export class FileService implements FileData {
    constructor(private api: FileApi) {
    }

    list(id: string, type: string = 'opportunity'): Observable<any> {
        return this.api.list(id, type);
    }

    download(id: string, api: string, file: string): void {
        this.api.download(id, api, file);
    }

    upload(id: string, api: string, file: File): Observable<any> {
        return this.api.upload(id, api, file);
    }
}
