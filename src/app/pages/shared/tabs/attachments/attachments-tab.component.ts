import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FileService } from '../../../../@core/backend/common/services/file.service';

@Component({
    selector: 'ngx-attachments-tab',
    styleUrls: ['./attachments-tab.component.scss'],
    templateUrl: './attachments-tab.component.html',
})
export class AttachmentsTabComponent implements OnDestroy, OnInit {
    @Input() id = '';
    @Input() type = '';

    files = [];
    constructor(private fileService: FileService) {

    }
    ngOnDestroy(): void {

    }

    ngOnInit(): void {
        this.loadFiles(this.id);
    }


    download(filename: string) {
        this.fileService.download(this.id, this.type, filename);
    }

    upload(file: File) {
        this.fileService.upload(this.id, this.type, file).subscribe(c => {
            this.loadFiles(this.id);
        });
    }

    loadFiles(id) {
        this.fileService.list(id, this.type)
        .subscribe((files) => {
            this.files = files;
        });
    }
}
