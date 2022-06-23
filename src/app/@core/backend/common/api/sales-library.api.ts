import { Injectable } from '@angular/core';
import { ExternalHttpService } from './external-http.service';
import { ConfigurationService } from '../../../../@services/configuration.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DropboxApi } from './dropbox.api';

@Injectable()
export class SalesLibraryApi extends DropboxApi {
    constructor(http: HttpClient, config: ConfigurationService) {
        super(http, config, 'sales-library');
    }
}
