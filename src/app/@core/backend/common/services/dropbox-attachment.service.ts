import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DropBoxAttachmentData } from '../../../interfaces/common/dropbox-attachment.data';
import { DropboxAttachmentsApi } from '../api/dropbox-attachments.api';

@Injectable()
export class DropBoxAttachmentService implements DropBoxAttachmentData {
    constructor(private api: DropboxAttachmentsApi) {
    }

    list(path: string): Observable<any> {
        return this.api.list(path);
    }

    download(file: string): void {
        this.api.download(file);
    }

    upload(path: string, file: File): Observable<any> {
        return this.api.upload(path, file);
    }

    create(path: string): Observable<any> {
        if (path[0] !== '/') {
            path = '/' + path;
        }
        return this.api.create(path);
    }
}
