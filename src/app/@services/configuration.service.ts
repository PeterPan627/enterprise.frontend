import { Injectable } from '@angular/core';
import { Configuration } from '../@core/interfaces/common/configuration';

@Injectable()
export class ConfigurationService {

    configuration: Configuration;

    constructor() { }
}
