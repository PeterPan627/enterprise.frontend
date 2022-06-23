import { HttpParams } from '@angular/common/http';
import { NbThemeService } from '@nebular/theme';
import { ConfigurationService } from './configuration.service';
import { Configuration } from '../@core/interfaces/common/configuration';
import { Tenant } from '../@core/interfaces/common/tenant';
import { ConfigurationApi } from '../@core/backend/common/api/configuration.api';
import { Injector } from '@angular/core';
import { InitUserService } from '../@theme/services/init-user.service';

export function initApp(
        injector: Injector,
        api: ConfigurationApi,
        configService: ConfigurationService,
        themeService: NbThemeService,
    ) {
    const host = window.location.host;
    const subdomain = host.split('.')[0];
    const httpParams = new HttpParams().set('Tenant', subdomain);
    const response = () =>  api.get(httpParams)
    .then(config => {
        configService.configuration = config;
        themeService.changeTheme(configService.configuration.tenant.theme);
    }).then(() => {
        new Promise<any>((resolve: Function) => {
            const initUserService = injector.get(InitUserService);
            initUserService.initCurrentUser().subscribe(() => { },
              () => resolve(), () => resolve()); // a place for logging error
          });
    })
    .catch( (e) => {
        const googleLogo = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
        const configuration = { } as  Configuration;
        configuration.tenant = { } as Tenant;
        configuration.tenant.name = 'Google';
        configuration.tenant.logo = googleLogo;
        configuration.tenant.theme = 'corporate';

        configService.configuration = configuration;
        themeService.changeTheme(configuration.tenant.theme);
    });
    return response;
}
