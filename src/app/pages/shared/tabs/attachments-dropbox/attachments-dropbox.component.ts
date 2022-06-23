import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { version } from 'moment';
import { map } from 'rxjs/operators';
import { DropBoxAttachmentService } from '../../../../@core/backend/common/services/dropbox-attachment.service';
@Component({
  selector: 'ngx-attachments-dropbox',
  templateUrl: './attachments-dropbox.component.html',
  styleUrls: ['./attachments-dropbox.component.scss'],
})
export class AttachmentsDropboxComponent implements OnInit {
  @Input() AccountId: string;
  @Input() ContactId: string;
  @Input() OpportunityId: string;
  currentRole = 'user';
  loading: boolean = true;
  data: any[];
  path: string;
  breadcrumb: any[] = [];
  url: string;
  activatedRoute: ActivatedRoute;
  constructor(
    private attachmentsDropboxService: DropBoxAttachmentService,
    private changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.path = '/' + this.AccountId + '/' + this.ContactId + '/' + this.OpportunityId;
    this.attachmentsDropboxService.list(this.path).subscribe( d => {
        this.data = d;
        this.loading = false;
        this.breadcrumb.push(
          { name: 'Account', path: '/' + this.AccountId, type: 'folder' },
          { name: this.ContactId, path: '/' + this.AccountId + '/' + this.ContactId, type: 'folder' },
          { name: this.OpportunityId, path: '/' + this.AccountId + '/' + this.ContactId + '/' + this.OpportunityId, type: 'folder' },
        );
    }, e => {
        this.attachmentsDropboxService.create(this.path).toPromise().then(d => {
          this.ngOnInit();
        });
    });
  }

  select(item) {
    if (item.type === 'file') {
      this.attachmentsDropboxService.download(item.path);
    } else {
      this.listfoldercontents(item.path);
      this.breadcrumb.push(item);
    }
  }

  changeDirectory(directory: string) {

    // Find index that matches path selected
    const index = this.findWithAttribute(this.breadcrumb, 'path', directory);

    // remove all breadcrumbs after index selected
    this.breadcrumb.length = index + 1;

    this.listfoldercontents(directory);
  }

  findWithAttribute(array: any, attribute: string, value: string) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i][attribute] === value) {
        return i;
      }
    }
    // Return -1 when not found to mimic array.prototype.indexOf()
    return -1;
  }

  upload(file: File) {
    this.attachmentsDropboxService.upload(this.path, file).subscribe(c => {
      this.listfoldercontents(this.path);
    });
  }

  addTempFolder() {
    const newFolder = {name: 'new_folder', path: this.path, type: 'folder', editable: true};
    this.data.push(newFolder);
  }

  uploadFolderevent(event) {
    let name: string = event.target.value.trim();
    this.uploadFolder(name);
  }

  private uploadFolder(name: string) {
    let regex = /^(\.)|(\.)$|[<|>|:|"|\||\?|\*|~|\\|\/]|^CON$|^CON\.|^PRN$|^PRN\.|^AUX$|^AUX\.|^NUL$|^NUL\.|^COM[0-9]$|^COM[0-9]\.|^LPT[0-9]$|^LPT[0-9]\./gim;
    if (name !== '' && !name.match(regex)) {
      // let's validate if folder exists
      this.attachmentsDropboxService.list(this.path + '/' + name).subscribe(r => {
          // create a version
          let newName = name;
          let currentVersion = name.match(/_(\d+)$/);
          if (currentVersion == null) {
            newName = name + '_1';
          } else {
            let oldVersionNumber = name.substr(currentVersion.index + 1);
            let newVersionNumber = parseInt(oldVersionNumber, 10) + 1;
            newName = name.replace('_' + oldVersionNumber, '_' + newVersionNumber);
          }
          this.uploadFolder(newName);
      }, err => {
        this._doUploadFolder(name);
      });
    }
  }

  private _doUploadFolder(name: string) {
    const newPath = this.path + '/' + name;
    this.attachmentsDropboxService.create(newPath).subscribe(r => {
      this.listfoldercontents(this.path);
    });
  }

  private listfoldercontents(path) {
    this.attachmentsDropboxService.list(path).subscribe(d => {
      this.data = d;
      this.changeDetector.markForCheck();
    });
  }

  getCurrentFolderName(): string {
    try {
      let name = this.breadcrumb[this.breadcrumb.length - 1].name;
      return name;
    } catch {
      return this.OpportunityId;
    }
  }
}
